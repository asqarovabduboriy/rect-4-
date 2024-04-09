import React from 'react'
import './main.css';
import img1 from '../assets/imgs/png2.png';
import img2 from '../assets/imgs/png3.png';
import img3 from '../assets/imgs/png4.png'

function Main() {
    let data = [
        {
            id: 1,
            title: 'Поиск производителей по товару',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.',
            img: img1
        },
        {
            id: 2,
            title: 'Поиск конкретного производителя ',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.',
            img: img2
        },
        {
            id: 3,
            title: 'Доставка образцовтоваров',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.',
            img: img3
        }
    ]


    let main_cards = data?.map((el) => (

        <div className="card_main_section" key={el.id}>
            <div className='imgs_wrapper'>  <img src={el.img} alt="" /></div>
            <h4>{el.title}
            </h4>
            <p>{el.discription}</p>
        </div>



    ))
    return (
        <>
            <div className='container main_card'>
                <div className='flex_elemnt'>
                    {main_cards}
                </div>
            </div>
        </>
    )
}

export default Main;