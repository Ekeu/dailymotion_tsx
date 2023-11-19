import classNames from 'classnames';
import React, { FC } from 'react';

interface IHeaderLabelProps {
  header: string;
  label: string;
  headerClassName?: string;
  labelClassName?: string;
}

const HeaderLabel: FC<IHeaderLabelProps> = ({
  header,
  label,
  headerClassName,
  labelClassName,
}) => {
  return (
    <div className='font-satoshi'>
      <h3
        className={classNames(
          'text-lg font-semibold leading-8 text-slate-800 tracking-tight',
          headerClassName
        )}
      >
        {header}
      </h3>
      <p
        className={classNames(
          'text-base leading-7 text-slate-700',
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default HeaderLabel;
