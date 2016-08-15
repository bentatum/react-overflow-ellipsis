import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as OverflowEllipsis } from '../src'

const renderer = TestUtils.createRenderer()

describe('OverflowEllipsis', () => {
  let tree

  beforeEach(() => {
    renderer.render(<OverflowEllipsis><p>Lots of text</p></OverflowEllipsis>)
    tree = renderer.getRenderOutput()
  })

  it('renders with necessary styles', () => {
    expect(tree.type).toEqual('div')
    expect(tree.props.style).toInclude({ overflow: 'hidden' })
    expect(tree.props.style).toInclude({ textOverflow: 'ellipsis' })
    expect(tree.props.style).toInclude({ whiteSpace: 'nowrap' })
  })
})
