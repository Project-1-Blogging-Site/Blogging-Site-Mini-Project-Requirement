import React, { useEffect, useState } from "react";

//final Get API , working Fine

const GetBlog = () => {

    const [blog, setBlog] = useState([])

    // This method fetches the records from the database.

    useEffect(() => {

        // created a function to fetch data from url
        async function getBlogData() {
            const fetchedData = await fetch("http://localhost:4000/")

            //handling errors
            if (!fetchedData.ok) {
                const message = `An error occured :${fetchedData.statusText}`
                window.alert(message)
                return;
            }

            // canverting fetchedData in json
            const blog = await fetchedData.json()
            // setting up blog data in setBlog
            setBlog(blog)

        }
        //calling getBlogData function
        getBlogData()

        return;
    }, [blog.length])
    const data = blog.data
    return (

        <div>

            <h3>Blog List</h3>

            <table >
                <thead >
                    <tr style={{"paddingLeft":"80px","display":"flex","WebkitJustifyContent":"space-between" , "fontSize":"30px" ,"color":"darkgreen"}}>

                        <th >Name</th>
                        <th style={{"paddingLeft":"260px"}}>Description</th>
                        <th style={{"paddingLeft":"260px"}} >Category</th>
                        <th style={{"paddingLeft":"100px"}} >Tags</th>
                    </tr>

                </thead>
                {console.log(data)}


                <tbody>
                    {/* this line working */}
                    <ol style={{"color":"black"}}>{data && data.map((item, i) => (<div  style={{"marginLeft" :"10px"}}>
                        <li style={{"fontWeight":"bolder","color":"green"}}>
                        <tr >

                        <td key={i}><h2>{item.title} </h2></td>
                        <td style={{"paddingLeft" :"70px"}} ><h3>{item.body} </h3></td>

                        <td  style={{"paddingLeft" :"370px"}}  > {item.category} </td>

                        <td style={{"paddingLeft" :"150px"}} >{item.tags}</td>
                    </tr>
                    </li>
                    </div>
                    ))}</ol>
                </tbody>
            </table>


        </div>
    )



}

export default GetBlog