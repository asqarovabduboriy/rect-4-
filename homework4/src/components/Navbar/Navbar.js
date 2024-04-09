import React, { useState } from 'react'
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [toggle, setToggle] = useState("")

    let items = ["Home", "About", "Blog", "Contact", "Help"];

    let item = items?.map((el, inx) => (
        <li key={inx}><a href="#">{el}</a></li>
    ))
    return (
        <>
            <header>
                <div className="container">
                    <div className='Wrapper'>
                        <div className='logo'>
                            <h1>грузовик</h1>
                        </div>
                        <ul className='ul_item_navbar'>
                            {item}
                        </ul>
                    </div>
                    <div className='mobilni_navbar' onClick={()=>setToggle(!toggle)}>
                    <GiHamburgerMenu />
                    </div>
                    <div className= {`sidebar ${toggle? "show" : ""}`}>
                    <div className='mobilni_navbar' onClick={()=>setToggle(!toggle)}>
                    <IoMdClose />
                    </div>

                    <div>
                        <ul className='mabilni_novabr'>
                            {item}
                        </ul>
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;