import React from "react";
import '../Styles/style.css'

const Servicios = () => {
    return ( 
        <div className="Container_2">
            
            <div className="title_Servicios">
                <h1>Servicios</h1>
            </div>
        <div className="Contents">
            <div className="Servicios_1">
                <h2 className="DiseñoName">Diseño</h2><br/><br/>
                <label>Experiencia de usuario</label><br/><br/>
                <label>Interfaz de usuario</label><br/><br/>
                <label>Aplicaciones Web</label><br/><br/>
                <label>Prueba de concepto</label><br/><br/>
                <button className="BotonServicios">Ver Servicios de Diseños</button>
            </div>
            <div className="Servicios_2">
                <h2 className="DesarrolloName">Desarrollo</h2><br/><br/>
                <label>Aplicaciones moviles</label><br/><br/>
                <label>Sitios web</label><br/><br/>
                <label>Aplicaciones Web Progresivas</label><br/><br/>
                <button className="BotonServicios">Ver Servicios de Diseños</button>
            </div>
            <div className="Servicios_2">
                <h2 className="DesarrolloName">Marca</h2><br/><br/>
                <label>Identidad de la marca</label><br/><br/>
                <label>Estrategia de Marca</label><br/><br/>
                <button className="BotonServicios">Ver Servicios de Diseños</button>
            </div>
        </div>
    </div>
     );
}
 
export default Servicios;