import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

const IndexPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <div id="indexCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#indexCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#indexCarousel" data-slide-to="1"></li>
          <li data-target="#indexCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image.childImageSharp.fluid} />
            <div className="lamps-carousel-caption carousel-caption d-md-block" style={{borderRadius: '30px', bottom: '60px'}}>
              <Img className="slider-logo mb-3" fluid={props.data.et2.childImageSharp.fluid} />
              <p className="slider-text" style={{marginBottom: '1rem'}}>Lamparas decorativas de línea ET2</p>
              <a
                    className="btn lamps-slider-link"
                    href="https://www.et2online.com/"
                    target="_Blank"
                    rel="noopener noreferrer"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
              >
                Ir al catalogo
              </a>
            </div>
          </div>
          <div className="carousel-item" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image2.childImageSharp.fluid} />
            <div className="lamps-carousel-caption carousel-caption d-md-block" style={{borderRadius: '30px', bottom: '60px'}}>
              <Img className="slider-logo text-center mb-3" fluid={props.data.maxim.childImageSharp.fluid} />
              <p className="slider-text" style={{marginBottom: '1rem'}}>Lamparas decorativas de línea MAXIM.</p>
              <a
                    className="btn lamps-slider-link"
                    href="https://www.maximlighting.com/"
                    target="_Blank"
                    rel="noopener noreferrer"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
              >
                Ir al catalogo
              </a>
            </div>
          </div>
          <div className="carousel-item" style={{height: '500px'}}>
            <Img style={{height: '500px'}} fluid={props.data.image3.childImageSharp.fluid} />
            <div className="lamps-carousel-caption carousel-caption d-md-block" style={{borderRadius: '30px', bottom: '60px'}}>
              <Img className="slider-logo text-center mb-3" fluid={props.data.quor.childImageSharp.fluid} />
              <p className="slider-text" style={{marginBottom: '1rem'}}>Lamparas decorativas de línea Quor.</p>
              <a
                    className="btn lamps-slider-link"
                    href="http://quorlighting.com/"
                    rel="noopener noreferrer"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                    target="_Blank"
              >
                Ir al catalogo
              </a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#indexCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#indexCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container">
				<div className="row">
          <div className="col-12 certs-container">
            <h3 className="text-center default-titles mb-5">Certificados & NOM</h3>
            <div className="row">
              <div className="col-sm-3 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate.childImageSharp.fluid} />
              </div>
              <div className="col-sm-3 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate2.childImageSharp.fluid} />
              </div>
              <div className="col-sm-3 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate3.childImageSharp.fluid} />
              </div>
              <div className="col-sm-3 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate4.childImageSharp.fluid} />
              </div>
              <div className="col-sm-3 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate5.childImageSharp.fluid} />
              </div>
              <div className="col-sm-6 col-lg-2 mb-3 mb-lg-0 certs">
                <Img fluid={props.data.certificate6.childImageSharp.fluid} />
              </div>
            </div>
					</div>
				</div>
			</div>
      <div style={{backgroundColor: `#aeaeae
      `}} className="container-fluid pt-5 pb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="contact-info-container">
              <span className="mr-3">
                <Img className="contact-info-image" fluid={props.data.tel.childImageSharp.fluid} />
              </span>
              <div>
                <p className="mb-0">OFIC:</p>
                <a className="d-flex mb-2" href="tel:+52 9988 84 85 99">
                  +52 9988 84 85 99
                </a>
              </div>
            </div>
            <div className="contact-info-container">
              <span className="mr-3">
                <Img className="contact-info-image" fluid={props.data.phone.childImageSharp.fluid} />
              </span>
              <div>
                <p className="mb-0">CEL:</p>
                <a className="d-flex mb-2" href="tel:+52 9981 08 28 56">
                  +52 9981 08 28 56
                </a>
              </div>
            </div>
            <div className="contact-info-container">
              <span className="mr-3">
                <Img className="contact-info-image" fluid={props.data.mail.childImageSharp.fluid} />
              </span>
              <div>
                <p className="mb-0">CORREO:</p>
                <a className="d-flex mb-2" href="mailto:info@synergysolar.com.mx">
              info@synergysolar.com.mx
            </a>
              </div>
            </div>
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
    certificate: file(relativePath: {eq: "certificado.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    certificate2: file(relativePath: {eq: "certificado2.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    certificate3: file(relativePath: {eq: "certificado3.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    certificate4: file(relativePath: {eq: "certificado4.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    certificate5: file(relativePath: {eq: "certificado5.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    certificate6: file(relativePath: {eq: "certificado6.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    et2: file(relativePath: {eq: "et2.png"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    maxim: file(relativePath: {eq: "maxim.png"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    quor: file(relativePath: {eq: "quor.png"}) {
      childImageSharp{
        fluid(maxWidth: 200, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    tel: file(relativePath: {eq: "telefono.png"}) {
      childImageSharp{
        fluid(maxWidth: 30, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    phone: file(relativePath: {eq: "telefono-inteligente.png"}) {
      childImageSharp{
        fluid(maxWidth: 30, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    mail: file(relativePath: {eq: "correo.png"}) {
      childImageSharp{
        fluid(maxWidth: 30, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
`