import './poetcard.css'
export default function Poetcard(props)
{
    return(
        <>
           <div className="cardstruct">
            <div className="name">
              {props.name}
            </div>
            <div className="author-books">
                <div className="book">
                 <a href="#">{props.book1}</a>   
                </div>
                <div className="book">
                <a href="#">{props.book2}</a> 
                </div>
                <div className="book">
                <a href="#">{props.book3}</a> 
                </div>
                <div className="book">
                <a href="#">{props.book4}</a> 
                </div>
            </div>
           </div>
        </>
    )
}