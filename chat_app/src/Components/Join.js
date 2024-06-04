import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'



const Join = function () {
    const [Form, setForm] = useState({
        name: '',
        room: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...Form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        //e.preventDefault();

        console.log(Form);
    }
    return (
        <>

            <div className=" min-vh-100 d-flex justify-content-center align-items-center bg-warning ">
                <div className="m-10 p-2 d-flex flex-column bg-white rounded">

                    <h1 className="text-center">Join</h1>
                    <hr className="bg-dark"/>
                    <input className="m-2 p-2" placeholder="name" name="name" />
                    <input className="m-2 p-2" placeholder="room" name="room" />
                    <Link className="btn btn-outline-success m-2" type="submit">Search</Link>
                    



                </div>

            </div>
        </>
    )
}

export default Join