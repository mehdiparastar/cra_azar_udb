import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import adminNavLinks from '../../services/adminNavLinks';
import '../../css/sidebar.css'
import { Nav } from 'react-bootstrap'
import MetisMenu from 'react-metismenu'
import RouterLink from 'react-metismenu-router-link';

class Sidebar extends Component {
    state = {
        activeLinkId: 23
    }

    render() {

        return (
            <MetisMenu
                className="sidebar mt-5"
                classNameItem="sidebar-items"
                // activeLinkId={this.state.activeLinkId} 
                content={adminNavLinks} LinkComponent={RouterLink}/>
        );
    }
}

export default Sidebar;





// class Sidebar extends Component {

//     showSettings(event) {
//         event.preventDefault();
//     }

//     render() {
//         const adminNavLinks = getAdminNavLinks()
//         return (
//             <nav className='col-md-2 d-none d-md-block bg-light sidebar ml-0'>
//                 <div className='sidebar-sticky'>
//                     <ul className='nav flex-column'>
//                         {/* <Nav title="معرفی سازمان" id="nav-introduction">
//                             <Nav.Item href='#history'>تاریخچه سازمان</Nav.Item>
//                             <Nav.Item href='#duties'>وظایف و اختیارات</Nav.Item>
//                             <Nav.Item href='#bases'>اساسنامه سازمان</Nav.Item>
//                             <Nav.Item href='#chart' disabled>چارت سازمانی</Nav.Item>
//                         </Nav> */}
//                         {adminNavLinks.map(nav => (
//                             <li className='nav-item' key={nav.id}>
//                                 <Link className='nav-link' to={nav.link}>
//                                     <span className={nav.icon} />
//                                     <span className='m-2'>{nav.text}</span>
//                                     <ul className='nav flex-column'>
//                                         {nav.sub.map(subnav => (
//                                             <li className='nav-item' key={subnav.id}>
//                                                 <Link className='nav-link' to={subnav.link}>
//                                                     <span className={subnav.icon} />
//                                                     <small className='m-2'>{subnav.text}</small>
//                                                 </Link>
//                                                 {/* <hr className='shadow' /> */}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </Link>
//                                 <hr className='shadow' />
//                             </li>
//                         ))}
//                     </ul>

//                 </div>
//             </nav>
//         );
//     }
// }

// export default Sidebar;

