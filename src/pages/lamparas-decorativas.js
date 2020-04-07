import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

export default class LamparasDecorativasPage extends React.Component {

    render() {

        const data = this.props.data
        
        return (
            <Layout>
                <Img style={{ height: '400px' }} fluid={data.portada.childImageSharp.fluid} />
                <div className="container">

                    <h1 className="page-titles text-center mt-3 mb-3 mt-lg-5 mb-lg-5">Lámparas Decorativas</h1>

                    <div className="project-card mb-5">
                        <div className="cover">
                            <Img className="cover-image shadow-sm" fluid={data.h107.childImageSharp.fluid} />
                            <h2 className="text-center purple-text shadow">Hotel H10</h2>
                        </div>
                        <div id="indexCarouser" className="carousel slide p-2 rounded shadow-sm" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#indexCarouser" data-slide-to="0" className="active"></li>
                                <li data-target="#indexCarouser" data-slide-to="1"></li>
                                <li data-target="#indexCarouser" data-slide-to="2"></li>
                                <li data-target="#indexCarouser" data-slide-to="3"></li>
                                <li data-target="#indexCarouser" data-slide-to="4"></li>
                                <li data-target="#indexCarouser" data-slide-to="5"></li>
                                <li data-target="#indexCarouser" data-slide-to="6"></li>
                                <li data-target="#indexCarouser" data-slide-to="7"></li>
                                <li data-target="#indexCarouser" data-slide-to="8"></li>
                                <li data-target="#indexCarouser" data-slide-to="9"></li>
                                <li data-target="#indexCarouser" data-slide-to="10"></li>
                                <li data-target="#indexCarouser" data-slide-to="11"></li>
                                <li data-target="#indexCarouser" data-slide-to="12"></li>
                                <li data-target="#indexCarouser" data-slide-to="13"></li>
                                <li data-target="#indexCarouser" data-slide-to="14"></li>
                                <li data-target="#indexCarouser" data-slide-to="15"></li>
                                <li data-target="#indexCarouser" data-slide-to="16"></li>
                                <li data-target="#indexCarouser" data-slide-to="17"></li>
                                <li data-target="#indexCarouser" data-slide-to="18"></li>
                                <li data-target="#indexCarouser" data-slide-to="19"></li>
                                <li data-target="#indexCarouser" data-slide-to="20"></li>
                                <li data-target="#indexCarouser" data-slide-to="21"></li>
                                <li data-target="#indexCarouser" data-slide-to="22"></li>
                            </ol>
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h101.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h102.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h103.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h104.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h105.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h106.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h107.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h108.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h109.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h110.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h111.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h112.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h113.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h114.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h115.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h116.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h117.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h118.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h119.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h120.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h121.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h122.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item" style={{ height: '300px' }}>
                                    <Img style={{ height: '300px' }} fluid={data.h123.childImageSharp.fluid} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#indexCarouser" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#indexCarouser" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>

                </div>
            </Layout>
        )
    }
}

export const PageQuery = graphql`
    query {
        portada: file(relativePath: { eq: "portada-decorativas.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 2000){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h101: file(relativePath: {eq: "IMG_0143.JPG"}) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        h102: file(relativePath: { eq: "IMG_0514.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h103: file(relativePath: { eq: "IMG_0813.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h104: file(relativePath: { eq: "IMG_1020.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h105: file(relativePath: { eq: "IMG_1295.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h106: file(relativePath: { eq: "IMG_2238.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h107: file(relativePath: { eq: "IMG_2740-h10.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h108: file(relativePath: { eq: "IMG_2864.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h109: file(relativePath: { eq: "IMG_4678.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h110: file(relativePath: { eq: "IMG_4880.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h111: file(relativePath: { eq: "IMG_5234.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h112: file(relativePath: { eq: "IMG_5873.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h113: file(relativePath: { eq: "IMG_6463.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h114: file(relativePath: { eq: "IMG_6836.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h115: file(relativePath: { eq: "IMG_6899.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h116: file(relativePath: { eq: "IMG_7914.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h117: file(relativePath: { eq: "IMG_8104.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h118: file(relativePath: { eq: "IMG_8251.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h119: file(relativePath: { eq: "IMG_8511.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h120: file(relativePath: { eq: "IMG_8869.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h121: file(relativePath: { eq: "IMG_8890.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h122: file(relativePath: { eq: "IMG_9234.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h123: file(relativePath: { eq: "IMG_9459.JPG" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
    }
`