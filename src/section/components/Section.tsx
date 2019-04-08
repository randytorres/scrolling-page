import React from 'react'
import styled from '@emotion/styled'
import { colors, FlexContainer, SectionProps } from '../../global'

export const Section: React.FC<SectionProps> = ({ label, route }) => (
  <SectionWithStyles id={route}>
    {label}
  </SectionWithStyles>
)

export const SectionWithStyles = styled(FlexContainer)({
  height: '300px',
  width: '100%',
  backgroundColor: '',
  fontSize: '4rem',
  borderBottom: `1px solid ${colors.border}`,
})