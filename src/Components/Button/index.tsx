import React from 'react';
import cn from 'classnames';
import './style.scss';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cn('button', `button--${size}`, { ['button--primary']: primary })}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
