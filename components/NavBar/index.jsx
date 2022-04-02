import navbarCss from '../../styles/navbar.module.css'

function Navbar() {
    return (
        <nav className={navbarCss.menubtn}>
            <input id={navbarCss.menutoggle} type="checkbox" />
            <label className={navbarCss.menubtn} htmlFor={navbarCss.menutoggle}>
                <span></span>
            </label>

            <ul className={navbarCss.menubox}>
                <li>
                    <a className={navbarCss.menuitem} href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a className={navbarCss.menuitem} href="#">
                        About us
                    </a>
                </li>
                <li>
                    <a className={navbarCss.menuitem} href="#">
                        Blog
                    </a>
                </li>
                <li>
                    <a className={navbarCss.menuitem} href="#">
                        Articles
                    </a>
                </li>
                <li>
                    <a className={navbarCss.menuitem} href="#">
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }
