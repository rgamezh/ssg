import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

export default class LamparasDecorativasPage extends React.Component {

    state = {
        titleMarginTop: Number
    }

    componentDidMount() {
        const marginTop = document.getElementsByTagName('h1')[0].clientHeight / 2
        console.log(marginTop)
        this.setState({titleMarginTop: marginTop})
    }

    render() {

        const data = this.props.data
        console.log(this.props.data)
        return (
            <Layout>
                <Img style={{height: '400px'}} fluid={data.portada.childImageSharp.fluid}/>
                <div className="container">
                    <h1 className="page-titles text-center mb-5" style={{marginTop: `-${this.state.titleMarginTop} !important`}}>Lámparas Decorativas</h1>

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
        h101: file(relativePath: {eq: "energias-renovables.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        h102: file(relativePath: { eq: "instalacion.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h103: file(relativePath: { eq: "instalacion.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h104: file(relativePath: { eq: "instalacion.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h105: file(relativePath: { eq: "instalacion.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        h106: file(relativePath: { eq: "instalacion.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
    }
`