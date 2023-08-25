import React, { useState } from "react";
import './addMemberCSS.css';
import { Button } from "@mui/material";

const AddMember = () => {

    const [Name, SetName] = useState('');
    const [Branch, SetBranch] = useState('');
    const [Year, SetYear] = useState('');
    
    const ShowChange = () => {
        console.log("Name",Name);
        console.log("Branch",Branch);
        console.log("Year",Year);
    }

    return (
        <div style={{backgroundColor : '#FF907C'}}>
        <hr color="black" />
        <h1 > Enter Your Details</h1>
        <div className="Member_Wrapper">
            <div className="addImage">
                <input placeholder="Enter Your Name" className="InputBox" onChange={(e) =>{SetName(e.target.value)}}/>
                
                <input placeholder="Enter your Email Id" className="InputBox"type="email" />
                <div className="BranchSelection" onChange={(e) =>{
                    SetYear(e.target.value)
                }}>
                    <div>
                        <h1>Select Your Year</h1>
                    </div>
                    <div>
                        <input type="radio" value="Final Year"
                            name="year" id="Final Year" />
                        <label for="Final Year">Final Year</label>
                    </div>

                    <div>

                        <input type="radio" value="Third Year"
                            name="year" id="Third Year" />
                        <label for="Third Year">Third Year</label>
                    </div>

                    <div>

                        <input type="radio" value="Second Year"
                            name="year" id="Second Year" />
                        <label for="Second Year">Second Year</label>
                    </div>
                </div>

                <div className="BranchSelection" onChange={(e)=>{SetBranch(e.target.value)}}>
                    <h1>Select Your Branch</h1>
                    <div>
                        <input type="radio" value="Civil Enginnering"
                            name="Branch" id="CE" />
                        <label for="CE">Civil Engineering</label>
                    </div>

                    <div>
                        <input type="radio" value="Computer Engineering"
                            name="Branch" id="CSE" />
                        <label for="CSE">Computer Engineering</label>
                    </div>

                    <div>

                        <input type="radio" value="Electrical Engineering"
                            name="Branch" id="EE" />
                        <label for="EE">Electrical Engineering</label>
                    </div>

                    <div>

                        <input type="radio" value="Electronics & Comm Engineering"
                            name="Branch" id="ECE" />
                        <label for="ECE">Electronics and Comm. Engineering</label>
                    </div>

                    <div>

                        <input type="radio" value="Information Technology"
                            name="Branch" id="IT" />
                        <label for="IT">Information Technology</label>
                    </div>

                    <div>
                        <input type="radio" value="Mechanical Engineering"
                            name="Branch" id="ME" />
                        <label for="ME">Mechanical Engineering</label>
                    </div>

                    <div>

                        <input type="radio" value="Production And Industrial Engineering"
                            name="Branch" id="PIE" />
                        <label for="PIE">Production And Industrial Engineering</label>
                    </div>
                </div>
                <input placeholder="Enter your Instagram Id" className="InputBox" />



                <input placeholder="Enter your Github Id" className="InputBox" />



                <input placeholder="Enter your linkedIn Id" className="InputBox" />


                <Button
                        fullWidth
                        color='primary'
                        variant={"contained"}
                        onClick={ShowChange}
                        >Submit</Button>
            </div>
        </div>
        </div>
    )

}

export default AddMember;