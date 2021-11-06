import React from 'react'
import Signin from '../components/Signin'
import Image from '../images/photo-1515541324332-7dd0c37426e0.jpg'

function Login() {
    

    return (
        <div className="md:container mx-auto flex justify-center items-center">
            <img className="w-2/4 rounded-sm py-5 px-4" src={Image} />
            <Signin />
        </div>
    )
}

export default Login
