import React from 'react';



const Card = ({id, name, email}) =>{
    
    /*

    ou 
    Card = (props) => { <h2>{props.name}</h2> } 

    ou 
    
    const {id,name, email}= props; {<h2>{name}</h2>}

    */


    return (
        
        <div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ='robots' src={`https://robohash.org/${id}/set_set1/?size=200x200`}/>
                <div>
                <h2>{name}</h2> {}

                    <p>{email}</p>
                </div>
        </div>
    );
}

export default Card;