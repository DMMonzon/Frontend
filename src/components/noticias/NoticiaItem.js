import React from 'react';

const NoticiaItem = (props) => {
    const { title, subtitle, imagen } = props;

    return (
        <div className="noticias">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <hr />
        </div>
    );
}

export default NoticiaItem;