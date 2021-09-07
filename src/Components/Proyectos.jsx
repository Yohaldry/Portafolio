import React from "react";
import '../Styles/style.css'

const Proyectos = () => {
    return ( 
        <div calssName="Container_2">
            <div className="title_2">
              <h1>Parece magia, funciona <br/> con código.</h1>
              <p className="Parrafo_2">A lo largo de mi carrera como Frontend,<br/>
                   he tenido el privilegio de trabajar<br/>
                    en proyectos retadores e increíbles.</p>
             </div>
             <img className="PaginaEj" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1630911971/Imagen34_fteofy.jpg" alt=""/>
             <img className="PaginaEj_1" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1630912066/Imagen32_anqnc2.jpg" alt=""/>
            <div className="descripcionPaginas">
                    <h2 className="titleMiShop">Mi Shop</h2>
                    <p>Este fue un proyecto<br/>
                        corto de Gran importancia<br/>
                        para mi aprendizaje
                    </p>
                    <button className="botonMiShop">Ver Codigo</button>
             </div>
            <div className="descripcionNETNET">
                    <h2 className="titleMiShop">NETNET</h2>
                    <p>Este fue un proyecto<br/>
                        El cual fue un gran reto para mi<br/>
                        y le dedique el tiempo suficiente para dejarlo con buenos resultados
                    </p>
                    <button className="botonNETNET">Ver Codigo</button>
            </div>
            
        </div>
     
     );
}
 
export default Proyectos;