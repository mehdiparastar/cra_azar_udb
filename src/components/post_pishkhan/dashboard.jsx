import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import NavBar from './navbar';
import Logout from '../admin/logout';
import LicensePublicData from './license/licensePublicData'
// import CreateUser from '../admin/createUser'
import Sidebar from './sidebar';
// import { Row, Col } from 'react-bootstrap'
import '../../css/post_pishkhan/dashboard.css'
import TestComp from '../testComp'

class Dashboard extends Component {
    render() {
        return (
            <div className='rtl' >
                <ToastContainer />
                <Sidebar />
                <NavBar />
                <main id="main" role='main' className='px-4'>
                    <Switch>
                        <Route path='/admin/logout' component={Logout} />
                        <Route path='/admin/licenses_public_data' component={LicensePublicData} />
                        <Route path='/admin/test_comp' component={TestComp}/>
                    </Switch>
                </main >
            </div>
        );
    }
}

export default Dashboard;