import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image"


export const IluminationPageTemplate = ({data}) => (
    <>
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
        
        <div className="categories-menu mt-5 mb-5">
            {
                data.categoryByIluminationType.edges.map(({ node }) => (
                    <div key={node.frontmatter.title} className="category-menu-button">
                        {console.log(node)}
                        <Link
                            className="category-link"
                            to="/iluminacion-led-solar/#indoor"
                        >
                            <div 
                                className="category-wrapper"
                                style={{
                                    backgroundImage: `url(${
                                        !!node.frontmatter.image.childImageSharp ? node.frontmatter.image.childImageSharp.fluid.src : node.frontmatter
                                    })`,
                                }}
                            >
                                <div className="category-selector">
                                    <p>
                                        {node.frontmatter.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
)

const IluminationPage = ({data}) => {
    console.log(data)
    return (
        <Layout>
            <div className="container">
                <IluminationPageTemplate data={data} />
            </div>
        </Layout>
    )
}

IluminationPage.propTypes = {
    data: PropTypes.shape({
        categoryByIluminationType: PropTypes.shape({
            edges: PropTypes.array,
        }),
        products: PropTypes.shape({
            edges: PropTypes.array,
        })
    }),
}

export default IluminationPage

export const IluminationPageQuery = graphql`
    query{
        categoryByIluminationType: allMarkdownRemark(filter: {frontmatter: {type: {eq: "category"} iluminationType: {eq: "Iluminación Led"}}}, sort: {order: ASC, fields: frontmatter___title}){
            edges {
                node {
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                fluid(quality: 75, maxWidth: 500){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
`