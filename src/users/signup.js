import React from "react";
import './signup.css';

const emailregex = RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)

const formValid = formerror =>{
    let valid = true;
    Object.values(formerror).forEach(val =>{val.length > 0 && (valid = false)
    });
    return valid;
};

class signup extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            formerror:{
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            }
        };
    }
    handleSubmit = e =>{
        e.preventDefault();
        if(formValid(this.state.formerror)){
            console.log(`
            First Name: ${this.state.firstname}
            Last Name: ${this.state.lastname}
            Email: ${this.state.email}
            Password: ${this.state.password}
            `)
            }else{
                console.error('lỗi')
            }
        };
    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formerror = this.state.formerror;
        switch(name){
            case "firstname":
            formerror.firstname=
            value.length < 3 && value.length > 0 ? 'Tối thiểu 3 kí tự' : 
            "";
            break;

            case "lastname":
            formerror.lastname=
            value.length < 3 && value.length > 0 ? 'Tối thiểu 3 kí tự' : 
            "";
            break;
            case'email':
            formerror.email=
            value.length < 3 && value.length > 0 ? 'Tối thiểu 3 kí tự' : 
            "";
            break;
            case'password':
            formerror.password=
            value.length < 6 && value.length > 0 ? 'Tối thiểu 6 kí tự' : 
            "";
            break;
        default:
            break;
        }
        
    };
    
    render(){
        return(
            <div className='signup'>
                <div className='form-signup'>
                    <h1>Tạo Tài khoản</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className='firstname'>
                        <lable htmlFor="firstname">First Name</lable>
                        <input type='text' className="" placeholder="Firstname" name="firstname" onChange={this.handleChange} noValidate />
                        </div>
                        <div className='lastname'>
                        <lable htmlFor="lastname">Last Name</lable>
                        <input type='text' className="" placeholder="lastname" name='lastname' onChange={this.handleChange} noValidate />
                        </div>
                        <div className='email'>
                        <lable htmlFor="">Email</lable>
                        <input type='email' className="" placeholder="Email" name='email' onChange={this.handleChange} noValidate />
                        </div>
                        <div className='password'>
                        <lable htmlFor="password">Password</lable>
                        <input type='password' className="" placeholder="Firstname" name='password' onChange={this.handleChange} noValidate />
                        </div>
                        <div className="create">
                            <button type='submit'>TẠO TÀI KHOẢN</button>
                            <small>Bạn đã có tài khoản?</small>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default signup;