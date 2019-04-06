import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from './NavLink'
import { SECTIONS } from './constants'
import { colors } from './colors'

export const SideBar = () => (
  <SideBarWithStyles>
    {SECTIONS.map((section) => <NavLink key={section.route} {...section} /> )}
  </SideBarWithStyles>
)

const SideBarWithStyles = styled.div({
  width: '8rem',
  height: '100%',
  backgroundColor: colors.background,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
})