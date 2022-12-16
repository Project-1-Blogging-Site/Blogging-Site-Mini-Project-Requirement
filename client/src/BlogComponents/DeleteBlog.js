
// import { useState } from "react";
// import { useParams ,Link } from "react-router-dom";
import GetBlog from "./GetBlog";
//import { Link } from "react-router-dom";
//we'll have to fix it

const DeleteBlog = () => {
    //console.log(GetBlog)
return(
    <div>
        
        <GetBlog title ={GetBlog.map(data=>(<li>{data.title}</li>))}/>
    </div>
)



//     const params = useParams()
//     const [blog, setBlog] = useState([])
//     // const handleChange = (e) => {
//     //     setBlog({ ...blog, [e.target.name]: e.target.value })
//     // }

//     const handleDelete = async (e) => {
//         e.preventDefault()

//         const blogData = { ...blog }
// console.log(blogData)
//       const fetchedData =  await fetch(`http://localhost:4000/deleteBlog/${params.blogId}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(blogData)
//         }).then(res => setBlog(res.json())).then(res => console.log(res)).catch(err => console.log(err))
//         console.log(fetchedData)
       
//     }

//     return (
//         <div>
// <ol>{[blog].map((item, i)=>(<div key={i}><li key={item._id} ><Link  onClick={handleDelete}>{item.title}</Link></li></div>))}</ol>
//         </div>
//     )
}

export default DeleteBlog;