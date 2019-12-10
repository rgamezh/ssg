import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProductPageTemplate = ({
  name,
  subcategory,
  image,
  serie,
  description,
  material,
  consumption,
  voltage,
  equipment,
  colorTemperature,
  cri,
  beamAngle,
  ip,
}) => (

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

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        name={frontmatter.name}
        subcategory={frontmatter.subcategory}
        image={frontmatter.image}
        serie={frontmatter.serie}
        description={frontmatter.description}
        material={frontmatter.material}
        consumption={frontmatter.consumption}
        voltage={frontmatter.voltage}
        equipment={frontmatter.equipment}
        colorTemperature={frontmatter.colorTemperature}
        cri={frontmatter.cri}
        beamAngle={frontmatter.beamAngle}
        ip={frontmatter.ip}
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

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        subcategory
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        serie
        description
        material
        consumption
        voltage
        equipment
        colorTemperature
        cri
        beamAngle
        ip
      }
    }
  }
`
