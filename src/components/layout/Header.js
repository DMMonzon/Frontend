import React from 'react';
import {Link} from 'react-router-dom';

function Header (props) {
    return (
        <header>
        <div className="logo">
            <h3>NEWZ</h3>
        </div>
        <nav className="nav-items">
            <h5><Link to="/"><i className="fas fa-home"></i>Principal</Link></h5>
            <h5><Link to="/novedades"><i className="fas fa-exclamation-circle"></i>Novedades</Link></h5>
            <h5><Link to="/contacto"><i className="fas fa-paper-plane"></i>Contacto</Link></h5>
            <h5><Link to="/nosotros"><i className="fas fa-users"></i>Nosotros</Link></h5>
        
        </nav>
            <nav class="nav-movil">
                <Link to="/"><i className="fas fa-home"></i></Link>
                <Link to="/novedades"><i className="fas fa-exclamation-circle"></i></Link>
                <Link to="/contacto"><i className="fas fa-paper-plane"></i></Link>
                <Link to="/nosotros"><i className="fas fa-users"></i></Link>
            </nav>
    </header>
    );
}

export default Header;