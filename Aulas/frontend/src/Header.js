import React from 'react';
//Dentro de um componente, deve ter alguma tag em volta de mais de uma tag

//Posso acesar as propriedades do HTML pelo parametro no componente
export default function Header(props){//Componente React
    return (
        <header>{/* O codigo abaixo esta em JSX, props.title acessa as propriedades/atributos do html */}
            <h1>{props.children}</h1>
        </header>
    );
}