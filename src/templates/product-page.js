import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

export class ProductPageTemplate extends React.Component {

  state = {
    pictureToShow: 0
  }

  render() {
    
    const title = this.props.frontmatter.title
    const category = this.props.frontmatter.category
    const subcategory = this.props.frontmatter.subcategory
    const serie = this.props.frontmatter.serie
    const description = this.props.frontmatter.description
    const material = this.props.frontmatter.material
    const consumption = this.props.frontmatter.consumption
    const voltage = this.props.frontmatter.voltage
    const equipment = this.props.frontmatter.equipment
    const colorTemperature = this.props.frontmatter.colorTemperature
    const cri = this.props.frontmatter.cri
    const beamAngle = this.props.frontmatter.beamAngle
    const ip = this.props.frontmatter.ip
    const dataSheet = this.props.frontmatter.dataSheet
    const images = this.props.frontmatter.images
  
    return(
      <>
        <div className="product-container rounded-lg m-3 m-lg-5 p-lg-5">
          <div className="row">
            <div className="col-sm-6 product-images">
              <div className="shadow active-image p-3 rounded-lg product-image-outstand">
                <Img className="product-image rounded-lg" fluid={images[this.state.pictureToShow].image.childImageSharp.fluid} alt={images[this.state.pictureToShow].alt} />  
                <div className="container mt-2">
                  <div className="row">
                    <div className="col-3">
                      {
                        images.map((image, index) => (
                          <Img key={index} style={{borderBottom: `${this.state.pictureToShow === index? '2px solid #33326e': ''}`}} fluid={image.image.childImageSharp.fluid} alt={image.alt} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 product-info p-5 p-lg-0">
              <h1>{title}</h1>
              <p>categoría: <span>{category}</span></p>
              {
                subcategory != null ? <p>subcategoría: <span>{subcategory}</span></p> : ''
              }
              {
                serie != null ? <p>serie: <span>{serie}</span></p> : ''
              }
              {
                description != null ? <p>descripción: {description}</p> : ''
              }
              {
                material != null ? <p>material: {material}</p> : ''
              }
              {
                consumption != null ? <p>consumo: {consumption}</p> : ''
              }
              {
                voltage != null ? <p>voltaje: {voltage}</p> : ''
              }
              {
                equipment != null ? <p>equipo incluido:{equipment}</p> : ''
              }
              {
                colorTemperature != null ? <p>temperatura de color: {colorTemperature}</p> : ''
              }
              {
                cri != null ? <p>cri: {cri}</p> : ''
              }
              {
                beamAngle != null ? <p>grados de apertura: {beamAngle}</p> : ''
              }
              {
                ip != null ? <p>ip: {ip}</p> : ''
              }
              {
                dataSheet != null ? <a href={dataSheet.publicURL} target="_blank" rel="noopener noreferrer">ver ficha tecnica</a> : ''
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

/*ProductPageTemplate.propTypes = {
  title: PropTypes.string,
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
}*/

const ProductPage = ({data}) => {
  return (
    <Layout>
      <div className="container">
        <ProductPageTemplate
          frontmatter={data.markdownRemark.frontmatter}
        />
      </div>
    </Layout>
  )
}

/*ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}*/

export default ProductPage

export const PageQuery = graphql`
  query ProductQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        category
        subcategory
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
        dataSheet {
          publicURL
        }
        images {
          alt
          image {
            childImageSharp {
              fluid (maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`


