import React, { FC } from 'react';
import styled from 'styled-components';
import Header from "../header";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({children}) => {

  const LayoutEl = styled.div`
    display: block;
  `

  return (
    <LayoutEl>
      <Header />
      {children}
    </LayoutEl>
  );
};

export default Layout;
