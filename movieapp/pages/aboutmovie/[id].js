import axios from 'axios'
import Link from 'next/link'
import React from "react"

import {config,headers} from '../api/hello' ;
import MovieDetails from '../../components/MovieDetails';
import Img from '../../components/Img';
import Actors from '../../components/Actors';
import Style from '../../styles/Home.module.css';

import { useRouter } from 'next/router'

export default function Aboutmovie({data}) {



  const router = useRouter()
  const { pid } = router.query
  console.log('pid',pid )
   const snapshots=data.files.snapshots
   const actors=data.actors


    return (
      <div className={Style.singleMovie}>
      <div className={Style.mainPage}> 
      <Link href={'/'}><p>Main </p></Link></div>
      <MovieDetails data={data}/>
        <Img snapshots={snapshots}/>
        <Actors actors={actors}/>
      </div>
    )
  }

 export async function getStaticPaths({}) {
   

    const res = await axios.get(`${config.API_ROOT}/list?user=${config.API_KEY}`,{headers})
    const results = res.data.data.movies
  
    const paths = results.map((user) => ({
      
        params: {id: user.id.toString()},
    }))
    
  
    return { paths, fallback: false }
  }


  export async function getStaticProps({params}) {
   
    const res = await axios.get(`${config.API_ROOT}/show/${params.id}?user=${config.API_KEY}`,{
      headers,
    })
    const result = res.data.data;
    let loading= result ? true:false; 
    console.log('res ', result);
  
    if (!result) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data:result.movie,loading:loading }, // will be passed to the page component as props
    }
  }
  
  
  