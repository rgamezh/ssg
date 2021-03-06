import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import whatsapp from '../img/whatsapp.png'

export default class Layout extends React.Component {

  constructor() {
    super()
    this.state = {
      isMobile: false
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    this.handleWindowSizeChange()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange() {
    this.setState({
      isMobile: window.innerWidth <= 800
    })
  }

  render() {

    const path = this.props.path
    const { isMobile } = this.state
    const children = this.props.children
    let mobile = null
    
    return (   
      <TemplateWrapper path={path} isMobile={isMobile} children={children} />
    )
  }
}

const TemplateWrapper = ({ children, path, isMobile }) => {

  const { title, description } = useSiteMetadata()

  return (
    <div style={{position: "relative"}}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar isMobile={isMobile} path={path} />
      <div>{children}</div>
      <a 
        className="whatsapp-link"
        href="https://wa.me/5219981082856"
        target="_BLANK"
      >
        <img className="w-100" src={whatsapp} alt="Whatsapp Logo" />
      </a>
      <Footer />
    </div>
  )
}
