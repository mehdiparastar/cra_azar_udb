import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getAdminNavLinks from '../../services/adminNavLinks';

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLinks()
        return (
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
                <div className='sidebar-sticky'>
                    <ul className='nav flex-column'>
                        {adminNavLinks.map(nav => (
                            <li className='nav-item' key={nav.id}>
                                <Link className='nav-link' to={nav.link}>
                                    <span className={nav.icon} />
                                    <span className='m-2'>{nav.text}</span>                                    
                                </Link>
                                <hr className='shadow'/>
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Sidebar;