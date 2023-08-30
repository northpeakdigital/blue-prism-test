import React, { FC } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: any;
  size: string;
}

const Container: FC<ContainerProps> = ({ children, size }) => {

  const ContainerEl = styled.div`
    display: block;
    margin: 0 auto;
    padding: 0 30px;
    max-width: ${size === "large" ? "1400px" : "900px"};
  `

  return (
    <ContainerEl>
      {children}
    </ContainerEl>
  );
};

export default Container;
