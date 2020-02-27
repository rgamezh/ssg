import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

export default class FibraPage extends React.Component {

    render() {

        const data = this.props.data
        console.log(this.state)
        return (
            <Layout>
                <Img style={{height: '400px'}} fluid={data.portada.childImageSharp.fluid}/>
                <div className="container">
                    <h1 className="main-titles us-titles text-center mb-5">Fibra de Vidrio</h1>

                    <div className="us-content-block">
                        <p>
                            Nuestro compromiso es proporcionar soluciones integrales de sustentabilidad, ahorro energético, económico y ecológicas. 
                        </p>

                        <p>
                            Por una parte, con la fibra de vidrio complementamos eficientemente la aplicación de nuestros sistemas de iluminación. Por medio de un sistema de embobinado, que cuenta con una excelente relación esfuerzo/peso en comparación a otros procesos de fabricación, se producen postes para:
                        </p>

                        <ul>
                            <li>
                                Alumbrado vial.
                            </li>
                            <li>
                                Líneas de transmisión de baja tensión y media tensión.
                            </li>
                            <li>
                                Líneas de distribución telefónica.
                            </li>
                            <li>
                                Líneas para alumbrado de tráfico.
                            </li>
                            <li>
                                Semáforos, señalización.
                            </li>
                            <li>
                                Cámaras de control de tráfico.
                            </li>
                            <li>
                                Muelles, albercas, pasillos, playas.
                            </li>
                        </ul>

                        <p>
                            Adicionalmente, la selección adecuada de la resina, 
                            brinda una magnífica resistencia química al ambiente y a la corrosión del suelo donde se instale el poste. 
                            Además, la fibra de vidrio hace al poste un elemento aislante eléctrico.
                        </p>

                    </div>

                    <h2 className="us-titles text-center mt-5 mb-5">Ventajas de los postes de fibra de vidrio</h2>

                    <div className="us-content-block">
                        <p>
                            Resistencia mecánica: Tiene una resistencia especifica tracción/densidad) superior al acero.
                            Excelente aislante eléctrico.
                        </p>
                        <p>
                            Incombustibilidad: Por ser material mineral, la fibra de vidrio es incombustible por naturaleza, no propaga la llama en presencia del calor no origina ni humos ni toxicidad.
                        </p>
                        <p>
                            Imputreslibilidad: No sufre ninguna alteración, no se pudre, es insensible a la acción de los roedores y de los insectos.
                        </p>
                        <p>    
                            Resistencia a los agentes químicos.
                        </p>
                        <p>
                            Retención de propiedades mecánicas en altas temperaturas.
                        </p>
                        <p>
                            Instalación fácil, sin necesidad de maquinaria pesada, debido a su poco peso comparado con la madera, el acero y el concreto.
                            Protección UV la superficie de los postes está cubierta por inhibidores de rayos ultravioleta que prolongan la vida útil.
                        </p>
                        <p>
                            En un gran rango de temperatura entre -30ºC y 70ºC, el material demuestra su resistencia en ensayos de envejecimiento acelerado sin pérdida significativa de propiedades mecánicas en periodos equivalentes de más de 50 años.
                        </p>
                        <p>
                            No puede corroerse y soporta las más adversas condiciones climáticas. Resiste el agresivo ambiente marino, con fuertes vientos, alta humedad y salinidad.
                        </p>
                        <p>
                            Ciclo de vida: La duración del poste en PRFV puede superar los 80 años, entre 20 y 40 años más que los materiales convencionales.
                        </p>
                        <p>    
                            Elimina el costo que significa el mantenimiento de los postes de redes eléctricas y telefónicas rurales y urbanas.
                        </p>
                        <p>
                            Disminuye el costo de transporte e instalación por se un material ligero.
                        </p>
                        <p>    
                            Conservan el medio ambiente por ser totalmente limpios desde el punto de vista ecológico.
                        </p>

                        <p>
                            Este compromiso se extiende hacia productos que proporcionan y convocan a la sustentabilidad ecológica, proporcionando, adicionalmente, armonía con el entorno.
                        </p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 ">
                            <p className="us-titles poles-title  text-center">Seccionado con placa metálica</p>
                            <Img style={{width: '100%'}} fluid={data.seccionado.childImageSharp.fluid}/>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="us-titles poles-title text-center">Seccionado para enterrar</p>
                            <Img style={{width: '100%'}} fluid={data.seccionadoParaEnterrar.childImageSharp.fluid}/>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="us-titles poles-title text-center">Recto con placa metálica</p>
                            <Img style={{width: '100%'}} fluid={data.recto.childImageSharp.fluid}/>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="us-titles poles-title text-center">Recto para enterrar</p>
                            <Img style={{width: '100%'}} fluid={data.rectoParaEnterrar.childImageSharp.fluid}/>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="us-titles poles-title text-center">Cónico servicio pesado con base metálica</p>
                            <Img style={{width: '100%'}} fluid={data.conico.childImageSharp.fluid}/>
                        </div>
                        <div className="col-lg-4 ">
                        <p className="us-titles poles-title text-center">Cónico servicio pesado para enterrar</p>
                            <Img style={{width: '100%'}} fluid={data.conicoEnterrar.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const PageQuery = graphql`
    query {
        portada: file(relativePath: { eq: "alumbrado-publico.jpg" }) {
            childImageSharp{
                fluid(maxWidth: 2000){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        seccionado: file(relativePath: { eq: "poste-seccionado.png" }) {
            childImageSharp{
                fluid(maxWidth: 1920){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        seccionadoParaEnterrar: file(relativePath: { eq: "poste-seccionado-enterrar.png" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        recto: file(relativePath: { eq: "poste-recto.png" }) {
            childImageSharp{
                fluid(maxWidth: 1920){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        rectoParaEnterrar: file(relativePath: { eq: "poste-recto-enterrar.png" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        conico: file(relativePath: { eq: "conico-base-metalica.png" }) {
            childImageSharp{
                fluid(maxWidth: 1920){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
        conicoEnterrar: file(relativePath: { eq: "conico-enterrar.png" }) {
            childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                  }
            }
        }
    }
`