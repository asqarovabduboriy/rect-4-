import React from 'react';
import './steps.css';
import img1 from '../assets/imgs/png8.png'
import img2 from '../assets/imgs/png9.png'
import img3 from '../assets/imgs/png10.png'

function Steps() {

    let data = [
        {
            id: 1,
            title: 'Предложение от продавца',
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
            img:img1
        },
        {
            id: 2,
            title: 'Доставка',
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
            img:img2
        },
        {
            id: 3,
            title: 'Установка у клиента',
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
            img:img3
        }
    ]

    let cards = data?.map((el)=>(
        <div className='steps_card' key={el.id}>
        <div className='imgs_wrapper_steps'>  
             <img src={el.img} alt="" />
        </div>
        <div className='steps_acrd_text_conten'>
               <h4>{el.title}</h4>
               <p>{el.discription}</p>
        </div>
     </div>
    ))

    return (
        <>
            <div className='container'>
                <h1 className='steps_title'>Этапы поставки </h1>
                <div className="steps_flex_element">
                      {cards}
                </div>
            </div>
        </>
    )
}

export default Steps;