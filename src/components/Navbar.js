import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
                  }
                }
              }
            }
          }
        `}
        render={( data ) => (
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
                        to={_.deburr(`/${node.fields.slug}/`)}
                        id="products-cover"
                        className="special-nav-cover d-flex align-items-end justify-content-center"
                      >
                        <p
                          style={{
                            borderBottom: `6px solid #e0e64e`
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
            </div>
          </div>
        )}
      />
    )
  }
}

export default Navbar
