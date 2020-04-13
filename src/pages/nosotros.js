import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import Layout from '../components/Layout'

export default class Nosotros extends React.Component {
    render() {

        const data = this.props.data

        return (
            <Layout>
                <BackgroundImage style={{ height: '400px' }} className="container-fluid p-0" fluid={data.almacen.childImageSharp.fluid}>

                </BackgroundImage>
                <div className="container">
                    <div className="page-titles-wrapper d-flex align-items-center justify-content-center">
                        <span className="title-icon"><Img style={{ maxWidth: '80px' }} fluid={data.titleIcon.childImageSharp.fluid} /></span>
                        <h1 className="page-titles text-center mb-0 p-lg-0">Acerca de Nosotros</h1>
                    </div>
                    <div className="row justify-content-center text-justify purple-text">
                        <p className="col-lg-6">
                            SSG -Synergy Solar Green- cuenta con más de 20 años operando en México, fabricando inicialmente y a la fecha, lámparas decorativas hechas a la medida de acuerdo a los requerimientos del cliente.
                        </p>
                        <p className="col-lg-6">
                            Previendo los cambios tecnológicos, económicos y energéticos en el mundo, SSG consolidó una alianza con  MICROPLUS GERMANY, para fortalecer, mediante la tecnología propia y patentada MICROLED PLUS.
                        </p>
                        <ul className="col-sm-6 justify-content-center">
                            <li>Nuestra misión hacia la eficiencia energética y tecnológica.</li>
                            <li>Nuestra expansión comercial y presencia internacional.</li>
                        </ul>
                    </div>

                    <div className="accordion mb-5" id="us-accordion">
                        <div className="card">
                            <div className="card-header" id="nuestra-presencia-header">
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="title-icon"><Img style={{ maxWidth: '80px' }} fluid={data.presencia.childImageSharp.fluid} /></span>
                                    <h2
                                        className="purple-text decorative text-center mt-5 mb-5"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Nuestra presencia
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="nuestra-presencia-header" data-parent="#us-accordion">
                                <div className="card-body">
                                    <div className="row text-justify purple-text">
                                        <p>
                                            MICROPLUS GERMANY cuenta con cuatro sociedades en distintos países europeos y proyectos en 57 países. <br />
                                            SEDE PRINCIPAL en ESPAÑA desde 1996 - se desarrollan las gamas de alumbrado publico e industrial: MPG – KS – DOWNLIGHT; <br />
                                            En PORTUGAL, se fabrican los componentes de aluminio y pintura;<br />
                                            En ALEMANIA, se desarrolla el I+D+I  y el control de calidad de los productos bajo estrictas CERTIFICACIONES INTERNACIONALES: <br />
                                        </p>
                                        <ul>
                                            <li>ISO/IQNET – TUV – ENAC</li>
                                            <li>BUREAU VERITAS – eiC – IPAC</li>
                                            <li>UL y NOL+2:2</li>
                                        </ul>
                                    </div>

                                    <Img style={{ width: '100%' }} fluid={data.mapa.childImageSharp.fluid} />

                                    <div>
                                        <p>
                                            Nuestra misión y expansión ha seguido fortaleciéndose. Hoy SSG tiene su sede operativa en Cancún, Q. Roo, México,
                                            y cuenta con fábricas en Guadalajara, CDMX, Puebla y Monterrey, así como también en España, China y Colombia y hemos ampliado nuestras relaciones comerciales a Canadá y República Dominicana.
                                    </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="nuestros-productos-header">
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="title-icon"><Img style={{ maxWidth: '80px' }} fluid={data.nuestrosProductos.childImageSharp.fluid} /></span>
                                    <h2
                                        className="purple-text decorative text-center mt-5 mb-5"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="collapseTwo"
                                    >
                                        Nuestros Productos
                                    </h2>
                                </div>
                            </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="nuestros-productos-header" data-parent="#us-accordion">
                                    <div className="card-body">
                                        <div className="row text-justify purple-text">
                                            <p className="col-sm-12 col-lg-6">
                                                Con MICROLED PLUS ofrecemos un producto competitivo en precio y en calidad, con una tecnología propia, pudiendo ofrecer una eficacia de 150-180 lm/W , colocándonos a la vanguardia en rendimiento e innovación. Cabe resaltar que el ángulo direccional de emisión de luz (120°) de nuestras lámparas y luminarias reduce el gasto energético entre un 75% y un 93% respecto a las tradicionales. Así mismo, éste es dirigible en la dirección deseada a través de nuestra lente de vidrio, lo hace, además, que la contaminación lumínica prácticamente desaparezca y que el flujo luminoso hacia el hemisferio superior, sea prácticamente nulo.
                                            </p>
                                            <div className="col-sm-12 col-lg-6">
                                                <p>
                                                    MICROLED PLUS mejora también la resistencia de corriente con la fusión de varios elementos semiconductores, repercutiendo en la capacidad de producción de energía lumínica.
                                                </p>

                                                <p>
                                                    En cuanto a innovación, con MICROLED PLUS contamos con más de 30 patentes incluyendo lentes, adaptaciones y nuevas luminarias. Nuestra misión nos lleva a la búsqueda y desarrollo de alternativas energéticas eficientes y sostenibles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="title-icon"><Img style={{ maxWidth: '80px' }} fluid={data.valores.childImageSharp.fluid} /></span>
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseThree" 
                                        aria-expanded="false" 
                                        aria-controls="collapseThree"
                                    >
                                        Nuestros valores y responsabilidad
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#us-accordion">
                                <div className="card-body">
                                    <div className="row text-justify purple-text">
                                        <p className="col-sm-12 col-lg-6">
                                            HOY, SSG consolida una fuerte experiencia en el mercado de iluminación que le permite proporcionar soluciones y respuestas, abasteciendo varios y diversos proyectos exitosamente, para interiores y exteriores, en diversos contextos: Comerciales, Turísticos, Industriales, Culturales, de Salud, Deportivos, para la Educación, entre otros, tanto urbanos como suburbanos, con la garantía de servicio y atención personalizada, ahorrando dinero.
                                        </p>
                                        <p className="col-sm-12 col-lg-6">
                                            Cabe resaltar que nuestras fábricas en México, China y Colombia, se alinean también a nuestra misión y estándares de desempeño, calidad, tecnología y precio, todo lo cual se diferencía en el mercado por nuestra RESPONSABILIDAD, PROFESIONALISMO, ÉTICA, HONESTIDAD, CONFIABILIDAD.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

export const NosotrosPageQuery = graphql`
    query {
        almacen: file(relativePath: { eq: "almacen.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 2000){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        logo: file(relativePath: { eq: "logo-ssg.png" }) {
            childImageSharp{
                fluid(maxWidth: 500){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        mapa: file(relativePath: { eq: "mapa.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 1920){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        titleIcon: file(relativePath: { eq: "nosotros.png" }) {
            childImageSharp{
                fluid(maxWidth: 80){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        nuestrosProductos: file(relativePath: { eq: "nuestros-productos.png" }) {
            childImageSharp{
                fluid(maxWidth: 80){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        presencia: file(relativePath: { eq: "presencia.png" }) {
            childImageSharp{
                fluid(maxWidth: 80){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        valores: file(relativePath: { eq: "valores.png" }) {
            childImageSharp{
                fluid(maxWidth: 80){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
    }
`