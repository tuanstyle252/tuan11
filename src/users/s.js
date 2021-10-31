import React from "react";
import './signup.css'
// import logo from "./dog.png";
class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            error:"",
        };
    }
    handleChange = name => event =>{
        this.setState({error:""});
        this.setState({[name]: event.target.value});
    };
    clickSubmit = event =>{
        event.preventDefault()
        const {name,email,password} = this.state;
        const user = {
            name,
            email,
            password
        };
        // console.log(user);
        this.Signup(user).then(data=>{
            if(data.error) this.setState({error: data.error });
            else
                this.setState({
                    error:"",
                    name:"",
                    email:"",
                    password:""
                });
        });
    };
    // signup =(user)=>{
    //     fetch("https://localhost:3000/signup",{
    //         method:"POST",
    //         headers: {
    //             Accept:"application/json",
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(Response=> {
    //         return Response.json()
    //     })
    //     .catch(err => console.log(err))
    // };
         
    render(){
        const {name, email, password} = this.state;
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Đăng kí vào trang web</h2>
               {/* <img src={logo} className='app-logo' alt='logo'/> */}

                <form>
                    <div><image src='logo'></image></div>
                    <div className="form-group">
                        <lable className="text-muted">Name</lable>
                        <input onChange={this.handleChange("name")} type='text' value={name} className='form-control' placeholder=""/> 
                    </div>  
                    <div className="form-group">
                        <lable className="text-muted">Email:</lable>
                        <input onChange={this.handleChange("email")} type='email'  className='form-control' value={email}  placeholder='EMAIL'/ > 
                    </div>
                    <div className="form-group">
                        <lable className="text-muted">Password</lable>
                        <input onChange={this.handleChange("password")} type='password' className='form-control' value={password} placeholder='Mật Khẩu'/> 
                    </div>
                    <button onClick={this.clickSubmit} className="btn btn-raise btn-primary">Đăng Kí</button>
                </form>
            </div>
        );
    }
}

export default Signup;