import React from "react";
import '../Styles/style.css'

function Header() {
  return (
    <div className="About">
      <nav>
          <div className="Container">
              <h3 className="logo">Logo</h3>
              <ul className="list">
                <label className="list-Total">Hola</label>
                <label className="list-Total">Proyectos</label>
                <label className="list-Total">Testimonios</label>
                <label className="list-Total">Contactos</label>
              </ul>
              <button id="imgg" className="botonCurriculo">Descargar_Curriculum</button>
          </div>
      </nav>
    </div>
  );
}

export default Header;
