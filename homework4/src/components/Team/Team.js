import React from 'react'
import  './team.css';
import img1 from '../assets/imgs/png19.png'
import img2 from '../assets/imgs/png20.png'
import img3 from '../assets/imgs/png21.png'
import img4 from '../assets/imgs/png22.png'
import img5 from '../assets/imgs/png23.png'
import img6 from '../assets/imgs/png24.png'
import img7 from '../assets/imgs/png.25png.png'
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";


function team() {
    let data = [
        {
            id:1,
            name:'Антон Макаров',
            title:'Руководитель компании',
            img:img1
        },
        {
            id:2,
            name:'Иван Аркадьев ',
            title:'Менеджер по закупкам',
            img:img2
        },
        {
            id:3,
            name:'Алина Кравец',
            title:'Сотрудник отдела кадров',
            img:img3
        }, {
            id:4,
            name:'Елена Валерьева',
            title:'Главный бухгалтер',
            img:img4
        },
        {
            id:5,
            name:'Борис Вавилов',
            title:'Бухгалтер',
            img:img5
        },
        {
            id:6,
            name:'Виктор Козуб',
            title:'Менеджер по закупкам',
            img:img6
        }
    ]

    let card_tem = data?.map((el)=>(
        <div className='card_team' key={el.id}>
        <div className='rektangle'></div>
        <img src={el.img} alt="" />
        <div className='card_team_text_content'>
           <h2>{el.name}</h2>
           <p>{el.title}</p>
           <div className='icon_container'>
           <FaInstagram className='icon'  />
           <FaTelegram className='icon' />
           <FaLinkedin className='icon' />
           </div>
        </div>
   </div>
    ))
    return(
        <>
        <div className='container'>
            <h1 className='team_title'>Сотрудники компании</h1>
            <div className='flex_elemtn_team'>
                {card_tem}


                <img className='img_team' src={img7} alt="" />
            </div>
        </div>
        </>
    )
}
export default team;