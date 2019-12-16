import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProductPageTemplate = () => (

  <p>Works!</p>

)

ProductPageTemplate.propTypes = {
  name: PropTypes.string,
  subcategory: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  serie: PropTypes.string,
  description: PropTypes.string,
  material: PropTypes.string,
  consumption: PropTypes.string,
  voltage: PropTypes.string,
  equipment: PropTypes.string,
  colorTemperature: PropTypes.string,
  cri: PropTypes.string,
  beamAngle: PropTypes.string,
  ip: PropTypes.string,
}

const ProductPage = () => {


  return (
    <Layout>
      <ProductPageTemplate
        
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

