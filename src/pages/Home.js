import '../styles/components/pages/Home.css';
import React from 'react';

const Home = (props) => {
    return (
        <main>
            <div className="presentacion">
                <img src="images/News.png" alt="la mejor manera de informarse" id="news" />
                <div className="texto">
                    <div className="titulo">Llegó NEWZ: la mejor manera de informarse</div>
                    <div className="leyenda">Enterate rápidamente lo que está ocurriendo accediendo de manera directa a sus fuentes
                        y etiquetas.</div>
                </div></div>
                <div className="presentacion"><video src='images/SocialMedia.mp4' alt="todas las redes sociales en un sólo lugar" autoPlay="true" loop="yes"></video></div>
                <div class="servicios"> 
                <div class="items">
            <h2>¿Qué te ofrecemos?</h2>
            <div class="cadaitem">
                <i class="far fa-eye" id="items"></i>
                <div class="leyenda">Somos tus ojos en la noticia, buscando de manera directa a los protagonistas y a
                    sus temáticas.</div>
            </div>
            <div class="cadaitem">
                <i class="fas fa-filter" id="items"></i>
                <div class="leyenda">Filtramos las tendencias según tus intereses, tus búsquedas y tu historial.</div>
            </div>
            <div class="cadaitem">
                <i class="fas fa-list-ol" id="items"></i>
                <div class="leyenda">Rankeamos las fuentes y los hashtags más resonantes de las últimas horas para tu
                    mejor lectura.</div>
            </div>
        </div></div>
        </main>
    );
}

export default Home;