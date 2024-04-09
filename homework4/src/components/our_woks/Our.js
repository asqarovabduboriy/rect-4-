import React from 'react';
import './our.css'
import img1 from '../assets/imgs/png5.png';
import img2 from '../assets/imgs/png6.png'
import img3 from '../assets/imgs/png7.png'


function Works() {
    let data = [
        {
            id:1,
            title:'Станки и оборудование',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
            price: 20000,
            img:img1
        },
        {
            id:2,
            title:'Компоненты и запчасти',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
            price: 18000,
            img:img2
        },
        {
            id:3,
            title:'Станки и оборудование',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
            price: 20000,
            img:img3
        }
    ]

    let our_works_card = data?.map((el)=>(
        <div className='our_card' key={el.id}>
                        <img src={el.img} alt="" />
                        <div className='our_card_text_content'>
                            <h4>{el.title}</h4>
                            <p>{el.discription}</p>
                            <b>{el.price} руб</b>
                        </div>
                    </div>
    ))
 return(
    <>
       <div className='container'>
                <div className='our_text_content'>
                    <h1>Выполненные работы</h1>
                    <p>Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.
                    </p>
                </div>
                <div className="flex-our_elemnt">
                    { our_works_card}
                </div>
            </div>
    </>
 )
}
export default Works;