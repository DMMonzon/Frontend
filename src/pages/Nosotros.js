import '../styles/components/pages/Nosotros.css';
import React from 'react';

const Nosotros = (props) => {
    return (
        <section>

    <div class="presentacion">
        <img src="images/staff.png" alt="sobre nosotros" id="news" />
        <div class="texto">
            <div class="titulo">El staff de NEWZ está a tu entera disposición</div>
            <div class="leyenda">Conocé quiénes buscan día a día la optimización de tu valioso tiempo.</div>
        </div>
    </div>

    <div class="servicios">
        <div class="nosotros">
            <div class="fuente-destacada">
                <img src="images/staff1.jpg" alt="Martín Monzón" id="foto-fuente" />
                <h4>MARTÍN MONZÓN</h4>
                <h6>Jefe de redacción, insistente buscador de la eficiencia en las comunicaciones.</h6>
                <div class="arrobas">@dmmonzon82</div>
            </div>
            <div class="fuente-destacada">
                <img src="images/staff2.jpg" alt="Karina Perchivale" id="foto-fuente" />
                <h4>KARINA PERCHIVALE</h4>
                <h6>Searcher engineer, rastreadora serial de información fidedigna.</h6>
                <div class="arrobas">@karytebusca</div>
            </div>
            <div class="fuente-destacada">
                <img src="images/staff3.jpg" alt="Liu Kang" id="foto-fuente" />
                <h4>LIU KANG</h4>
                <h6>Full Stack Developer, programador del sistema único de nuestra web.</h6>
                <div class="arrobas">@liukangMK2</div>
            </div>
            <div class="fuente-destacada">
                <img src="images/fuente3.jpg" alt="Liu Kang" id="foto-fuente" />
                <h4>SERGIO LACUELGUE</h4>
                <h6>Copy Writer, creador de los textos más influyentes del cyberespacio.</h6>
                <div class="arrobas">@lacuelgueOK</div>
            </div>
            <div class="fuente-destacada">
                <img src="images/fuente4.jpg" alt="Liu Kang" id="foto-fuente" />
                <h4>MAITE NIEVAS</h4>
                <h6>Community Manager, tejedora profesional de todas nuestras redes.</h6>
                <div class="arrobas">@LaMaiteJedora</div>
            </div>
        </div>
    </div>
    <div class="card">
    <img src="images/redaccion.jpg" alt="buscadores trabajando" id="foto-grande" />
    <h5>SOMOS EL NEXO ENTRE LAS REDES Y TU INTERÉS.</h5>
    </div>
        </section>
    );
}

export default Nosotros;