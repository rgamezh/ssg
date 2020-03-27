import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import PaginatedProducts from './PaginatedProducts'

export default class Searcher extends React.Component {

    constructor(props) {
        super(props)
        this.search = this.search.bind(this)
    }

    queryResult = []

    state = {
        query: '',
        products: [],
    }

    componentDidMount() {
        this.queryResult = []
    }

    componentWillUnmount() {
        this.queryResult = []
    }

    search(event) {
        const eventValue = event.target.value.toLowerCase()
        if(eventValue === '') {
            this.queryResult = []
        } else {
            this.props.getProducts().then(() => {
                this.queryResult = this.props.products.filter( product => {
                    console.log(product)
                    return Object.values( product.frontmatter ).some(res => String(res).toLowerCase().includes(eventValue) )
                })
            })
        }
        this.setState({
            query: eventValue,
            products: this.queryResult,
        })
    }

    render() {
        
        const products = this.state.products
        if(!this.props.willRender){
            return null
        }
        
        return (
            <>
                <div className="row justify-content-center mt-5">
                    <form style={{ marginTop: '1.45rem' }} className="col-10" role="search" method="GET">
                        <input
                            type="search"
                            className="full-width searcher"
                            name="products"
                            style={{
                                backgroundColor: `#30ce65`,
                                color: `#fff`,
                                borderRadius: `41px`,
                                padding: `20px`
                            }}
                            value={this.state.query}
                            onChange={this.search}
                            placeholder="Buscar"
                        />
                    </form>
                </div>
                <div className="row">
                    <div>
                        {this.state.query?
                            <p>
                                Resultados para la busqueda de: <span>{this.state.query}</span>
                            </p>
                            : ''
                        }
                    </div>
                    {
                        products.length == 0 && this.state.query? <p className="text-center w-100 title">No se encontraron productos</p> : <PaginatedProducts products={products} />
                    }
                    
                </div>
            </>
        )
    }
}

