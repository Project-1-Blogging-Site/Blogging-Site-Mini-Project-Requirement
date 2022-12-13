import React, { useState } from "react";
import '../App.css'

const CreateAuthor = () => {

    const [author, setAuthor] = useState({

         title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    })

    // const { title, firstName, lastName, email, password } = author

    const handleChange = (e) => {
        setAuthor({...author,  [e.target.name]: e.target.value })
    }

    const onRegister = async (e) => {
        e.preventDefault()
       let authorData = {...author}
        await fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(authorData)

        }).then(res=>res.json()).catch(err=>console.log(err))
// console.log(fetchedData)
//         fetchedData = fetchedData.json()
//         window.alert(fetchedData)



    }


    return (

        // <div>

        //     <form onSubmit={onRegister}>


        //         <div>
        //             <input type='radio' name="title" value='Mr' id='Mr' onChange={handleChange} />
        //             <label htmlFor="Mr" >Mr.</label>

        //             <input type='radio' name="title" value='Mrs' id='Mrs' onChange={handleChange} />
        //             <label htmlFor="Mrs" >Mrs.</label>

        //             <input type='radio' name="title" value='Miss' id='Miss' onChange={handleChange} />
        //             <label htmlFor="Miss" >Miss</label>

        //         </div>

        //         <div >
        //             <label htmlFor="fname" >First Name  :  </label>
        //             <input type='text' name="firstName" value='firstName' placeholder='Enter Your First Name' id='fname' onChange={handleChange} />
        //         </div>


        //         <div>
        //             <label htmlFor="lname" >Last Name  :  </label>
        //             <input type='text' name="lastName" value='lastName' placeholder="Enter Your Last Name" id='lname' onChange={handleChange} />
        //         </div>

        //         <div>
        //             <label htmlFor="email" >Email   :  </label>
        //             <input type='text' name="email" value='email' placeholder='Enter Your Email Address' id='email' onChange={handleChange} />
        //         </div>

        //         <div>
        //             <label htmlFor="password" >Password  :  </label>
        //             <input type='text' name="password" value='password' id='password' placeholder='Enter Your Password' onChange={handleChange} />
        //         </div>

        //         <div>
        //             <input type="submit" value="submit">Register</input>
        //         </div>


        //     </form>

        // </div>


        <>
        <form onSubmit={onRegister}>
          <input type="text" name='title' placeholder='Enter title' onChange={handleChange}></input>
            <input type="text" name='firstName' placeholder='Enter First Name' onChange={handleChange}></input>
            <input type="text" name='lastName' placeholder='Enter Last Name' onChange={handleChange}></input>
            <input type="text" name='email' placeholder='Enter Email address' onChange={handleChange}></input>
            <input type="text" name='password' placeholder='Enter Password' onChange={handleChange}></input>


            <button>Register</button>
        </form>
    </>

    )
}

export default CreateAuthor