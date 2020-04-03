import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: `#549455`,
          padding: `30px 0`
        }}
      >
        <div
          className="container"
        >
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-2">
            </div>
            <div className="col-12 col-md-8">
              <div className="row divisor pb-2">
              </div>
              <div className="row">
                <p className="yellow-text mb-0 mt-2 col-12 text-center">2019 Synergy Solar Green, Todos los derechos reservados.</p>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com/">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
