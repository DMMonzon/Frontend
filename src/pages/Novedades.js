import React from 'react';

const Novedades = (props) => {
    return (
        <content>
            <div class="presentacion">
                <img src="images/Notes.png" alt="lista de novedades" id="news" />
                <div class="texto">
                    <div class="titulo">Bienvenid@ al centro de novedades</div>
                    <div class="leyenda">Te mostramos los últimos sucesos y actualizaciones de nuestro sitio web.</div>
                </div>
            </div>

            <div class="card">
                <div class="texto">
                    <h4>Inauguramos nuevas secciones</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis. Nisi at aperiam quaerat
                        aliquid autem nihil? Velit ab temporibus suscipit quas aliquid perspiciatis amet, quam vitae animi
                        voluptas possimus.</h6>
                </div>
            </div>
            <div class="card">
                <div class="texto">
                    <h4>Superamos los 4 millones de seguidores</h4>
                    <h6>Nisi at aperiam quaerat
                        aliquid autem nihil? Velit ab temporibus suscipit quas aliquid perspiciatis amet, quam vitae animi
                        voluptas possimus.</h6>
                </div>
            </div>
            <div class="card">
                <div class="texto">
                    <h4>NEWZ fue tendencia mundial</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis. Nisi at aperiam quaerat
                        aliquid autem nihil? Velit ab temporibus suscipit quas aliquid perspiciatis amet.</h6>
                </div>
            </div>
        </content>
    );
}

export default Novedades;