import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import NavBar from './navbar';
import Logout from './logout';
import CreateUser from './createUser'
import Sidebar from './sidebar';



class Dashboard extends Component {
    render() {
        return (
            <div className='rtl' >
                <ToastContainer />
                <NavBar />
                <Sidebar />
                <div className='row'>
                    <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4 main_page_bg'>
                        <Switch>
                            <Route path='/admin/logout' component={Logout} />
                            <Route path='/admin/licenses' component={CreateUser} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

export default Dashboard;