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
                    <h1 className="page-titles decorative text-center mt-5 mb-5">Postes en fibra de vidrio</h1>

                    <div className="">
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

                    <div className="accordion mb-5" id="postes">
                        <div className="card">
                            <div className="card-header" id="ventajas">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2
                                        className="purple-text decorative text-center mt-5 mb-5"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Ventajas de los postes de fibra de vidrio
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="ventajas" data-parent="#postes">
                                <div className="card-body">
                                    <div className="text-justify purple-text">
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
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="nuestros-productos-header">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2
                                        className="purple-text decorative text-center mt-5 mb-5"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="collapseTwo"
                                    >
                                        Seccionado con placa metálica
                                    </h2>
                                </div>
                            </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="nuestros-productos-header" data-parent="#postes">
                                    <div className="card-body d-flex justify-content-center">
                                        <div style={{width: '300px'}}>
                                            <Img style={{height: '100%'}} fluid={data.seccionado.childImageSharp.fluid}/>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseThree" 
                                        aria-expanded="false" 
                                        aria-controls="collapseThree"
                                    >
                                        Seccionado para enterrar
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#postes">
                                <div className="card-body d-flex justify-content-center">
                                    <div style={{width: '300px'}}>
                                        <Img style={{width: '100%'}} fluid={data.seccionadoParaEnterrar.childImageSharp.fluid}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFour">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseFour" 
                                        aria-expanded="false" 
                                        aria-controls="collapseFour"
                                    >
                                        Recto con placa metálica
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#postes">
                                <div className="card-body d-flex justify-content-center">
                                    <div style={{width: '300px'}}>
                                        <Img style={{width: '100%'}} fluid={data.recto.childImageSharp.fluid}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFive">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseFive" 
                                        aria-expanded="false" 
                                        aria-controls="collapseFive"
                                    >
                                        Recto para enterrar
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#postes">
                                <div className="card-body d-flex justify-content-center">
                                    <div style={{width: '300px'}}>
                                        <Img style={{width: '100%'}} fluid={data.rectoParaEnterrar.childImageSharp.fluid}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingSix">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseSix" 
                                        aria-expanded="false" 
                                        aria-controls="collapseSix"
                                    >
                                        Cónico servicio pesado con base metálica
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#postes">
                                <div className="card-body d-flex justify-content-center">
                                    <div style={{width: '300px'}}>
                                        <Img style={{width: '100%'}} fluid={data.conico.childImageSharp.fluid}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingSeven">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 
                                        className="purple-text decorative text-center mt-5 mb-5 collapsed"
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#collapseSeven" 
                                        aria-expanded="false" 
                                        aria-controls="collapseSeven"
                                    >
                                        Cónico servicio pesado para enterrar
                                    </h2>
                                </div>
                            </div>
                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#postes">
                                <div className="card-body d-flex justify-content-center">
                                    <div style={{width: '300px'}}>
                                        <Img style={{width: '100%'}} fluid={data.conicoEnterrar.childImageSharp.fluid}/>
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