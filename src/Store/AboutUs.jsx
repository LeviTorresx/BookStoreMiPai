import React, { useState } from 'react'
import SideBar from '../Navigation/SideBar'
import { getUserData } from "../utils/GetUser"
import Footer from '../Navigation/Footer';


export default function AboutUs() {
    const [userData, setUserData] = useState(getUserData());
  return (
    <div className='bg-login'>
        <div className='d-flex justify-content-between align-items-center'>
            

        </div>

        <div className="flex z-2 position-fixed">
            <SideBar administratorAccess={userData ? userData.userType : null}/>
        </div>
    </div>
  )
}
