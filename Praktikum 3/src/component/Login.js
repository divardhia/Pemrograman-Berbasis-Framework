import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <h2>Form Login</h2>
            <div className="box">
                <h1>Tugas Pertemuan Ketiga</h1>

                <form action="">
                    <label className="label" htmlFor="">Username </label>
                    <input className="input-text" type="text" placeholder="Masukkan Username Anda" /><br></br>
                    <label className="label" htmlFor="">Password </label>
                    <input className="input-text" type="text" placeholder="Masukkan Password Anda" /><br></br>
                    <button className="login">Login</button>
                </form>

                <input className="checkbox" type="checkbox" name="remember" checked />
                <label htmlFor=""> Remember Me </label><br></br>
                <button className="cancel">Cancel</button>
            </div>
        </div>
    )
}
export default Login;