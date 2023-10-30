import React from 'react';
import './NavBar.css'

const NavBar = ({ scroll }) => {
    const logo = 'https://media.discordapp.net/attachments/880930626386153492/999072223648288868/Logo_Bruno.png'

    const windowWidth = window.innerWidth < 767

    const MENU_ITEMS = [
        {
            id: 1,
            label: 'Inicio',
            href: '#home'
        },
        {
            id: 2,
            label: 'Sobre mi',
            href: '#aboutme'
        },
        {
            id: 3,
            label: 'Habilidades',
            href: '#skills'
        },
        {
            id: 4,
            label: 'Proyectos',
            href: '#proyects'
        },
        {
            id: 5,
            label: 'Contacto',
            href: '#contact'
        }
    ]

    return (
        <>
            <nav className="navbar navbar-expand-md d-none d-md-block">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a href="#">
                            <img src={logo} alt="Bruno Barbaran logo" height="35" className="d-inline-block align-text-top" />
                        </a>
                    </div>
                    <div style={windowWidth ? {} : { transform: `translateY(-${scroll}px)` }} >
                        <ul className="navbar-nav ">
                            {MENU_ITEMS.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <a className="nav-link" href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='d-none d-md-block'></div>
                </div>
            </nav>


            <nav className="navbar navbar-expand-md d-block d-md-none">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a href="#">
                            <img src={logo} alt="Bruno Barbaran logo" height="35" className="d-inline-block align-text-top" />
                        </a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div style={windowWidth ? {} : { transform: `translateY(-${scroll}px)` }} >
                                <ul className="navbar-nav ">
                                    {MENU_ITEMS.map((item) => (
                                        <li className="nav-item" key={item.id} data-bs-dismiss="offcanvas">
                                            <a className="nav-link" href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
