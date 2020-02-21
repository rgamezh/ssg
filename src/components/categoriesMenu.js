import React from 'react'
import { Link } from 'gatsby'

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
        const itemsToRender = []
        const seriesToRender = []
        if( type === 'category' ){
            if(Object.keys(this.state.subcategoriesObject).length === 0){
                this.subcategories = await import('../../public/subcategories.json')
            }
            this.subcategories.default.forEach(subcategory => {
                if(subcategory.frontmatter.category === category) {
                    itemsToRender.push(subcategory)
                }
            })
            this.setState({
                subcategoriesObject: this.subcategories,
                subcategories: itemsToRender,
                series: [],
            })
        } else if( type === 'subcategory' ) {
            if(Object.keys(this.state.productsObject).length === 0) {
                this.products = await import('../../public/products.json')
            }
            this.products.default.forEach(product => {
                if(product.frontmatter.subcategory === category){
                    itemsToRender.push(product)
                    seriesToRender.push(product.frontmatter.serie)
                }
            })
            
            this.setState({
                productsObject: this.products,
                products: itemsToRender,
                series: Array.from(new Set(seriesToRender))
            })
            console.log(this.state.series)
        }
    }

    render() {

        const data = this.props.data,
              path = this.props.path,
              subcategories = this.state.subcategories,
              series = this.state.series 

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
                    <div className="series-menu row">
                        {
                            series.map(serie => (
                                <Link
                                    key={serie}
                                    to="/"
                                    onClick={ (e) => { e.preventDefault(); this.onCategoryClick( serie, 'serie' ) } }
                                    role="button"
                                    className=" btn m-3 col-lg-2 serie-link"
                                >
                                    {serie}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}