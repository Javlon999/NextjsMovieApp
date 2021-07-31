import Style from '../styles/Home.module.css';

export default function Img({snapshots}) {
 
    return (
        <div className={Style.snapshots}>  {snapshots ? snapshots.map((items)=>{
           
            return (
              <p key={items.id}><img src={items.snapshot_url} alt={""} width="150px" height="150px"/></p>
            )
          }):'no snapshots'}</div>
    )

}