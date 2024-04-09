import React from 'react'
import './hero.css'
import car from '../assets/imgs/png1.png'

function Hero(params) {
    return (
        <>
            <div className='container'>
                <div className='flex_element'>
                    <div className='hero_text_content'>
                        <h1>Поставщик Дальнего Востока</h1>
                        <p>Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.
                        </p>
                        <a href="#">Узнать больше</a>
                    </div>
                    <div className='hero_imgs_wrapper'>
                         <img src={car} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;