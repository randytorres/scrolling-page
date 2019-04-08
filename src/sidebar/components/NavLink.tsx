import React from 'react'
import styled from '@emotion/styled'
import { colors, FlexContainer as _FlexContainer, SectionProps } from '../../global'

export const NavLink: React.FC<SectionProps> = ({ label, route }) => (
  <FlexContainer>
    <Link href={`#${route}`}>
      {label}
    </Link>
  </FlexContainer>
)

const FlexContainer = styled(_FlexContainer)({
  height: '4rem',
  borderBottom: `1px solid ${colors.navLink}`,
})

export const Link = styled.a({
  textDecoration: 'none',
  color: colors.navLink,
})