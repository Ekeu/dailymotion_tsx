import React, { ComponentProps, FC } from 'react';

interface IInputProps extends ComponentProps<'input'> {}

const Input: FC<IInputProps> = ({ onChange, value, disabled }) => {
  return (
    <div className='relative rounded-full shadow-sm'>
      <input
        type='text'
        value={value}
        name='reason'
        disabled={disabled}
        placeholder='Reason'
        onChange={onChange}
        className='block w-full rounded-md border border-slate-600 px-4 py-3 text-slate-900 text-md leading-6 font-satoshi placeholder:text-slate-300 focus:outline-none'
      />
    </div>
  );
};

export default Input;
