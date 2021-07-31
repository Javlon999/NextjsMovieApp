import Style from '../styles/Home.module.css';
export default function Actors({actors}) {

    return (
        <div>
        <div className={Style.actors}><p>Actors</p></div>
        <div className={Style.actorsName}>
        
          {actors ? actors.map((items)=>{
            return (
              <p key={items.id}><img src={items.photo_url} alt={""} width="100px" height="100px"/><br/>{items.name} </p>
            )
          }):'no actors'}
        </div> 
        </div>
    )

}