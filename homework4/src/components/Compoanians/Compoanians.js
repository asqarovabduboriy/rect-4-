import React from 'react'
import './comp.css'
import img1 from '../assets/imgs/png11.png'
import img2 from '../assets/imgs/png12.png'
import img3 from '../assets/imgs/png13.png'
import img4 from '../assets/imgs/png14.png'
import img5 from '../assets/imgs/png15.png'
import img6 from '../assets/imgs/png16.png'
import img7 from '../assets/imgs/png17.png'
import img8 from '../assets/imgs/png18.png'

function component(params) {
    let data = [
        {
            id: 1,
            title: 'Росатом',
            discription: 'Корпорация атомной энергии',
            img: img1
        },
        {
            id: 2,
            title: 'Газпром',
            discription: 'Энергетическая компания',
            img: img2
        },
        {
            id: 3,
            title: 'Роснефть',
            discription: 'Нефтегазовая компания',
            img: img3
        },
        {
            id: 4,
            title: 'Роскосмос',
            discription: 'Корпорация в космической отрасли',
            img: img4
        },
        {
            id: 5,
            title: 'Лукойл',
            discription: 'Нефтяная компания',
            img: img5
        },
        {
            id: 6,
            title: 'Интер РАО',
            discription: 'Энергетическая компания',
            img: img6
        },
        {
            id: 7,
            title: 'Ростех',
            discription: 'Промышленная корпорация',
            img: img7
        },
        {
            id: 8,
            title: 'Банк ВТБ',
            discription: 'Коммерческий банк',
            img: img8
        },
    ]
    let cards = data?.map((el) => (
        <div className='comp_card' key={el.id}>
            <div className='imgs_wrapper_comp'><img src={el.img} alt="" /></div>
            <h5>{el.title}</h5>
            <p>{el.discription}</p>
        </div>
    ))
    return (
        <>
            <div className='container'>
                <h1 className='comp_title'>Нам доверяют</h1>
                <div className='flex_comp'>
                      {cards}
                </div>
            </div>
        </>
    )
}

export default component;