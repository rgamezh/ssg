import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

export const IluminationPageTemplate = ({data}) => (
    <Layout>
        <div className="container">
            <div className="row justify-content-center">
                <form style={{marginTop: '1.45rem'}} className="col-10" role="search" method="GET">
                    <input
                        type="search"
                        className="full-width"
                        name="products"
                        style={{
                            backgroundColor: `#30ce65`,
                            color: `#fff`,
                            borderRadius: `41px`,
                            border: `none`,
                            padding: `20px`
                        }}
                        placeholder="Buscar"
                    />
                </form>
            </div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-3 rounded">
                        <BackgroundImage style={{height: `400px`}} fluid={data.indoor.childImageSharp.fluid}>
                            <p className="category-selector">Indoor</p>
                        </BackgroundImage>
                    </div>
                    <div className="col-md-3">
                        <BackgroundImage style={{height: `400px`}} fluid={data.indoor.childImageSharp.fluid}>
                            <p className="category-selector">Outdoor</p>
                        </BackgroundImage>
                    </div>
                    <div className="col-md-3">
                        <BackgroundImage style={{height: `400px`}} fluid={data.indoor.childImageSharp.fluid} >
                            <p className="category-selector">Industrial</p>
                        </BackgroundImage>
                    </div>
                    <div className="col-md-3">
                        <BackgroundImage style={{height: `400px`}} fluid={data.indoor.childImageSharp.fluid} >
                            <p className="category-selector">Tiras de Led</p>
                        </BackgroundImage>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IluminationPageTemplate

export const IluminationPageQuery = graphql`
    query{
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "product-page"}}}){
            edges{
                node{
                    id
                    frontmatter{
                        title
                    }
                }
            }
        }
        indoor: file(relativePath: {eq: "decorativas.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1920, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        outdoor: file(relativePath: {eq: "outdoor.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1920, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        led: file(relativePath: {eq: "FB-72282.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1920, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`