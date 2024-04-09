import React from 'react';
import img1 from '../assets/imgs/png5.png';

// import img2 from '../assets/imgs/png6.png'
// import img3 from '../assets/imgs/png7.png'
export function Works() {
    // let data = [
    //     {
    //         id:1,
    //         title:'Станки и оборудование',
    //         discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    //         price: 20.00,
    //         img:img1
    //     },
    //     {
    //         id:2,
    //         title:'Компоненты и запчасти',
    //         discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    //         price: 18.00,
    //         img:img2
    //     },
    //     {
    //         id:3,
    //         title:'Станки и оборудование',
    //         discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    //         price: 20.00,
    //         img:img3
    //     }
    // ]
    return (
        <>
            <div className='container'>
                <div className='our_text_content'>
                    <h1>Выполненные работы</h1>
                    <p>Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.
                    </p>
                </div>
                <div className="flex-our_elemnt">
                    <div className='our_card'>
                        <img src={img1} alt="" />
                        <div className='our_card_text_content'>
                            <h4>Станки и оборудование</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.У нас специальный подход к каждому виду товаров.
                            </p>
                            <b>20.000 руб</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
