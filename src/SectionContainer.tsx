import React from 'react'
import styled from '@emotion/styled'
import { Section } from './Section'
import { SECTIONS } from './constants'

export const SectionContainer = () => (
  <Container>
    {SECTIONS.map(section => <Section key={section.route} {...section} />)}
  </Container>
)

const Container = styled.div({
  height: '100%',
  width: '100%',
  marginLeft: '8rem',
  display: 'flex',
  flexDirection: 'column',
})