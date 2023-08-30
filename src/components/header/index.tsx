import React, { FC } from 'react';
import styled from 'styled-components'

import Container from '../container';
import Hamburger from '../hamburger';

const Header: FC = () => {

  const HeaderEl = styled.header`
    padding: 10px 0;
    display: block;
  `

  const HeaderInnerEl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    display: inline-block;
  `

  return (
    <HeaderEl>
      <Container size="large">
        <HeaderInnerEl>
          <Title>Schedules</Title>
          <Hamburger open={false} />
        </HeaderInnerEl>
      </Container>
    </HeaderEl>
  );
};

export default Header;
