import React from "react";
import Card from './Card';
import './ContactCard.css'
import {Members} from "./Members";


const ContainCard = () =>{
    return(
        <div className="mainBody page">
            {Members.map((member)=>{
              return(
                  <Card name={member.name} post = {member.post} branch = {member.branch} year = {member.year} photo = {member.photo} gif = {member.gif}/>
              )
          })}
        </div>
    )
}

export default ContainCard;