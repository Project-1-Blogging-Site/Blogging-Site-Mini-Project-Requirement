import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

// this API deletes the blog on click
const DeleteBlog =()=>{

    const [data , setData] = useState([]);

    const params =useParams();

    useEffect(()=>{

        fetch(`http://localhost:4000/deleteBlog/${params.blogId}`,{
            method:"PUT"
        }).then((res)=>res.json())
        // .then(res=> {
        //     if(!res.status){
        //         window.alert(`Message: ${res.message}`)
        //     }
        // return;
        // })
        .then((data)=>setData(data))
        .catch(err=>console.log(err))
    },[params])
console.log(data)
    return(
        <div>
{/* <ul>{ data && data.map(item=>(<li key={data._id}>{item.title}</li>))}</ul> */}


{(!data.status) ? (<h2 style={{marginLeft:"30%" , marginTop:"20%", color:"red"}}>{  data.message}</h2>) : <h2 style={{marginLeft:"40%" , marginTop:"20%", color:"green"}}>Blog deleted successfully</h2>} 

{}

{/* {
    (()=>{
        if (!data.status) {

            return ( <h2 style={{marginLeft:"40%" , marginTop:"20%", color:"red"}}>{ !data.status && data.message}</h2> )
       
        } else {
            return ( <h2 style={{marginLeft:"40%" , marginTop:"20%", color:"green"}}>{data.data && data.data.body} : deleted successfully</h2>  )
        }
    })
} */}



        </div>
    )

}

export default DeleteBlog