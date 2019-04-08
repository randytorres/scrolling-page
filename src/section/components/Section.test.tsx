import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { SECTIONS } from '../../global'
import { Section, SectionWithStyles } from './Section'

describe('Section', () => {
  let app: ShallowWrapper
  let props = SECTIONS[0]
  beforeEach(() => {
    app = shallow(<Section {...props} />)
  })

  it('Renders `SectionWithStyles` with an `id`', () => {
    const section = app.find(SectionWithStyles)
    expect(section).toHaveLength(1)
    expect(section.prop('id')).toEqual(props.route)
  })
})