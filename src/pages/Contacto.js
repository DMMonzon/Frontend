import '../styles/components/pages/Contacto.css';
import React, {useState} from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.date.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

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
        <form action="/contacto" method="" class="formulario" onSubmit={handleSubmit}>
            <h2>Formulario directo:</h2>
            <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
            <input type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange} required/>
            <input type="text" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} required/>
            <textarea id="comentario" placeholder="Comentario" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
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