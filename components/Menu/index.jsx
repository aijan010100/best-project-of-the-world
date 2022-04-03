import Link from 'next/link'
import s from '../../styles/menu.module.css'

function Menu({ header, items, active, setActive }) {
    return (
        <div className={active ? `${s.menu} ${s.active}` : `${s.menu}`}>
            <div className={s.blur} />
            <div className={s.menu_content}>
                <div className={s.menu_header}>{header}</div>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.href}>
                                    <a className={s.a}>{item.value}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export { Menu }
