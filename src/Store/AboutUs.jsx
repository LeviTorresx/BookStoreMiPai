import React, { useState } from 'react'
import SideBar from '../Navigation/SideBar'
import { getUserData } from "../utils/GetUser"
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
    const [userData, setUserData] = useState(getUserData());
    let navigate = useNavigate();

    const handleReturn = () => {
        navigate("/");
    };

    return (
        <div className='bg-login'>
            <div className="flex z-2 position-fixed">
                <SideBar administratorAccess={userData ? userData.userType : null} />
            </div>

            <div className='center-screen'>
                <div className='bg-container rounded-3' style={{ padding: "100px", paddingTop: "30px", paddingBottom: "30px" }}>
                    <div className='py-4'>
                        <h1 className='text-center'>Mipai Bookstore</h1>
                        <h4 className='text-center'>Equipo de desarrollo</h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <div>
                                <img src="./fotoLevi.jpg" className="img-team rounded-circle" alt="Logo" />
                            </div>
                            <div className='text-center d-flex justify-content-center py-2'>
                                <h5 className='text-black' style={{ width: "150px" }}>Levis Javier Aguiar Torres</h5>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src="./fotoDavidson.jpg" className="img-team rounded-circle" alt="Logo" />
                            </div>
                            <div className='text-center d-flex justify-content-center py-2'>
                                <h5 className='text-black' style={{ width: "150px" }}>Davidson Arley Pérez Jiménez</h5>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src="./fotoJimmy.jpg" className="img-team rounded-circle" alt="Logo" />
                            </div>
                            <div className='text-center d-flex justify-content-center py-2'>
                                <h5 className='text-black' style={{ width: "150px" }}>Jimmy White Gómez Ramos</h5>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src="./fotoJunior.jpg " className="img-team rounded-circle" alt="Logo" />
                            </div>
                            <div className='text-center d-flex justify-content-center py-2'>
                                <h5 className='text-black' style={{ width: "150px" }}>Osvairo Junior Moreno Correa</h5>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center py-2">
                        <button className="button" onClick={handleReturn}>
                            Regresar a la tienda
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
