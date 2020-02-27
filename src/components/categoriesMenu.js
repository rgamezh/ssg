import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default class CategoriesMenu extends React.Component {

    state = {
        subcategories: [],
        products: [],
        subcategoriesObject: {},
        productsObject: {},
        series: []
    }

    subcategories = {}

    products = {}

    onCategoryClick = async (category, type) => {
        const itemsToRender = [],
              seriesToRender = [],
              productsToRender = []
        if( type === 'category' ){
            if(Object.keys(this.state.subcategoriesObject).length === 0){
                this.subcategories = await import('../../public/subcategories.json')
            }
            if( Object.keys(this.state.productsObject).length === 0 ){
                this.products = await import('../../public/products.json')
            }
            this.subcategories.default.forEach(subcategory => {
                if(subcategory.frontmatter.category.toLowerCase()  === category.toLowerCase() ) {
                    itemsToRender.push(subcategory)
                }
            })
            this.products.default.forEach(product => {
                if(product.frontmatter.category != null){
                    if(product.frontmatter.category.toLowerCase() === category.toLowerCase()){
                        productsToRender.push(product)
                    }
                }
            })
            this.setState({
                products: productsToRender,
                subcategoriesObject: this.subcategories,
                subcategories: itemsToRender,
                series: [],
            })
        } else if( type === 'subcategory' ) {
            
            if(Object.keys(this.state.productsObject).length === 0) {
                this.products = await import('../../public/products.json')
            }
            this.products.default.forEach(product => {
                if(product.frontmatter.subcategory != null){
                    if(product.frontmatter.subcategory.toLowerCase() === category.toLowerCase()){
                        itemsToRender.push(product)
                        seriesToRender.push(product.frontmatter.serie)
                    }
                }
            })
            
            this.setState({
                productsObject: this.products,
                products: itemsToRender,
                series: Array.from(new Set(seriesToRender))
            })
        }
    }

    render() {

        const data = this.props.data,
              path = this.props.path,
              subcategories = this.state.subcategories,
              series = this.state.series,
              products = this.state.products

        return (
            <>
                <div className="categories-menu-container">
                    <div className="categories-menu">
                        <div className="categories-menu-outer">
                            {
                                data.categoryByIluminationType.edges.map(({ node }) => (
                                    <div key={node.frontmatter.title} className="category-menu-button">
                                        <Link
                                            onClick={ (e) => {e.preventDefault(); this.onCategoryClick(node.frontmatter.title, node.frontmatter.type)} }
                                            className="category-link"
                                            to={ path + '#' + node.frontmatter.title }
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
                    </div>
                </div>
                <div className="categories-menu-container mt-5 mb-5 p-2">
                    <div className="subcategories-menu row">
                        {
                            subcategories.map(sub => (
                                <Link 
                                    key={sub.id}
                                    to="#e"
                                    onClick={ (e) => {e.preventDefault(); this.onCategoryClick(sub.frontmatter.title, sub.frontmatter.type)}}
                                    role="button"
                                    className="btn m-3 col-lg-2 subcategory-link"
                                >
                                    {sub.frontmatter.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="series-menu">
                    <div className="row">
                        <div className="categories-menu-container p-3 col-lg-3 align-self-start">
                            {
                                series.map(serie => (
                                    <a
                                        key={serie}
                                        onClick={ (e) => { e.preventDefault(); this.onCategoryClick( serie, 'serie' ) } }
                                        role="button"
                                        className=" btn w-100 mt-2 mb-2 serie-link"
                                    >
                                        {serie}
                                    </a>
                                ))
                            }
                        </div>
                        <div className="col-lg-9 pl-5 pr-5">
                            <div className="row">
                                {
                                    products.map(product => (
                                        <div
                                            className="col-lg-12 col-12 product-card-wrapper"
                                        >
                                            <div className="product-card row p-4">
                                                <div className="col-12 col-lg-7">
                                                    <h2>{product.frontmatter.title}</h2>
                                                    <p>{product.frontmatter.description}</p>
                                                    <span style={{backgroundColor: '#000'}} className="category-indicator mr-2">{product.frontmatter.category}</span>
                                                    <span style={{backgroundColor: '#30ce65'}} className="category-indicator mr-2">{product.frontmatter.subcategory}</span>
                                                    <span style={{backgroundColor: '#cccc34'}} className="category-indicator">{product.frontmatter.serie}</span>
                                                    <Link
                                                        key={product.id}
                                                        to={product.fields.slug}
                                                        style={{display: 'flex', marginTop: '2em'}}
                                                    >
                                                        Ver más
                                                    </Link>
                                                </div>
                                                <div className="col-12 col-lg-5">
                                                    <Img className="product-image-wrapper" style={{maxHeight: '200px', minHeight: '200px'}} fluid={product.frontmatter.images[0].image.childImageSharp.fluid} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    
                    </div>
                </div>
            </>
        )
    }
}