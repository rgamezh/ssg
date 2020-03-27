import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class Renewable extends React.Component {

    state = {
        titleMarginTop: Number
    }

    

    render() {

        const data = this.props.data
        console.log(this.props)
        if(!this.props.willRender){
            return null
        }

        return (
            <>
                <Img className="mt-5" style={{height: '400px'}} fluid={data.portada.childImageSharp.fluid}/>
                <div className="container">
                    <h1 className="us-titles text-center mt-5 mb-5" style={{marginTop: `-${this.state.titleMarginTop} !important`}}>Energías Renovables</h1>

                    <div className="us-content-block">
                        <p>
                        La SUSTENTABILIDAD es uno de los valores primordiales de SSG y, una de las formas de ser congruentes con ello, es a partir del desarrollo y comercialización de bienes y servicios que brinden la óptima utilización de los recursos en equilibrio respecto al entorno. Así mismo, reconocemos que la sustentabilidad va de la mano de la innovación en cualquier ámbito, al tiempo que proporciona beneficios tecnológicos, económicos y socio-ambientales de corto, mediano y largo plazo. Y reconocemos en México a uno de los países con los recursos y crecimiento potencial, a nivel mundial, para el desarrollo de energías para la sustentabilidad. 
                        </p>

                        <p>
                        La necesidad de producir y utilizar energías de costos reducidos, que además sean sustentables, limpias o de fuentes no perecederas, tanto a nivel industrial como particular, lleva a SSG a formar una Unidad Estratégica de Negocio enfocada a la distribución y venta de componentes y módulos fotovoltaicos, con el respaldo de más de 30 años  en innovación, eficiencia y especialización de alta tecnología hecha en Alemania.
                        </p>
                    
                    </div>

                    <div className="us-content-block">

                        <h2 className="us-titles text-center mt-5 mb-5">PRODUCTOS Y SERVICIOS</h2>

                        <p>
                            A través de nuestra Unidad Estratégica de Negocio, proveemos a nuestros clientes con tecnología solar de primera clase que ha sido consistentemente evaluada y desarrollada hasta el último detalle para satisfacer los más altos estándares:
                        </p>

                        <div className="row">

                            <div className="col-lg-6 col-12">

                                <h3>
                                    Paneles (celdas) fotovoltaicos
                                </h3>

                                <p>
                                    Cuentan con la mayor calidad en el mercado europeo y, sumando los inversores
                                    también de calidad mundial, se logra la conexión a la CFE para la reducción del consumo.
                                </p>
                            
                            </div>

                            <div className="col-lg-6 col-12">

                                <Img style={{width: '100%'}} fluid={data.renovables.childImageSharp.fluid} />

                            </div>

                            <div className="col-lg-6 col-12 mt-lg-5">

                                <h3>Instalación</h3>

                                <p>
                                    Contamos con procesos y con personal capacitado para realizar instalaciones profesionales,
                                    utilizando estructuras y/o soportes de calidad, hechos acordes a las necesidades o requerimientos.
                                </p>

                            </div>

                            <div className="col-lg-6 col-12 mt-lg-5">

                                <Img style={{width: '100%'}} fluid={data.instalacion.childImageSharp.fluid} />
                        
                            </div>

                        </div>
                    </div>

                    <h2 className="us-titles text-center mt-5 mb-5">Garantías</h2>

                    <div className="us-content-block">
                        <p>
                            Contando con el respaldo de experiencia, desempeño y calidad, 
                            le garantizamos a través de nuestra Unidad Estratégica de Negocio la mejor calidad 
                            y las más altas ganancias a corto, medio y largo plazo, 
                            al usar los módulos solares e inversores de tecnología alemana de calidad insuperable.
                        </p>
                        <p>
                            Se cuenta con una nave industrial en Cancún, con inventario suficiente, para satisfacer demanda y realizar entregas en forma más oportuna.
                            Igualmente, se cuenta con un equipo de profesionales para atenderle técnicamente 
                            o en el análisis de negocio en términos financieros, como los relacionados al ahorro 
                            o generación de ingresos adicionales.  
                        </p>
                    </div>

                    <h2 className="us-titles text-center mt-5 mb-5">Beneficios</h2>

                    <div className="us-content-block">
                        <h3>En general</h3>
                        <ul>
                            <li>
                                Reducción de costos en el pago de consumo de energía eléctrica
                                desde el inicio de su uso.
                            </li>
                        </ul>

                        <h3>En Hotelería</h3>
                        <ul>
                            <li>
                                Incentivos gubernamentales.
                            </li>
                            <li>
                                Apoyo a sustentabilidad.
                            </li>
                        </ul>

                        <h3>En sectores empresariales</h3>
                        <ul>
                            <li>
                                Ingresos adicionales al generarse remanentes de energía eléctrica.
                            </li>
                        </ul>

                        <h3>En el sector residencial</h3>
                        <ul>
                            <li>
                            Mejor calidad de vida al no tener que restringir drásticamente el uso de equipos electrodoméstico.
                            </li>
                        </ul>

                        <h3>Como negocio</h3>
                        <ul>
                            <li>
                                Comercialice Plantas Generadoras de Energía Eléctrica.
                            </li>
                        </ul>

                        <p>
                            En todos los ámbitos comerciales de bienes y servicios se desarrollan ventajas estratégicas competitivas
                        </p>

                    </div>

                </div>
            </>
        )
    }
}

export default (willRender) => (
    <StaticQuery
        query={graphql`
            query {
                portada: file(relativePath: { eq: "portada-lamparas-decorativas.jpg" }) {
                    childImageSharp{
                        fluid(maxWidth: 2000){
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
                instalacion: file(relativePath: { eq: "instalacion.jpg" }) {
                    childImageSharp{
                        fluid(maxWidth: 1200){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={(data) => <Renewable data={data} willRender={willRender} />}
    />
)