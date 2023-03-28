import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type="text" placeholder="Input login"/>
                <MyInput type="password" placeholder="Input password"/>
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;
