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

    // const handleChange = (e) => {
    //     setAuthor({ ...author, [e.target.name]: e.target.value })
    // }

    const onRegister = async (e) => {
        e.preventDefault()
        let authorData = { ...author }
        await fetch('http://localhost:4000/register', {
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
    }


    return (
        //not working
        <div>
            <h1>Hello <span style={{ color: 'red' }}>{author.firstName}</span>
                <span style={{ color: 'green' }}>{author.lastName}</span></h1>
            <form onSubmit={onRegister}>
                <div>

                    <div>
                        <input type='radio' name="title" id='Mr' onChange={(e) => setAuthor({ Mr: e.target.value })} />
                        <label htmlFor="Mr" >Mr.</label>

                        <input type='radio' name="title" id='Mrs' onChange={(e) => setAuthor({ Mrs: e.target.value })} />
                        <label htmlFor="Mrs" >Mrs.</label>

                        <input type='radio' name="title" id='Miss' onChange={(e) => setAuthor({ Miss: e.target.value })} />
                        <label htmlFor="Miss" >Miss</label>

                    </div>

                    <div >
                        <label htmlFor="fname" >First Name  :  </label>
                        <input type='text' name="firstName" placeholder='Enter Your First Name' id='fname' onChange={(e) => setAuthor({ firstName: e.target.value })} />
                    </div>


                    <div>
                        <label htmlFor="lname" >Last Name  :  </label>
                        <input type='text' name="lastName" placeholder="Enter Your Last Name" id='lname' onChange={(e) => setAuthor({ lastName: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="email" >Email   :  </label>
                        <input type='text' name="email" placeholder='Enter Your Email Address' id='email' onChange={(e) => setAuthor({ email: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="password" >Password  :  </label>
                        <input type='text' name="password" id='password' placeholder='Enter Your Password' onChange={(e) => setAuthor({ password: e.target.value })} />
                    </div>

                    <div>
                        <input type="submit" value="submit"></input>
                    </div>
                </div>

            </form>

        </div>


        // <div className="App">
        //     <form onSubmit={onRegister}>
        //         <input type="text" name='title' placeholder='Enter title' onChange={handleChange}></input>
        //         <input type="text" name='firstName' placeholder='Enter First Name' onChange={handleChange}></input>
        //         <input type="text" name='lastName' placeholder='Enter Last Name' onChange={handleChange}></input>
        //         <input type="text" name='email' placeholder='Enter Email address' onChange={handleChange}></input>
        //         <input type="text" name='password' placeholder='Enter Password' onChange={handleChange}></input>


        //         <button>Register</button>
        //     </form>
        // </div>


        //not working
        //        <div className="form">
        //       <div className="form-body">


        //       <div className="title">
        //               <label className="form__label" for="title">title </label>
        //               <input className="form__input" type="enum" id="title" placeholder="title" onChange={handleChange}/>
        //           </div>

        //           <div className="username">
        //               <label className="form__label" for="firstName">First Name </label>
        //               <input className="form__input" type="text" id="firstName" placeholder="First Name" onChange={handleChange}/>
        //           </div>
        //           <div className="lastname">
        //               <label className="form__label" for="lastName">Last Name </label>
        //               <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" onChange={handleChange}/>
        //           </div>
        //           <div className="email">
        //               <label className="form__label" for="email">Email </label>
        //               <input  type="email" id="email" className="form__input" placeholder="Email" onChange={handleChange}/>
        //           </div>
        //           <div className="password">
        //               <label className="form__label" for="password">Password </label>
        //               <input className="form__input" type="password"  id="password" placeholder="Password" onChange={handleChange}/>
        //           </div>

        //       </div>
        //       <div class="footer">
        //           <button type="submit" class="btn" onClick={onRegister}>Register</button>
        //       </div>
        //   </div>      

    )
}

export default CreateAuthor