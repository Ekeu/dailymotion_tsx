import classNames from 'classnames';
import React, { ComponentProps, FC } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
  kind?: 'primary' | 'secondary' | 'outline';
}

const Button: FC<IButtonProps> = ({
  kind = 'primary',
  type = 'button',
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'rounded px-3 py-3 text-md font-medium font-satoshi shadow-sm focus-visible:outline-none',
        kind === 'primary' &&
          'bg-violet-600 text-white hover:bg-violet-700 disabled:bg-violet-300',
        kind === 'secondary' &&
          'bg-slate-800 text-white hover:bg-slate-700 disabled:bg-slate-300',
        kind === 'outline' &&
          'bg-white text-slate-800 ring-1 ring-inset ring-slate-400 hover:bg-slate-100',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
