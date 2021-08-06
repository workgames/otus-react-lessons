import React from 'react';
import cn from 'classnames';
import './style.scss';

type InfoGeneratorsProps = {
  /**
   * Заголовок
   */
  label?: string;
  /**
   * Кол-во сгенерированных
   */
  count: number;
};

export const InfoGenerators = ({
  label = 'Generators',
  count = 0,
}: InfoGeneratorsProps): JSX.Element => {
  return <div className={cn('inf')}>{`${label} : ${count}`}</div>;
};
