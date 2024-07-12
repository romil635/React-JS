import React from 'react'
import Navbar from '../Componets/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'

export function Home1() {


  const [data, setData] = useState([])

  const [searchTerm, setsearchTerm] = useState('')
  const [currentpage, setcurrentpage] = useState(1)
  const [perpage, setperpage] = useState(2)


  const filterData = data.filter(user => user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchTerm.toLowerCase())
  )


  const totalpages = Math.ceil(data.length / perpage)


  const indexofLastData = currentpage * perpage
  const indecofFristData = indexofLastData - perpage
  const currentData = filterData.slice(indecofFristData,indexofLastData)

  const peginate = (pagenumber) => {
    setcurrentpage(pagenumber)
  }

  const nextpage = () => {
    setperpage((prevpage) => prevpage + 1)
  }

  const prevpage = () => { 
    setcurrentpage((prevpage) => prevpage - 1)
  }

  

  const loaduser = async () => {
    const res = await axios.get('http://localhost:3000/User')
    console.log(res.data, "users");
    setData(res.data)
  }
  useEffect(() => {
    loaduser()
  }, [])

  


  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/User/${id}`)
      .then((response) => {
        loaduser()
      })
      .catch((error) => {
        console.log(error, 'error user data');  
      })
  }

  return (
    <div>
      <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">UserList</h2>
          </div>
          <div className="flex w-full max-w-md items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              placeholder="search..."
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <FaSearch />
            </button>
          </div>
          <div>
            <Link to='/add'>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add User
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col m-14">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Username</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        LastName
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th></th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Profession
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                        &nbsp;
                      </th>
                    </tr>
                  </thead>
                  {currentData.map((value) => {
                    return (
                      <tbody className="divide-y divide-gray-200 bg-white" key={value.id}>
                        <tr>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                {
                                  value.image !== null ?
                                    <img
                                      className="h-10 w-10 rounded-full object-cover"
                                      src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                      alt=""
                                    /> :
                                    <p className=' rounded-full bg-black px-3 py-2 text-sm font-semibold text-white'>{value.firstname.charAt(0)}</p>
                                }
                              </div>
                              <div className="ml-4">
                                <div className="text-sm  text-gray-900">
                                  {value.firstname}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm font-medium text-gray-900 ">
                              {value.lastname}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            {value.age}
                          </td>
                          <td></td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="text-sm">
                              {value.number}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            <span className="text-sm">{value.profession}</span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <Link to={`/EditUser/${value.id}`}><button><a href="#" className="bg-gray-300 px-[20px] py-[8px] me-[10px]  rounded-lg hover:bg-black hover:text-white">
                              Edit
                            </a></button>
                            </Link>
                            <button onClick={() => onDelete(value.id)} className="ml-4 bg-gray-300 px-[20px] py-[8px] me-[10px]  rounded-lg hover:bg-black hover:text-white">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
          {
            currentData.length == 0 ? null :(
          <div className="flex items-center justify-center pt-6">
            <Link className='mx-2 text-sm font-semibold text-gray-900'>
              <button onClick={prevpage} disabled={currentpage === 1}>
                <span>&larr;</span>
                <span>previous</span>
              </button>
            </Link>
            {
              Array.from({ length: totalpages }, (_, i) => (
                <NavLink className={`mx-1 flex justify-center items-center rounded-md border-gray-400 px-3 py-2 text-gray-300 hover:bg-black hover:text-white`} style={{
                  backgroundColor: currentpage == i + 1 ? 'black' : 'transparent', color: currentpage == i + 1 ? 'white' : 'inherit'
                }}>
                  <button key={i} onClick={() => peginate(i + 1)}>{i + 1}</button>
                </NavLink>
              ))
            }
            <Link className='mx-2 text-sm font-semibold text-gray-900'>
              <span>Next </span>
              <span>&rarr;</span>
            </Link>
          </div>
            )
          }
        </div>
      </section>
    </div>
  )  
}
