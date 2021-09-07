import React from "react";
import '../Styles/style.css'

const Testimonios = () => {
    return ( 
        <div className="container_3">
            <div className="Title_Testimonio">Testimonios</div>
            <div className="Comentarios_1">
                
                <div className="Seps">
                <p className="Parrafo_3"><label className="Nombres_Testimonios">Juan Antonio</label><br/>
                Tengo algunos años trabajando<br/>
                     con Javascript y aún así<br/>
                      aprendí varias cosas <br/>
                      importantes de Antonio<br/>
                       y como utiliza Javascript<br/>
                        en el día a día.</p>
                        </div>
                
                <p className="Parrafo_3"><label className="Nombres_Testimonios">Albert Flores</label><br/>
                Me gusto ver el porqué de las cosas<br/>
                 del core de React, saber la magia<br/>
                  que ocurre por detrás, excelente<br/>
                   profesor Antonio <br/>
                    gran vocación.</p>

                    <p className="Parrafo_3"><label className="Nombres_Testimonios">Darlene Robertson</label><br/>
                    Ayuda a entender el porqué de las cosas, <br/>
                    lo cual nos da el poder de aprovechar <br/>
                    mejor el lenguaje y las herramientas <br/>
                    que tenemos.</p>
            </div>
        </div>
     );
}
 
export default Testimonios;