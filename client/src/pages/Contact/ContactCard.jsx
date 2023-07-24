import React from "react";
import Card from './Card';
import './ContainCard.css'


const ContainCard = (props) =>{
    return(
        <div className="mainBody">
            {props.people.map((e)=>{
              return(
                  <Card name={e.name} post = {e.post} branch = {e.branch} year = {e.year} photo = {e.photo}/>
              )
          })}
        </div>
    )
}

export default ContainCard;