
import { useSearchParams } from 'react-router-dom'
//need some fixes
const DeleteQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams()
   

    const handleChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value })
    }
  
    const handleFind = async (e) => {
        e.preventDefault()
  
        await fetch(`http://localhost:4000/deleteQuery?${ searchParams.get('title').toString()}`).then(res => res.json()).then(res => console.log(res)).catch(err => console.log("catch errors:  ", err))
    }

    return (
        <div >

            <form onSubmit={handleFind} >
               
                <input type='text' name="title" style={{ width: "300px", hight: "100px", borderRadius: "10px", marginLeft: "37%", marginTop: "10%" }} onChange={handleChange} />
                {/* <span>{console.log("span data  " + Object.values(searchParams))}</span> */}

                <input type='submit' style={{marginLeft:"55px",borderRadius: "5px"}} value='submit'/>


            </form>
            {/* <ol>{ delQ && [delQ].filter(item=>(<li><h2>{item.title}</h2></li>))} </ol> */}
        </div>
    )
}

export default DeleteQuery;