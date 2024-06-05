import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Axios_Get = () =>{
    const[data,setdata] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/Product')
        .then((response) =>{
            console.log(response);
            setdata(response.data)
        })
    }, [])

    return(
        <div>
            <h1>this is Axios Get</h1>
            <div>
                {
                    data.map((item) =>{
                        return(
                            <>
                            <div>
                                {item.title}
                                <img src={item.image} alt="" />
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Axios_Get