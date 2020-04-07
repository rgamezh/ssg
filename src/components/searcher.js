import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import lupa from '../../static/img/lupa-blanca.png'

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
                <div className="container-fluid">
                    <div 
                        className="row justify-content-center searcher-container"
                    >
                        <form style={{ marginTop: '1.45rem' }} className="col-6" role="search" method="GET">
                            <div style={{height: '50px'}} className='input-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' style={{backgroundColor: '#33326e'}}>
                                        <img style={{width: '30px', height: '30px', marginBottom: '0'}} src={lupa} />
                                    </span>
                                </div>
                                <input
                                    type="search"
                                    className="full-width searcher form-control"
                                    name="products"
                                    value={this.state.query}
                                    onChange={this.search}
                                    placeholder="Buscar"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
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
                            products.length === 0 && this.state.query? <p className="text-center w-100 title">No se encontraron productos</p> : <PaginatedProducts products={products} />
                        }
                        
                    </div>
                </div>    
            </>
        )
    }
}

