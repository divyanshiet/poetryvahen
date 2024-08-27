import './card.css'
export default function Card1(props)
{
    return(
        <>
           
           <div className="card">
            <div className="content">
                 <div className="book-name">
                    {props.name}
                 </div>
                 <div className="book-description">
                 {props.description}
                 </div>
                 <div className="read-btn">
                    <button><a href='#'>Read more!!</a></button>
                 </div>
            </div>
            <div className="image">
             <img src={props.image}></img>
            </div>
           </div>
        </>
    )
}