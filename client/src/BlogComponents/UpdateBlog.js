import { useState } from "react";
import { useParams } from "react-router-dom";


const UpdateBlog = () => {
    const params = useParams()
    const [detail, setDetail] = useState({
        title: "",
        body: "",
        tags: "",
        subcategory: "",
        category: ""
    })

    const handleChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    const onUpdate = async (e) => {
        e.preventDefault()

        const blogDetail = { ...detail }
        console.log(params)
        await fetch(`http://localhost:4000/updateBlog/${params.blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogDetail)
        }).then(res => {

            if (!res.ok) {
                const message = `An error has occurred: ${res.statusText}`;
                window.alert(message);
                return;
            } else {
                window.alert('blog updated successfully')
            }


        }).catch(err => console.log(err))


    }

    return (
        <div style={{ marginLeft: "40%" }}>
            <div>
                <div>

                    <div>
                        <div>


                            <form onSubmit={onUpdate}> <br /><br /><br />

                                <input type='text' name="title" placeholder="Enter title of blog" onChange={handleChange} />
                                <br /><br /><br />

                                <input type='text' name="body" placeholder="Enter description of blog" onChange={handleChange} />
                                <br /><br /><br />

                                <input type='text' name="tags" placeholder="Enter tags of blog" onChange={handleChange} />

                                <br /><br /><br />
                                <input type='text' name="category" placeholder="Enter category of blog" onChange={handleChange} />

                                <br /><br /><br />
                                <input type='text' name="subcategory" placeholder="Enter subcategory of blog" onChange={handleChange} />

                                <br /><br /><br />
                                <input type='submit' value='Update' style={{ marginLeft: "55px" }} />


                            </form>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default UpdateBlog;