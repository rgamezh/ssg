import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default class CategoriesMenu extends React.Component {

    state = {
        subcategories: [],
        products: [],
        series: [],
        showSubcategories: false,
        showSeries: false
    }

    productRenderer (category, type) {
        console.log(this.props)
        const subcategoriesToRender = [],
              seriesToRender = [],
              productsToRender = []
        let hasSubcategories = false,
            hasSeries = false

        if( type === 'category' ) {

            this.props.products.forEach( product => {
                if( product.frontmatter.category != null ) {
                    if( product.frontmatter.category.toLowerCase() === category.toLowerCase() ) {
                        productsToRender.push(product)
                    }
                }
            })
            
            this.props.subcategories.forEach( subcategory => {
                if( subcategory.frontmatter.category.toLowerCase() === category.toLowerCase() ) {
                    subcategoriesToRender.push(subcategory)
                }
            })

            if(!(Object.keys(subcategoriesToRender).length === 0)) {
                hasSubcategories = true
            }

            this.setState({
                products: productsToRender,
                subcategories: subcategoriesToRender,
                series: [],
                showSubcategories: hasSubcategories,
                showSeries: false,
            })

        } else if( type === 'subcategory' ) {
            this.props.products.forEach( product => {
                if( product.frontmatter.subcategory != null ) {
                    if( product.frontmatter.subcategory.toLowerCase() === category.toLowerCase() ) {
                        productsToRender.push(product)
                        seriesToRender.push(product.frontmatter.serie)
                    }
                }
            })
            if(!(Object.keys(seriesToRender).length === 0)) {
                hasSeries = true
            }
            this.setState({
                products: productsToRender,
                series: Array.from(new Set(seriesToRender)),
                showSeries: hasSeries
            })
        } else if( type === 'serie' ) {
            this.props.products.forEach( product => {
                if( product.frontmatter.serie != null ) {
                    if( product.frontmatter.serie.toLowerCase() === category.toLowerCase() ) {
                        productsToRender.push(product)
                    }
                }
            })
            this.setState({
                products: productsToRender,
            })
        }
        
    }

    onCategoryClick (category, type) {
        
        this.props.getProducts().then(() => {
            this.productRenderer(category, type)
        }).catch((e) => {
            console.log("ha ocurrido un error: " + e)
        })

    }

    render() {
        const data = this.props.data,
              path = this.props.path,
              subcategories = this.state.subcategories,
              series = this.state.series,
              products = this.state.products
            
        if(!this.props.willRender){
            return null
        }

        return (
            <>
                <div className="categories-menu-container">
                    <div className="categories-menu">
                        <div className="categories-menu-outer pt-5 pb-5">
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
                                                    <span className="triangle"></span>
                                                    <p className="mb-0">
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
                {
                    this.state.showSubcategories?
                        <div className="subcategories-menu mb-5 row">
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
                    : ''
                }
                
                <div className="series-menu">
                    <div className="row">
                        {
                            this.state.showSeries?
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
                            : ''
                        }
                        <div className={ this.state.showSeries === false ? 'col-lg-12 pl-5 pr-5' : 'col-lg-9 pl-5 pr-5'  }>
                            <div className="row">
                                {
                                    products.map(product => (
                                        <div
                                            key={product.id}
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