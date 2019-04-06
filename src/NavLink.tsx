import React from 'react'
import styled from '@emotion/styled'

interface Props {
  label: string
  route: string
}

export const NavLink: React.FC<Props> = ({ label, route }) => (
  <Link href={`#${route}`}>
    {label}
  </Link>
)

const Link = styled.a({
  height: '4rem',
  borderBottom: '1px solid #FFF',
  textDecoration: 'none',
  color: '#FFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})