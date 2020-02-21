import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Searcher from '../components/searcher'
import CategoriesMenu from '../components/categoriesMenu'
import products from '../../public/products.json'

export class IluminationPageTemplate extends React.Component {

    state = {
        onSearch: false,
        activeCategory: '',
    }

    render() {

        const data = this.props.data
        const path = this.props.path

        return (
            <>
                <Searcher />
                <CategoriesMenu data={data} path={path} />
            </>
        )
    }
}

const IluminationPage = ({data, location}) => {
    return (
        <Layout>
            <div className="container">
                <IluminationPageTemplate data={data} path={location.pathname} />
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
    query IluminationPage($iluminationType: String!){
        categoryByIluminationType: allMarkdownRemark(filter: {frontmatter: {type: {eq: "category"} iluminationType: {eq: $iluminationType }}}, sort: {order: ASC, fields: frontmatter___title}){
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
                        type
                    }
                }
            }
        }
        
    }
`