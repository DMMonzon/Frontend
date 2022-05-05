import '../../styles/components/layout/Header.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function Header (props) {
    return (
        <header>
        <div className="logo">
            <h3>NEWZ</h3>
        </div>
        <nav className="nav-items">
            <h5><NavLink activeClassName='seleccionado' exact to="/"><i className="fas fa-home"></i>Principal</NavLink></h5>
            <h5><NavLink activeClassName='seleccionado' exact to="/novedades"><i className="fas fa-exclamation-circle"></i>Noticias</NavLink></h5>
            <h5><NavLink activeClassName='seleccionado' exact to="/contacto"><i className="fas fa-paper-plane"></i>Contacto</NavLink></h5>
            <h5><NavLink activeClassName='seleccionado' exact to="/nosotros"><i className="fas fa-users"></i>Nosotros</NavLink></h5>
        
        </nav>
            <nav class="nav-movil">
                <NavLink activeClassName='seleccionado' exact to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink activeClassName='seleccionado' exact to="/novedades"><i className="fas fa-exclamation-circle"></i></NavLink>
                <NavLink activeClassName='seleccionado' exact to="/contacto"><i className="fas fa-paper-plane"></i></NavLink>
                <NavLink activeClassName='seleccionado' exact to="/nosotros"><i className="fas fa-users"></i></NavLink>
            </nav>
    </header>
    );
}

export default Header;