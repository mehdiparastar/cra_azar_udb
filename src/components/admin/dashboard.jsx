import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import NavBar from './navbar';

class Dashboard extends Component {
    render() { 
        return ( 
            <div className='container-fluid rtl' style={{ fontFamily: "b mitra" }}>
                <ToastContainer />
                <NavBar />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est obcaecati ab molestiae, assumenda, cupiditate minima eligendi consequatur ut reprehenderit quia voluptates recusandae possimus in nulla nobis tempore vel eaque.
            </div>
         );
    }
}
 
export default Dashboard;