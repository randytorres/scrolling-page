import React from 'react'
import styled from '@emotion/styled'
import { colors, Column, SECTIONS } from '../../global'
import { NavLink } from './NavLink'

export const SideBar: React.FC<{}> = () => (
  <SideBarWithStyles>
    {SECTIONS.map((section) => <NavLink key={section.route} {...section} /> )}
  </SideBarWithStyles>
)

const SideBarWithStyles = styled(Column)({
  width: '8rem',
  height: '100%',
  backgroundColor: colors.background,
  position: 'fixed',
})