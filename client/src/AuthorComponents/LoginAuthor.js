import React, { useState } from 'react';
import '../App.css'
// This API working Fine


const LoginAuthor = () => {

    const [author, setAuthor] = useState({

        email: '',
        password: ''

    })



    const handleChange = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    const onLogin = async (e) => {
        e.preventDefault()
        let authorData = { ...author }
        await fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(authorData)

        }).then(res => res.json()

        ).catch(err => {
            console.log(err)
            window.alert(err)
        })
        window.alert("logged in Successfully")
    }  

    return (<div>

        <div className="App">
            <form onSubmit={onLogin}>

                <input type="text" name='email' placeholder='Enter Email address' onChange={handleChange}></input>
                <input type="text" name='password' placeholder='Enter Password' onChange={handleChange}></input>


                <button>login</button>
            </form>
        </div>

    </div>)
}

export default LoginAuthor