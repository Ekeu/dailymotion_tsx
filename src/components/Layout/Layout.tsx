import React, { FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='min-h-full'>
      <main className='p-10'>{children}</main>
    </div>
  );
};

export default Layout;
