import React from 'react';
import Header from './Header';
import CardsPizza from './CardsPizza';
import pizzas from '../assets/js/pizzas';

export const Home = () =>{

    return (
        <>
        <Header/>
        <div className='container'>
            <div className='row'>
                {pizzas.map((pizza) => (
                    <div className='col-md-4 col-xs-12 caja-cards' key={pizza.id}>
                         <CardsPizza 
                                titulo={pizza.name} 
                                ingredientes={pizza.ingredients} 
                                precio={pizza.price} 
                                img={pizza.img}
                                descripcion={pizza.desc}
                            />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home;