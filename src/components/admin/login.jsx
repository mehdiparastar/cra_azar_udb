import React, { Component } from 'react';
import { login } from '../../services/loginService';
import { ToastContainer, toast } from 'react-toastify';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await login(this.state.email, this.state.password)
            localStorage.setItem('token', data)
            this.props.history.replace('/admin')

        } catch (ex) {
            toast.error(<div className='text-center' style={{fontFamily:"b mitra"}}> ایمیل و یا پسورد اشتباه است</div>)
            console.log('ex' + ex)
            // if (ex.response && ex.reaponse.status === 400) {                
            //     toast.error('ایمیل و یا پسورد اشتباه است')
            // }
        }
    }

    render() {
        return (
            <div className='body_bg'>
                <form onSubmit={this.handleSubmit} className='rtl form-signin border rounded m-2 mt-5 mx-auto bg-light shadow'>
                    <div className="text-center">
                        <img src='https://www.cra.ir/Skin/Cra95/CraLogoCircle.png' className="img-fluid m-2" alt="" width="120" height="230"></img>
                    </div>

                    <h1 className='h3 mb-4 font-weight-normal text-center'>فرم ورود</h1>

                    <label htmlFor="inputEmail" className='sr-only'>
                        آدرس ایمیل
                    </label>

                    <input
                        type='email'
                        id='inputEmail'
                        className='form-control text-center'
                        placeholder='آدرس ایمیل'
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        required
                        autoFocus
                    />

                    <label htmlFor='inputPassword' className='sr-only'>
                        کلمه عبور
                    </label>

                    <input
                        type='password'
                        id='inputPassword'
                        className='form-control text-center'
                        placeholder='کلمه عبور'
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        required
                    />

                    <button
                        className='btn btn-lg btn-primary btn-block'
                        type='submit'
                    >
                        ورود
                    </button>
                    <ToastContainer />
                    <div className='copyright text-center'>
                        <span className='fa fa-copyright m-1' />
                        <span className='copyright-text'>اداره کل تنظیم مقررات و ارتباطات رادیویی منطقه آذر</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;