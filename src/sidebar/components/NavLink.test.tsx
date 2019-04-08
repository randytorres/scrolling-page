import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { SECTIONS } from '../../global'
import { NavLink, Link } from './NavLink'

describe('NavLink', () => {
  let app: ShallowWrapper
  let props = SECTIONS[0]
  beforeEach(() => {
    app = shallow(<NavLink {...props} />)
  })

  it('Renders `Link` with an `href`', () => {
    const link = app.find(Link)
    expect(link).toHaveLength(1)
    expect(link.prop('href')).toEqual(`#${props.route}`)
  })

  it('Renders the label', () => {
    expect(app.find(Link).text()).toEqual(props.label)
  })
})
