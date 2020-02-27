import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

const _ = require('lodash')

const Navbar = class extends React.Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      isHome: false,
    }
  }

  componentDidMount() {
    if( this.props.path === "/" ) {
      this.setState({ isHome: true })
    }
  }

  getColor(backgroundColor) {
    const hexRegex = /^#(?:[A-Fa-f0-9]{3}){1,2}$/gm
    const rgbRegex = /(?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}/gm
    let color = ''
    if(hexRegex.test(backgroundColor)){
      const hex = backgroundColor.replace('#', '')
      const r = parseInt(hex.substring(0,2), 16)
      const g = parseInt(hex.substring(2,4), 16)
      const b = parseInt(hex.substring(4,6), 16)
      color = r+','+g+','+b
    } else if (rgbRegex.test(backgroundColor)) {
      color = backgroundColor
    }
    return color
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <StaticQuery 
        query={graphql`
          query NavQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "ilumination-page"}}}, sort: {order: DESC, fields: frontmatter___title}){
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    image {
                      childImageSharp {
                        fluid(maxWidth: 900, quality: 100){
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    backgroundColor
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
            nosotros: file(relativePath: {eq: "nosotros.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            fibra: file(relativePath: {eq: "cert.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            renovables: file(relativePath: {eq: "energias-renovables.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={( data ) => (
          <>
            <nav
              className="navbar navbar-expand-lg"
            >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggler" aria-controls="nav-toggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="container"
              >
                <div 
                  className="collapse navbar-collapse justify-content-center"
                  id="nav-toggler"
                >
                  <Link
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                      width: 300
                    }}
                  >
                    <Img fluid={data.Navbar.frontmatter.navbar.logo.childImageSharp.fluid} />
                  </Link>
                </div> 
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row">
                {
                  data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className={ this.state.isHome ? 'col-md col-12 p-0 full-height grow' : 'col-md col-12 p-0 full-height small-height' } >
                  
                      <BackgroundImage
                        className="background-img"
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      >
                        <Link
                          to={_.deburr(`${node.fields.slug}`)}
                          style={{backgroundImage: `linear-gradient(to bottom, rgba(${this.getColor(node.frontmatter.backgroundColor)},.65) 0%, rgba(0,0,0,.85) 100%)`}}
                          className="special-nav-cover d-flex align-items-end justify-content-center"
                        >
                          <p
                            style={{
                              borderBottom: `6px solid rgb(${this.getColor(node.frontmatter.backgroundColor)})`
                            }}
                            className={ this.state.isHome? 'cover-title' : 'cover-title-margin-sm' }
                          >
                            {node.frontmatter.title}
                          </p>
                        </Link>
                      </BackgroundImage>
                    </div>
                  ))
                }
                <div className={ this.state.isHome ? 'col-md col-12 p-0 full-height grow' : 'col-md col-12 p-0 full-height small-height' }>
                  <BackgroundImage
                    className="background-img"
                    fluid={data.fibra.childImageSharp.fluid}
                  >
                    <Link
                      to='/fibra-de-vidrio'
                      id="fiber-cover"
                      className="special-nav-cover d-flex align-items-end justify-content-center"
                    >
                      <p
                        style={{
                          borderBottom: `6px solid #33cf67`
                        }}
                        className={ this.state.isHome? 'cover-title' : 'cover-title-margin-sm' }
                      >
                        Fibra de Vidrio
                      </p>
                    </Link>
                  </BackgroundImage>
                </div>
                <div className={ this.state.isHome ? 'col-md col-12 p-0 full-height grow' : 'col-md col-12 p-0 full-height small-height' }>
                  <BackgroundImage
                    className="background-img"
                    fluid={data.renovables.childImageSharp.fluid}
                  >
                    <Link
                      id="energy-cover"
                      to='/energias-renovables'
                      className="special-nav-cover d-flex align-items-end justify-content-center"
                    >
                      <p
                        style={{
                          borderBottom: `6px solid #029832`
                        }}
                        className={ this.state.isHome? 'cover-title' : 'cover-title-margin-sm' }
                      >
                        Energías Renovables
                      </p>
                    </Link>
                  </BackgroundImage>
                </div>
                <div className={ this.state.isHome ? 'col-md col-12 p-0 full-height grow' : 'col-md col-12 p-0 full-height small-height' }>
                  <BackgroundImage
                    className="background-img"
                    fluid={data.nosotros.childImageSharp.fluid}
                  >
                    <Link
                      to='/nosotros'
                      style={{backgroundImage: `linear-gradient(to bottom, rgba(0,1,101,.65) 0%, rgba(0,0,0,.85) 100%)`}}
                      className="special-nav-cover d-flex align-items-end justify-content-center"
                    >
                      <p
                        style={{
                          borderBottom: `6px solid #2a265d`
                        }}
                        className={ this.state.isHome? 'cover-title' : 'cover-title-margin-sm' }
                      >
                        Nosotros
                      </p>
                    </Link>
                  </BackgroundImage>
                </div>
              </div>
            </div>
          </>
        )}
      />
    )
  }
}

export default Navbar
