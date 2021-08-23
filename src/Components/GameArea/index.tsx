import React, { useEffect, useState } from 'react';
import { GridBlock } from '@/Components/Grid/GridBlock';
import { Button } from '@/Components/Button';
import './style.scss';
import { TitleBlockText } from '@/Components/TitleBlockText';
import Select from 'react-select';
import { arrayClone, getDataGrid, getSizeArea, seedGameArea } from '@/helpers/gameDataPreparation';
import { OptionSizeArea, SizeArea } from '@/Components/Grid/types.game';

const optionsSizeArea: OptionSizeArea[] = [
  { value: 1, label: '20x30' },
  { value: 2, label: '30x50' },
  { value: 3, label: '40x60' },
];

let intervalPaydId: NodeJS.Timeout;

export const GameArea = () => {
  const [sizeArea, setSizeArea] = useState<SizeArea>({ rows: 20, cols: 30 });
  const [selectedOptionSizeArea, setSelectedOptionSizeArea] = useState<OptionSizeArea>(
    optionsSizeArea[0]
  );
  const [generation, setGeneration] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [speedGame, setSpeedGame] = useState<number>(1000);
  const [selectCell, setSelectCell] = useState({ row: 0, col: 0 });
  const [gridData, setGridData] = useState<boolean[][]>(getDataGrid(sizeArea.rows, sizeArea.cols));

  const selectCellHandler = (row: number, col: number) => {
    const gridCopy = arrayClone(gridData);
    gridCopy[row][col] = !gridCopy[row][col];
    setSelectCell({ row, col });
    setGridData(gridCopy);
  };

  const seedInit = (data?: boolean[][]) => {
    const gridCopy = seedGameArea(sizeArea.rows, sizeArea.cols, data || arrayClone(gridData));
    setGridData(gridCopy);
  };

  const seedButtonHandler = () => {
    clearInterval(intervalPaydId);
    setStartGame(false);
    seedInit(getDataGrid(sizeArea.rows, sizeArea.cols));
  };

  useEffect(() => {
    seedInit();
    return () => clearInterval(intervalPaydId);
  }, []);

  useEffect(() => {
    if (startGame) {
      handlerStartGame();
    }
  }, [gridData, startGame]);

  const payGame = (): void => {
    const gameData = gridData;
    const gameData2 = arrayClone(gridData);

    for (let i = 0; i < sizeArea.rows; i++) {
      for (let j = 0; j < sizeArea.cols; j++) {
        let count = 0;
        if (i > 0) if (gameData[i - 1][j]) count++;
        if (i > 0 && j > 0) if (gameData[i - 1][j - 1]) count++;
        if (i > 0 && j < sizeArea.cols - 1) if (gameData[i - 1][j + 1]) count++;
        if (j < sizeArea.cols - 1) if (gameData[i][j + 1]) count++;
        if (j > 0) if (gameData[i][j - 1]) count++;
        if (i < sizeArea.rows - 1) if (gameData[i + 1][j]) count++;
        if (i < sizeArea.rows - 1 && j > 0) if (gameData[i + 1][j - 1]) count++;
        if (i < sizeArea.rows - 1 && sizeArea.cols - 1) if (gameData[i + 1][j + 1]) count++;
        if (gameData[i][j] && (count < 2 || count > 3)) gameData2[i][j] = false;
        if (!gameData[i][j] && count === 3) gameData2[i][j] = true;
      }
    }
    setGeneration((prevState) => prevState + 1);
    setGridData(gameData2);
  };

  const handlerStartGame = () => {
    clearInterval(intervalPaydId);
    intervalPaydId = setInterval(payGame, speedGame);
  };

  const handlerClearButton = () => {
    clearInterval(intervalPaydId as NodeJS.Timeout);
    setGridData(getDataGrid(sizeArea.rows, sizeArea.cols));
    setStartGame(false);
    setGeneration(0);
  };

  const handlerStopButton = () => {
    setStartGame(false);
    clearInterval(intervalPaydId);
  };

  const handleChangeSizeArea = (selectedOption: OptionSizeArea | null) => {
    if (selectedOption) {
      clearInterval(intervalPaydId as NodeJS.Timeout);
      const size = getSizeArea(selectedOption.label);
      setSizeArea({ rows: size.rows, cols: size.cols });
      setSelectedOptionSizeArea(selectedOption);
      setGridData(getDataGrid(size.rows, size.cols));
      setStartGame(false);
      setGeneration(0);
    }
  };

  return (
    <div>
      <div data-testid="buttons" className="buttonsGame">
        <Button
          data-testid="btn-start"
          onClick={() => setStartGame(true)}
          label="Pay"
          size="large"
        />
        <Button onClick={handlerStopButton} label="Pause" size="large" />
        <Button data-testid="btn-clear" onClick={handlerClearButton} label="Clear" size="large" />
        <Button
          onClick={() => setSpeedGame((prevState) => prevState + 100)}
          label="Slow"
          size="large"
        />
        <Button
          onClick={() => setSpeedGame((prevState) => prevState - 100)}
          label="Fast"
          size="large"
        />
        <Button data-testid="btn-seed" onClick={seedButtonHandler} label="Seed" size="large" />
      </div>
      <div data-testid="select-size">
        <Select
          value={selectedOptionSizeArea}
          onChange={handleChangeSizeArea}
          options={optionsSizeArea}
        />
      </div>
      <GridBlock
        gridData={gridData}
        onSelectCell={selectCellHandler}
        selectCell={selectCell}
        cols={sizeArea.cols}
        rows={sizeArea.rows}
      />
      <TitleBlockText label={`Generations: ${generation}`} size={24} />
    </div>
  );
};
