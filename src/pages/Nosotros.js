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
        </div>
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
        </div>
    </div>
        </section>
    );
}

export default Nosotros;