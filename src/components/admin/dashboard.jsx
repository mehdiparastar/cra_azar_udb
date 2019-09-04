import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import NavBar from './navbar';
import Logout from './logout';
// import Sidebar from './sidebar';
import MetisMenu from 'react-metismenu'
import RouterLink from 'react-metismenu-router-link';
import '../../css/sidebar.css'
import adminNavLinks from '../../services/adminNavLinks';



class Dashboard extends Component {
    render() {
        return (
            <div className='rtl' >
                <ToastContainer />
                <NavBar />
                {/* <Sidebar className="mt-5" /> */}
                <MetisMenu
                    className="sidebar mt-5"
                    classNameItem="sidebar-items"
                    // activeLinkId={this.state.activeLinkId} 
                    content={adminNavLinks}
                    // LinkComponent={RouterLink}
                />
                <div className='row'>
                    <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
                        <Switch>
                            <Route path='/admin/logout' component={Logout} />
                            <Route path='/admin/licenses' component={Logout} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

export default Dashboard;