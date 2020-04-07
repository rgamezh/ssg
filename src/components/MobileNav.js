import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const _ = require('lodash')

export default class MobileNav extends React.Component {

    linkClickHandle(e) {
        console.log(e.currentTarget.dataset.index)
        /*this.setState({
            activeLink: index,
        })*/
    }

    render() {
        
        return(
            <StaticQuery query={graphql`
                query {
                    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "ilumination-page"}}}, sort: {order: DESC, fields: frontmatter___title}){
                        edges {
                            node {
                                id
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    icon {
                                        childImageSharp {
                                            fluid(maxWidth: 30, quality: 100){
                                                ...GatsbyImageSharpFluid
                                            }
                                        }  
                                    }
                                }
                            }
                        }
                    }
                    Navbar: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
                        frontmatter {
                            navbar {
                                logo {
                                    childImageSharp {
                                        fluid(maxWidth: 500, quality: 100){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                    secondLogo: file(relativePath: {eq: "logo-frances.png"}) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    secondLogo: file(relativePath: {eq: "logo-frances.png"}) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    postes: file(relativePath: {eq: "postes.png"}) {
                        childImageSharp {
                            fluid(maxWidth: 30, quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    decorativas: file(relativePath: {eq: "decorative-lamps.png"}) {
                        childImageSharp {
                            fluid(maxWidth: 30, quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    nosotros: file(relativePath: {eq: "nosotros.png"}) {
                        childImageSharp {
                            fluid(maxWidth: 30, quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
                render={( data ) => (
                    <>
                        <nav
                            className="navbar"
                        >
                            <div
                            className="container justify-content-center"
                            >
                                <div 
                                    className="row align-items-center pt-2 pb-2"
                                >
                                    <Link
                                    className="col-6"
                                    to="/"
                                    style={{
                                        color: `white`,
                                        textDecoration: `none`,
                                        width: 300
                                    }}
                                    >
                                        <Img fluid={data.Navbar.frontmatter.navbar.logo.childImageSharp.fluid} />
                                    </Link>
                                    <Link
                                    className="col-6"
                                    to="/"
                                    style={{
                                        color: `white`,
                                        textDecoration: `none`,
                                        width: 300
                                    }}
                                    >
                                        <Img fluid={data.secondLogo.childImageSharp.fluid} />
                                    </Link>
                                </div> 
                            </div>
                        </nav>
                        <div className="mobile-menu container-fluid">
                            <div className="row no-gutters">
                                {
                                    data.allMarkdownRemark.edges.map(({ node }) => (
                                        <div key={node.id} className="col" >    
                                            <Link
                                                data-index={node.id}
                                                onClick={this.linkClickHandle}
                                                to={_.deburr(`${node.fields.slug}`)}
                                                className="pt-3 pb-3 mobile-link d-flex align-items-end justify-content-center"
                                            >
                                                <Img className="icon" fluid={node.frontmatter.icon.childImageSharp.fluid} /> 
                                            </Link>
                                        </div>
                                    ))
                                }
                                <div className="col">
                                    
                                    <Link
                                        to='/postes-fibra-de-vidrio'
                                        className="pt-3 pb-3 mobile-link d-flex align-items-end justify-content-center"
                                    >
                                        <Img className="icon" fluid={data.postes.childImageSharp.fluid} />
                                    </Link>                           
                                </div>
                                <div className="col pt-3 pb-3 mobile-link">
                                    <Link
                                        to='/lamparas-decorativas'
                                        className="d-flex align-items-end justify-content-center"
                                    >
                                        <Img className="icon" fluid={data.decorativas.childImageSharp.fluid} />
                                    </Link>
                                </div>
                                <div className="col pt-3 pb-3 mobile-link">
                                    <Link
                                        to='/nosotros'
                                        className="d-flex align-items-end justify-content-center"
                                    >
                                        <Img className="icon" fluid={data.nosotros.childImageSharp.fluid} />
                                    </Link>
                                </div>
                            </div>
                        </div>    
                    </>
                )}
            />
        )
    }

}