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
                </div>
            </div>
            <article>
                <div className="card">
                    <div className="arrobas">
                        <li>@android</li>
                        <li>@infobae</li>
                        <li>@autoaldia</li>
                    </div>
                    <div className="fotoytexto">
                        <img src="images/navigation.jpg" alt="navegación mediante app" />
                        <div className="texto">
                            <h4>Android Auto ofrecerá más seguridad a los conductores</h4>
                            <h6>Los usuarios ahora dispondrán de mejores funciones para hacer sus viajes más fáciles y menos
                                peligrosos.
                            </h6>
                        </div>
                    </div>
                    <div className="hashtags">
                        <li>#android</li>
                        <li>#navapp</li>
                        <li>#seguridad</li>
                    </div>
                </div></article>
                <article>
                <div className="card">
                    <div className="arrobas">
                        <li>@twitter</li>
                        <li>@mundosub</li>
                        <li>@infobae</li>
                    </div>
                    <div className="fotoytexto">
                        <img src="images/twitter.jpg" alt="subtitulos en twitter" />
                        <div className="texto">
                            <h4>Twitter añadirá subtítulos automáticos a los videos</h4>
                            <h6>La red social de los ciento cuarenta caracteres creó un equipo especializado en accesibilidad para
                                crear funciones diferentes.
                            </h6>
                        </div>
                    </div>
                    <div className="hashtags">
                        <li>#accesibilidad</li>
                        <li>#twitter</li>
                        <li>#subtitulos</li>
                    </div>
                </div></article>
                <article>
                <div className="card">
                    <div className="arrobas">
                        <li>@iphone</li>
                        <li>@dexterok</li>
                        <li>@tecnomix</li>
                    </div>
                    <div className="fotoytexto">
                        <img src="images/iphone.jpg" alt="errores anti bateria" />
                        <div className="texto">
                            <h4>Los 8 errores comunes que degradan la batería de su iPhone</h4>
                            <h6>Van desde cerrar aplicaciones en la multitarea, hasta cumplir ciclos de carga innecesariamente.
                            </h6>
                        </div>
                    </div>
                    <div className="hashtags">
                        <li>#iphone</li>
                        <li>#apple</li>
                        <li>#tips</li>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Home;