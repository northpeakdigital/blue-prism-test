import React, { FC } from 'react';
import styled from 'styled-components'

interface HamburgerProps {
  open: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ open }) => {

  const HamburgerEl = styled.header`
    width: 52px;
    height: 52px;
    cursor: pointer;
    position: relative;
    margin-right: -14px;

    ${open && `
      transform: rotate(180deg);
    `}
  `

  const HamburgerInnerEl = styled.header`
    left: 50%;
    width: 24px;
    height: 2px;
    position: absolute;
    background-color: black;
    transform: translateX(-50%);
    transition: .25s ease-in-out;

    &:nth-of-type(1) {
      top: 18px;
    }

    &:nth-of-type(2) {
      top: 25px;
    }

    &:nth-of-type(3) {
      top: 32px;
    }

    ${open && `
      &:nth-of-type(1) {
        top: 25px;
        transform: translateX(-50%) rotate(-45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        top: 25px;
        transform: translateX(-50%) rotate(45deg);
      }
    `}
  `

  return (
    <HamburgerEl>
      <HamburgerInnerEl />
      <HamburgerInnerEl />
      <HamburgerInnerEl />
    </HamburgerEl>
  );
};

export default Hamburger;
