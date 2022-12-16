import {useEffect,useState} from 'react'

const GetBlogsByQuery = () => {
    const [blogData , setBlogData] =useState([])

    useEffect(()=>{

        async function BlogQuery (){


            let resData = await fetch(`http://localhost:4000//getBlogs`,{
                method :"GET",
                headers :{
                    "Content-Type":"application/json"
                }
            })

            if(!resData.ok){
                window.alert(`An error occured :${resData.msg} `)

                return ;
            }
            resData = await resData.json()

            setBlogData(blogData)

        }

        BlogQuery();
        return;
    },[blogData.length])
  return (
    <div>GetBlogsByQuery</div>
  )
}

export default GetBlogsByQuery