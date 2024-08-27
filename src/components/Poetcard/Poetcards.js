import Poetcard from "./Poetcard"
export default function Poetcards()
{
    return(
        <>
          <div className="section">
            <div className="cards">
                <div className="c1">
                <Poetcard name={"William Wordsworth"} book1={"I Wandered Lonely as a Cloud"} book2={"Tintern Abbey"} book3={"The Solitary Reaper"} book4={"Lines Written in Early Spring"}/>
                <Poetcard name={"Maya Angelou"} book1={"Still I Rise"} book2={"Phenomenal Woman"} book3={"On the Pulse of Morning"} book4={"The Heart of a Woman"}/>
                </div>
                <div className="c2">
                <Poetcard name={"Robert Frost"} book1={"The Road Not Taken"} book2={"Mending Wall"} book3={"Fire and Ice"} book4={"Nothing Gold Can Stay"}/>
                
                <Poetcard name={"Emily Dickinson"} book1={"Because I Could Not Stop for Death"} book2={"Hope is the Thing with Feathers"} book3={"I'm Nobody! Who Are You?"} book4={"A Bird Came Down the Walk"}/>
                </div>
            </div>
          </div>
        
        </>
    )
}