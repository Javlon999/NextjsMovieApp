import React from 'react'
import axios from 'axios';
import Allmovies from '../components/Allmovies';
import {config,headers} from './api/hello' ;

import Style from '../styles/Home.module.css';

    const HomePage = ({ results,loading}) => {

      return (

          
        <div className={Style.homePage}>
          <Allmovies data={results} loading={loading} />
    
        </div>

      )
    }

    

    export const getServerSideProps = async ({ query }) => {
      const page = query.page || 1
      let results = null
      let loading=false
      try {
        const res = await axios.get(`${config.API_ROOT}/list?page=${page}&user=${config.API_KEY}`,{headers})
       
        results = await res.data.data.movies;

        loading=results ? true:false
        results.map((user) => ({
          params: {id: user.id.toString()},
      })) 
      
      } catch (err) {
        results = { error: { message: err.message } }
      }
      // Pass data to the page via props
      return { props: { results,loading} }
    }

 
    export default HomePage