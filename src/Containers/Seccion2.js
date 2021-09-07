import React, {Fragment} from 'react'
import Proyectos from '../Components/Proyectos'
import Servicios from '../Components/Servicios';
import Testimonios from '../Components/Testimonios';

const Seccion2 = () => {
    return ( 
        <Fragment>
            <Proyectos />
            <Servicios />
            <Testimonios />
        </Fragment>
     );
}
 
export default Seccion2;

