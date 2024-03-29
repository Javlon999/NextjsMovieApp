import Head from 'next/head'

import React, { useState, useEffect  } from "react"

import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import Loading from './Loading';
import Style from '../styles/Home.module.css';
import Aboutmovie from '../pages/aboutmovie/[id]';
export default function Allmovies({data,loading}) {

  const [users, setUsers] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (data) {
      if (data.error) {
        // Handle error
      } else {
        // Set users from data
        setUsers(data)
      }
    }
  }, [data])

  const handlePagination = page => {
    const path = router.pathname
    const query = router.query
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query: query || 1,
    })
  }

  console.log(users);

  return (
   
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <div >
        {loading && users ? <div>
          <div  className={Style.movies}>
            
        { users.map((items)=>{
          return (
            
            <div className={Style.card} key={items.id}>
              <div className={Style.grid}>
               <div className={Style.img}> <img src={items.files.poster_url} alt={''} width="100%" height="100%" /></div>
             
              <div className={Style.movieQuality}>
              <p className={Style.new}>{items.params.is_new ? 'NEW':''}</p>
              <p className={Style.hd}>{items.params.is_hd ? 'FULLHD':''}</p>
              </div>
          <button className={Style.button} type="button" onClick={() => router.push(`/aboutmovie/${items.id}`)}>
      Click me
    </button>
              </div>
              </div>
          )
        }) }
        </div>

        <div className={Style.pagination}>   
        <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        initialPage={data.curPage - 1}
        pageCount={data.maxPage}
        onPageChange={handlePagination}
      /></div>
     
            </div>:<Loading/>}

    </div>
       <div>
       
       </div>
     
    </div>
 
  );
  }

