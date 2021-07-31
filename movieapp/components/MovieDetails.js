import Style from '../styles/Home.module.css';
export default function MovieDetails({data}) {
 const genres=data.genres_str 
    return (
        <div className={Style.description}>
            <div className={Style.moviePhoto}>
          <img src={data.files.poster_url} alt={''} width="350px" height="350px" />
          </div>
          <div className={Style.movieDetails}>
     
          <h4>{data.title}</h4>
          <h6>{data.description}</h6>
          <h5>{data.year}</h5>
          <h6>{data.name}</h6>
          <h6>{genres}</h6>
          </div>
          </div>
    )
  }
  
  
  