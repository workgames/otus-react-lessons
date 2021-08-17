import React from 'react';

type Props = {
  label: string;
  size?: number;
};

export const TitleBlockText = ({ label, size = 16 }: Props): JSX.Element => {
  return <div style={{ fontSize: `${size}px` }}>{label}</div>;
};
