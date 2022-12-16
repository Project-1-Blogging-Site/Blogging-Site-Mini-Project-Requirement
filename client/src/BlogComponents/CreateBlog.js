import React, { useState } from "react";

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        authorId: '',
        tags: '',
        category: '',
        subcategory: '',
        published: '',
        publishedAt: ''
    })

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

    const onCreatBlog = async (e) => {
        e.preventDefault()


        const blogData = { ...blog }

        await fetch("http://localhost:4000/createBlog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogData)
        }).then((res) => 
            res.data
                // console.log(res.data)
        ).catch((err) => {
            console.log(err)
                // window.alert(err)
        })

    }
    return (

        <div style={{"marginLeft":"40%"}}>
            <div>

                <div>
                    <div>
                        <div >

<form onSubmit={onCreatBlog}>
<br/><br/><br/>


    <input type='text' name="title" placeholder="Enter title of blog" onChange={handleChange}/> <br/><br/><br/>

    <input type='text' name="body" placeholder="Enter description of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='text' name="authorId" placeholder="Enter authorId of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='text' name="tags" placeholder="Enter tags of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='text' name="category" placeholder="Enter category of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='text' name="subcategory" placeholder="Enter subcategory of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='text' name="published" placeholder="Enter false in small letter if your blog in not published" onChange={handleChange}/><br/><br/><br/>

    <input type='date' name="publishedAt" placeholder="Enter publishedAt of blog" onChange={handleChange}/><br/><br/><br/>

    <input type='submit' style={{"marginLeft":"55px"}} value='submit'/>



</form>



                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default CreateBlog