import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

const IndexPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image.childImageSharp.fluid} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '30px', bottom: '60px'}}>
              <h5>First slide label</h5>
              <p style={{marginBottom: '1rem'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link
                    className="btn btn-primary"
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
              >
                Ir al producto
              </Link>
            </div>
          </div>
          <div className="carousel-item" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image2.childImageSharp.fluid} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '30px', bottom: '60px'}}>
              <h5>Second slide label</h5>
              <p style={{marginBottom: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                    className="btn btn-primary"
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
              >
                Ir al producto
              </Link>
            </div>
          </div>
          <div className="carousel-item" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image3.childImageSharp.fluid} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '30px', bottom: '60px'}}>
              <h5>Third slide label</h5>
              <p style={{marginBottom: '1rem'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Link
                    className="btn btn-primary"
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
              >
                Ir al producto
              </Link>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container-fluid">
				<div className="row">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-sm-6">
                <Link 
                  to="/"
                  className="btn btn-outline-success"
                  style={{
                    width: '100%',
                    height: '100%',
                    margin: '30px 0',
                  }}
                >
                  Certificación NOM
                </Link>
              </div>
              <div className="col-12 col-sm-6">
                <Link 
                  to="/"
                  className="btn btn-outline-success"
                  style={{
                    width: '100%',
                    height: '100%',
                    margin: '30px 0',
                  }}
                >
                  Certificate of Compliance
                </Link>
              </div>
            </div>
					</div>
					<div style={{backgroundColor: `#549455`}} className="col-12 col-md-4 yellow-text d-flex flex-column justify-content-center align-items-center">
						<p className="mb-0">OFIC:</p>
						<a className="yellow-text d-flex mb-2" href="tel:+52 9988 84 85 99">
							+52 9988 84 85 99
						</a>
						<p className="mb-0">CEL:</p>
						<a className="yellow-text d-flex mb-2" href="tel:+52 9981 08 28 56">
							+52 9981 08 28 56
						</a>
						<p className="mb-0">CORREO:</p>
						<a className="yellow-text d-flex mb-2" href="mailto:info@synergysolar.com.mx">
							info@synergysolar.com.mx
						</a>
					</div>
				</div>
			</div>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query {
    image: file(relativePath: {eq: "clients.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: {eq: "alumbrado-publico.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: {eq: "decorativas.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
`