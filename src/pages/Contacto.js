import '../styles/components/pages/Contacto.css';
import React from 'react';

const Contacto = (props) => {
    return (
        <content>
            <div class="presentacion">
        <img src="images/Sending.png" alt="formas de contacto" id="news"/>
        <div class="texto">
            <div class="titulo">Contactate con el equipo de trabajo de NEWZ</div>
            <div class="leyenda">Ponemos a tu disposición diferentes formas de comunicarte con nosotros. Vamos a hablar!
            </div>
        </div>
    </div>

    <div class="contacto">
        <form action="" method="" class="formulario">
            <h2>Formulario directo:</h2>
            <input type="text" placeholder="Nombre" required/>
            <input type="email" placeholder="E-Mail" required/>
            <input type="text" placeholder="Teléfono"/>
            <textarea id="comentario" placeholder="Comentario" required></textarea>
            <input type="submit" id="boton-enviar" value="Enviar"/>
        </form>
        <div class="items">
            <h2>Otros medios de contacto:</h2>
            <div class="cadaitem">
                <i class="far fa-envelope" id="items"></i>
                <div class="leyenda">Envianos un mail a nuestro correo <a href="mailto:newz@gmail.com" id="mail">newz@gmail.com</a>.</div>
            </div>
            <div class="cadaitem">
                <i class="fas fa-phone-alt" id="items"></i>
                <div class="leyenda">Llamanos por teléfono al número 03442 468970.</div>
            </div>
            <div class="cadaitem">
                <i class="fab fa-whatsapp" id="items"></i>
                <div class="leyenda">O mensajeanos por WhatsApp al celular 3442 15824919.</div>
            </div>
        </div>
    </div>
        </content>
    );
}

export default Contacto;