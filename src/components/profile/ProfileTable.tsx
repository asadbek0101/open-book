import React from "react";

import "./assets/profile.scss";



export default function ProfileTable(){
    return (
        <div className="profile-container">
            <div className="profile-header">
                    <div className="profile-img" style={{backgroundImage: `url(https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <div className="profile-info">
                        <ul>
                            <li><span>Full Name :</span> Asadbek Rejabboyev</li>
                            <li><span>Phone Number :</span> 99 690 69 01</li>
                            <li><span>Position :</span> O'qituvchi</li>
                            <li><span>Type :</span> <span>Active</span></li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}