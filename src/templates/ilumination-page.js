import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { navigate } from '@reach/router';
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
                    <div className="col-md-3">
                        <Link
                            className="category-link"
                            to="/iluminacion-led-solar/#indoor"
                        >
                            <div 
                                className="category-wrapper"
                                style={{
                                    backgroundImage: `url(${
                                        !!data.indoor.childImageSharp ? data.indoor.childImageSharp.fluid.src : data.indoor
                                    })`,
                                }}
                            >
                                <div className="category-selector">
                                    <p>
                                        Indoor
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3"> 
                        <Link
                            className="category-link"
                            to="/iluminacion-led-solar/#Outdoor"
                        >
                            <div
                                className="category-wrapper"
                                style={{
                                    backgroundImage: `url(${
                                        !!data.outdoor.childImageSharp ? data.outdoor.childImageSharp.fluid.src : data.outdoor
                                    })`,
                                }}
                            >
                                <div className="category-selector">
                                    <p>Outdoor</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link
                            className="category-link"
                            to="/iluminacion-led-solar/#Outdoor"
                        >
                            <div
                                className="category-wrapper"
                                style={{
                                    backgroundImage: `url(${
                                        !!data.industrial.childImageSharp ? data.industrial.childImageSharp.fluid.src : data.industrial
                                    })`,
                                }}
                            >
                                <div className="category-selector">
                                    <p>Industrial</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <div
                            className="category-wrapper"
                            style={{
                                backgroundImage: `url(${
                                    !!data.led.childImageSharp ? data.led.childImageSharp.fluid.src : data.led
                                })`,
                            }}
                        >
                            <p className="category-selector">Tiras de Led</p>
                        </div>
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
        industrial: file(relativePath: {eq: "20-9080-60.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1920, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`