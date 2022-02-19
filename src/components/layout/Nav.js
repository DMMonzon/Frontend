import React from 'react';

function Nav(props){
    return (
        <div><nav className="nav-items">
        <h5><a href="/#" className="seleccionado"><i className="fas fa-home"></i>Principal</a></h5>
        <h5><a href="fuentes.html"><i className="fas fa-at"></i>Fuentes</a></h5>
        <h5><a href="hashtags.html"><i className="fas fa-hashtag"></i>Hashtags</a></h5>
        <h5><a href="galeria.html"><i className="fas fa-image"></i>Galería</a></h5>
        <h5><a href="novedades.html"><i className="fas fa-exclamation-circle"></i>Novedades</a></h5>
        <h5><a href="contacto.html"><i className="fas fa-paper-plane"></i>Contacto</a></h5>
        <h5><a href="nosotros.html"><i className="fas fa-users"></i>Nosotros</a></h5>
    </nav>
    <nav class="nav-movil">
        <a href="/#"><i className="fas fa-home"></i></a>
        <a href="fuentes.html"><i className="fas fa-at"></i></a>
        <a href="hashtags.html"><i className="fas fa-hashtag"></i></a>
        <a href="galeria.html"><i className="fas fa-image"></i></a>
        <a href="novedades.html"><i className="fas fa-exclamation-circle"></i></a>
        <a href="contacto.html"><i className="fas fa-paper-plane"></i></a>
        <a href="nosotros.html"><i className="fas fa-users"></i></a>
    </nav></div>
    );
}

export default Nav;