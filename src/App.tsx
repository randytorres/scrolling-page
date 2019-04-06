import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { SideBar } from './SideBar'
import { SectionContainer } from './SectionContainer'

export const App = () => (
  <Wrapper>
    <Global styles={globalStyles} />
    <SideBar />
    <SectionContainer />
  </Wrapper>
)

const Wrapper = styled.div({
  display: 'flex',
})

const globalStyles = css({
  body: {
    margin: 0,
    padding: 0,
  },
})
