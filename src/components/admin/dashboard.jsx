import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import NavBar from './navbar';
import Logout from './logout';

class Dashboard extends Component {
    render() { 
        return ( 
            <div className='container-fluid rtl' style={{ fontFamily: "b mitra" }}>
                <ToastContainer />
                <NavBar />
                <div className='row'>
                    {/* <Sidebar /> */}
                    <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
                        <Switch>
                            {/* <Route path='/admin/create-post' component={CreatePost} />
                            <Route path='/admin/allposts' component={AllPosts} />
                            <Route path='/admin/create-course' component={CreateCourse} />
                            <Route path='/admin/allcourses' component={AllCourses} />
                            <Route path='/admin/editpost' component={EditPost} />
                            <Route path='/admin/editcourse' component={EditCourse} /> */}
                            <Route path='/admin/logout' component={Logout} />
                        </Switch>
                    </main>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;