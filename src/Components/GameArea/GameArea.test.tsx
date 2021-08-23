import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { GameArea } from '@/Components/GameArea';
import userEvent from '@testing-library/user-event';
import { OptionSizeArea } from '@/Components/Grid/types.game';

afterEach(cleanup);

type SelectProps = {
  options: OptionSizeArea[];
  value: number;
  onChange: (params: OptionSizeArea) => void;
};

jest.mock(
  'react-select',
  () =>
    function ReactSelect({ options, value, onChange }: SelectProps) {
      function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onChange({
          value: event.target.value,
          label: event.target.options[event.target.selectedIndex].text,
        });
      }

      return (
        <select data-testid="select" value={value} onChange={handleChange}>
          {options?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    }
);

describe('Game Area', () => {
  it('Assigned elements', () => {
    const { queryByTestId, getAllByTestId } = render(<GameArea />);
    expect(queryByTestId('buttons')).toBeInTheDocument();
    expect(queryByTestId('select-size')).toBeInTheDocument();
    expect(getAllByTestId('cell').length > 0).toBeTruthy();
  });

  it('Select size Area', () => {
    const { getByText } = render(<GameArea />);
    expect(getByText('20x30')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 2 },
    });
    expect(getByText('30x50')).toBeInTheDocument();
  });

  it('Button start game click', async () => {
    const { getByTestId, container } = render(<GameArea />);
    const btn = getByTestId('btn-start');
    userEvent.click(btn);
    const cells = container.querySelectorAll('.on');
    expect(cells.length).toBeGreaterThan(5);
  });

  it('Button clear game click', async () => {
    const { container, getByTestId } = render(<GameArea />);
    const btn = getByTestId('btn-clear');
    userEvent.click(btn);
    const cells = container.querySelectorAll('.on');
    expect(cells.length).toBe(0);
  });

  it('Button seed game click', async () => {
    const { container, getByTestId } = render(<GameArea />);
    const btn = getByTestId('btn-clear');
    userEvent.click(btn);
    const cells = container.querySelectorAll('.on');
    expect(cells.length).toBe(0);
    const btnSeed = getByTestId('btn-seed');
    userEvent.click(btnSeed);
    const cellsSeed = container.querySelectorAll('.on');
    expect(cellsSeed.length > 0).toBeTruthy();
  });
});
