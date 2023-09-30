// Members.jsx
import React from "react";
import Card from "./Card";
import "./Members.css";
import { membersData } from "./members-data";

const Members = () => {
  return (
    <div className="Members page" id="Members">
      <h1>Our Beloved Seniors</h1>
        <div className="members-container">
          {membersData
            .filter((member) => member.year === "Finals")
            .map((member) => {
              return (
                <Card
                  key={member.name} 
                  name={member.name}
                  post={member.post}
                  branch={member.branch}
                  year={member.year}
                  photo={member.photo? require(`../../assets/members/${member.photo}`):""}
                  gif={member.gif}
                  />
                  );
                })}
            {/* Duplicating same list for continuous effect */}
          {membersData
            .splice(0, 5)
            .filter((member) => member.year === "Finals")
            .map((member) => {
                return (
                    <Card
                    key={member.name} 
                    name={member.name}
                    post={member.post}
                    branch={member.branch}
                    year={member.year}
                    photo={member.photo? require(`../../assets/members/${member.photo}`):""}
                    gif={member.gif}
                />
              );
            })}
        </div>
    </div>
  );
};

export default Members;
