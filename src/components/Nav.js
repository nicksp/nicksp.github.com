import React from 'react'
import Scrollspy from 'react-scrollspy'

import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={['intro', 'first', 'second', 'cta']} currentClassName="is-active" offset={-300}>
      <li>
        <Scroll type="id" element="about">
          <a href="#">About</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="services">
          <a href="#">Services</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="projects">
          <a href="#">Our work</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">Contact</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
