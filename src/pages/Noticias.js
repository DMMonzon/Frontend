import React, { useState, useEffect} from 'react';
import axios from 'axios';
import NoticiaItem from '../components/noticias/NoticiaItem';
import '../styles/components/pages/Home.css';

const Noticias = (props) => {

    const [loading, setLoading] = useState(false);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const cargarNoticias = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias`);
            setNoticias(response.data);
            setLoading(false);
        };

        cargarNoticias();
    }, []);

    return (
        <content>
            <div class="presentacion">
                <img src="images/Fuentes.png" alt="lista de noticias" id="news" />
                <div class="texto">
                    <div class="titulo">Bienvenid@ al centro de noticias</div>
                    
                    <div class="leyenda">Te mostramos los novedades de las redes sociales citándote las fuentes y sus etiquetas populares.</div>
                </div>
            </div>

            {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        noticias.map(item => <NoticiaItem key={item.id} 
                        title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} />)
                    )}
        <br></br></content>
    );
}

export default Noticias;