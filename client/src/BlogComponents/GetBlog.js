import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//final Get API , working Fine

const GetBlog = () => {

    const [blog, setBlog] = useState([])

    //setting up hoverIn and HoverOut for text display to delete the blog

    const [isHovering, setIsHovering] = useState(false)

    const mouseHoverIn = () => {
        setIsHovering(true)
    }

    const mouseHoverOut = () => {
        setIsHovering(false)
    }
    // This method fetches the records from the database.

    useEffect(() => {

        // created a function to fetch data from url
        async function getBlogData() {
            const fetchedData = await fetch("http://localhost:4000/")

            //handling errors
            if (!fetchedData.ok) {
                const message = `An error occured :${fetchedData.statusText}`
                // window.alert(message)
                console.log(message)
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
                    <tr style={{ "paddingLeft": "80px", "display": "flex", "WebkitJustifyContent": "space-between", "fontSize": "30px", "color": "darkgreen" }}>

                        <th >Name</th>
                        <th style={{ "paddingLeft": "260px" }}>Description</th>
                        <th style={{ "paddingLeft": "260px" }} >Category</th>
                        <th style={{ "paddingLeft": "100px" }} >Tags</th>
                    </tr>

                </thead>

                {!data && <h2 style={{ marginLeft: "35%", padding: "20%", color: "red" }}>No blog found</h2>}
           

                <tbody>
                    {/* this line working */}
                    <ol style={{ "color": "black" }}>{data && data.map((item, i) => (<div style={{ "marginLeft": "10px" }}>
                        <li style={{ "fontWeight": "bolder", "color": "green" }} key={item._id}>
                            <tr >

                                <Link onMouseOver={mouseHoverIn} onMouseOut={mouseHoverOut} to={`/deleteBlog/${item._id}`} > <td><h2>{item.title} </h2></td>

                                    {isHovering && <span style={{ color: "red" }}>Click to delete</span>} </Link>


                                <td style={{ "paddingLeft": "70px" }} ><h3>{item.body} </h3></td>

                                <td style={{ "paddingLeft": "370px" }}  > {item.category}   </td>

                                <td style={{ "paddingLeft": "150px" }} >{item.tags}</td>

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