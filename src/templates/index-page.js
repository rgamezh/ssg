import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
    </Layout>
  )
}

export default IndexPage
