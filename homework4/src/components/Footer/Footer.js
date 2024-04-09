import React from 'react'
import './Footer.css'
import { FaInstagram, FaTelegram, } from "react-icons/fa";

function Footer() {
    let linka = [
        {
            id: 1,
            links: ["Каталог", "о компании", "Индивидуальная ", "Партнерам"]
        },
        {
            id: 2,
            links: ["Каталог", "о компании", "Индивидуальная ", "Партнерам"]
        },
    ]

    let links_footer = linka?.map((el) => (
        <div className='key' key={el.id}>
            <ul>
                {
                    el?.links.map((el, inx) => (
                        <li key={inx}>{el}</li>
                    ))
                }
            </ul>
        </div>
    ))

    return (
        <>
            <footer>
                <div className='container'>
                    <div className='flex_footer_elemnt'>
                        <div className='footerlogo'><h1>LOGO</h1></div>
                        {links_footer}

                        <div className='adress_conten'>
                            <div className='icon_wrapper_footer'>
                                <FaInstagram className='icon_footer' />
                                <FaTelegram className='icon_footer' />
                            </div>
                            <p>+38 (099)-638-45-37</p>
                            <button>Персональная консультация</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;