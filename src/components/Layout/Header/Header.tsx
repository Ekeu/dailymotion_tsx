import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className='mx-auto max-w-7xl px-8 items-center justify-center'>
      <h1 className='text-8xl line-through decoration-violet-600 font-bold text-center font-satoshi text-slate-800'>
        Moderator
      </h1>
    </div>
  );
};

export default Header;
