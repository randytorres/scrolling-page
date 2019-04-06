import React from 'react'
import styled from '@emotion/styled'

export const Section = ({ label, route }) => {
  return  (
    <SectionWithStyles id={route}>
      {label}
    </SectionWithStyles>
  )
}

const SectionWithStyles = styled.div({
  height: '300px',
  width: '100%',
  backgroundColor: '',
  fontSize: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid #000',
})