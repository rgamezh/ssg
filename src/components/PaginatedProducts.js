import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from "gatsby-image"

export default class PaginatedProducts extends React.Component {

    state = {
        currentPage: 1
    }

    productsPerPage = 10

    componentDidMount() {
        this.numberOfPages = Math.ceil( this.props.products / this.productsPerPage )
    }

    next() {
        let currentPage = this.state.currentPage + 1
        this.setState({
            currentPage: currentPage
        })
    }

    prev() {
        let currentPage = this.state.currentPage - 1
        this.setState({
            currentPage: currentPage
        })
    }

    render() {

        if ( this.props.products.length === 0 ) {
            return null
        }

        const products = this.props.products
        let begin = ( (this.state.currentPage - 1) * this.productsPerPage )
        let end = begin + this.productsPerPage
        return(
            <>
                
                {
                    products.slice(begin, end).map(product => (
                        <div
                            key={product.id}
                            className="col-lg-12 col-12 product-card-wrapper"
                        >
                            <div className="product-card row p-4">
                                <div className="col-12 col-lg-7 order-12">
                                    <h2>{product.frontmatter.title}</h2>
                                    <p>{product.frontmatter.description}</p>
                                    <span style={{backgroundColor: '#000'}} className="category-indicator mr-2">{product.frontmatter.category}</span>
                                    <span style={{backgroundColor: '#30ce65'}} className="category-indicator mr-2">{product.frontmatter.subcategory}</span>
                                    <span style={{backgroundColor: '#cccc34'}} className="category-indicator">{product.frontmatter.serie}</span>
                                    <Link
                                        to={product.fields.slug}
                                        style={{display: 'flex', marginTop: '2em'}}
                                    >
                                        Ver más
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-5 order-1">
                                    <Img className="product-image-wrapper" style={{maxHeight: '200px', minHeight: '200px'}} fluid={product.frontmatter.images[0].image.childImageSharp.fluid} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

PaginatedProducts.propTypes = {
    products: PropTypes.array
}