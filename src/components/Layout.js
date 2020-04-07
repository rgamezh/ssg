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
      width: null
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {

    const path = this.props.path
    const { width } = this.state
    const mobile = width <= 800
    const children = this.props.children

    return (   
      <TemplateWrapper path={path} isMobile={mobile} children={children} />
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
