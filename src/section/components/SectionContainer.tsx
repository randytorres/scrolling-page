import React from 'react'
import styled from '@emotion/styled'
import { Column, SECTIONS } from '../../global'
import { Section } from './Section'

export const SectionContainer: React.FC<{}> = () => (
  <Container>
    {SECTIONS.map(section => <Section key={section.route} {...section} />)}
  </Container>
)

const Container = styled(Column)({
  height: '100%',
  width: '100%',
  marginLeft: '8rem',
})