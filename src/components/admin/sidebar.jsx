import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import getAdminNavLinks from '../../services/adminNavLinks';
import { slide as Menu } from 'react-burger-menu'



class Sidebar extends Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="outer-container">
                <Menu right width={280} isOpen={true} disableCloseOnEsc pageWrapId={"page-wrap"} outerContainerId={ "outer-container" }>
                    <main id="page-wrap">
                        <a id="home" className="menu-item" href="/">Home</a>                    
                    </main>
                    <main id="page-wrap">
                        <a id="about" className="menu-item" href="/about">About</a>
                    </main>
                    <main id="page-wrap">
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </main>
                    <main id="page-wrap">
                        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                    </main>
                </Menu>
            </div>)
        // const adminNavLinks = getAdminNavLinks()
        // return (
        //     <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
        //         <div className='sidebar-sticky'>
        //             <ul className='nav flex-column'>
        //                 {adminNavLinks.map(nav => (
        //                     <li className='nav-item' key={nav.id}>
        //                         <Link className='nav-link' to={nav.link}>
        //                             <span className={nav.icon} />
        //                             <span className='m-2'>{nav.text}</span>
        //                         </Link>
        //                         <hr className='shadow' />
        //                     </li>
        //                 ))}
        //             </ul>

        //         </div>
        //     </nav>
        // );
    }
}

export default Sidebar;