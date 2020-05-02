import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styled, {css} from 'styled-components';
import tenista from '../../assets/TennistaGris.svg';
import links from '../../constants/links';

const Derecho = styled.div`
   z-index: 0;
   height: 100vh;
    @media screen and (min-width: 767px){
        z-index: 99;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`;
const Tennista = styled.img`
      position: absolute;
      z-index: 9999;
      bottom: 30px;
      left: 15%;
      width: 20%;
      z-index: 92;
      display: none;

      @media screen and (min-width: 767px){
          display: block;
      }
  
`;


const Contenedor = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: auto; 
   
    @media screen and (min-width: 767px){
        grid-template-columns: 30% 70%;
        
        .aplicarGrid{
            grid-column-start: 2;
            grid-column-end: 3;
        }
 
    }
  
    .ocultarTenista{
        display: none;
    }

    
`;

export default class EnhancedRoute extends Component {
   
    render() {
        const { path, exact, withNavbar, withFooter, component } = this.props;
        let clase = "";
        let ocultarTenista = "";

        withNavbar === true ? clase = "aplicarGrid" : clase = "";
        path === "/" ? ocultarTenista = "ocultarTenista" : ocultarTenista=""; 

        let items = links;
        let usuarioSeleccionado = items.find(user => user.usuario === "administrador");
        
        
        return (
                <Route
                    path={path}
                    exact={exact}
                    render={props => (
                        <>
                            <Contenedor>
                                {withNavbar && <Navbar itemsMenu={usuarioSeleccionado} />}
                                <Derecho className={clase}>
                                    {React.createElement(component, props)}
                                </Derecho>
                                <Tennista className={ocultarTenista} src={tenista}/>
                            </Contenedor>
                            {withFooter && <Footer />}
                        </>
                    )}
                ></Route>
           
        );
    }
}
