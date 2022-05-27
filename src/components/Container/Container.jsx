import React from 'react'
import {Wrapper} from './Container.styles';
import TopContainer from './../TopContainer/TopContainer';
import MainContainer from '../MainContainer/MainContainer';
export default function Container() {
  return (
    <Wrapper>
      <TopContainer />
      <MainContainer/>
    </Wrapper>
  )
}

