import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { SECTIONS } from '../../global'
import { SideBar } from './SideBar'
import { NavLink } from './NavLink'

describe('SideBar', () => {
  let app: ShallowWrapper
  beforeEach(() => {
    app = shallow(<SideBar />)
  })

  it('Renders `NavLink`s', () => {
    expect(app.find(NavLink)).toHaveLength(SECTIONS.length)
  })
})
