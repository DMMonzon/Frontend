import React from 'react';

const NoticiaItem = (props) => {
    const { title, subtitle, imagen } = props;

    return (
        <div class="card">
            <div className="arrobas">
                <li>@android</li>
                <li>@infobae</li>
                <li>@autoaldia</li>
            </div>
            <div className="fotoytexto">
                <img src={imagen} />
                <div className="texto">
                    <h4>{title}</h4>
                    <h6>{subtitle}</h6>
                </div></div>
            <div className="hashtags">
                <li>#android</li>
                <li>#navapp</li>
                <li>#seguridad</li>
            </div>
        </div>

        // <div className="noticias">
        //     <h1>{title}</h1>
        //     <h2>{subtitle}</h2>
        //     <img src={imagen} />
        //     <hr />
        // </div>
    );
}

export default NoticiaItem;