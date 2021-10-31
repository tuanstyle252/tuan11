import React from "react";
import './signin.css'
class signin extends React.Component{
    render(){
        return(
            <div className='signin'>
                <div className='form-signin'>
                    <h1>Đăng nhập</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className='email'>
                        <lable className="">Email</lable>
                        <input type='email' className="" placeholder="Email" onChange={this.handleChange} noValidate />
                        </div>
                        <div className='password'>
                        <lable className="password">Password</lable>
                        <input type='password' className="" placeholder="Firstname" onChange={this.handleChange} noValidate />
                        </div>
                        <div className="log">
                            <button type='submit'>Đăng nhập</button>
                            <small>Bạn chưa có tài khoản?</small>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default signin;