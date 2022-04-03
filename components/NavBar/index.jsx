import { useState } from 'react'
import { Menu } from '../Menu'
import navbarCss from '../../styles/navbar.module.css'

function Navbar() {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        { value: 'Главная', href: '/' },
        { value: 'О нас', href: '/about' },
    ]
    return (
        <div className={navbarCss.app}>
            <nav className={navbarCss.nav}>
                <div
                    className={navbarCss.burgerbtn}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span />
                </div>
            </nav>
            {/* <main className={navbarCss.main}>
                <p>verververvdevtrbvervrtvrevfeve</p>
                <p>verververvdevtrbvervrtvrevfeve</p>
                <p>verververvdevtrbvervrtvrevfeve</p>
                <p>verververvdevtrbvervrtvrevfeve</p>
                <p>verververvdevtrbvervrtvrevfeve</p>
            </main> */}
            <Menu
                active={menuActive}
                setActive={setMenuActive}
                header={'Бургер меню'}
                items={items}
            />
        </div>
    )
}

export { Navbar }
