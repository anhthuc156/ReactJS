import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
function Menu() {
    return (
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand">Title</a>
            <ul className="nav navbar-nav">
                {showMenu(menus)}
            </ul>
        </nav>
    );
}

function showMenu(menus) {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) =>
            <MenuLink key={index}
                label={menu.name}
                to={menu.to}
                activeOnlyWhenExact={menu.exact}
            />
        )
    }
    return result
}

export default Menu;
