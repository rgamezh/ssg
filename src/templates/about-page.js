import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      
    </section>
  )
}

const AboutPage = () => {

  return (
    <Layout>
      <AboutPageTemplate
        
      />
    </Layout>
  )
}

export default AboutPage


