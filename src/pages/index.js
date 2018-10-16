import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Free Simple Apps</h1>
    <p>We make your dreams come true</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
