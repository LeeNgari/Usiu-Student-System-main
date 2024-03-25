import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function ClubInfo(){
        const context = useOutletContext();
        const lists = context['members']  
        
    return(
        <div className="club-info">
            
            <div className="abt">
                {context.about}
            </div>
            <div className="members">
                <h4><u>Members</u></h4>
                <ul>
                   <li>Lee</li>
                   <li>Baraka</li>
                </ul>
            </div>
            <button className="join">Join</button>
            
        </div>
    )
}