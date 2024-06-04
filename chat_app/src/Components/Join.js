import React, { useEffect, useState } from "react";


const Join = function () {

    return (
        <>

            <div className=" min-vh-100 d-flex flex-column justify-content-center align-items-center bg-warning">
                <div className="bg-white m-2 p-4">
                    <h1 className="text-center m-2">Join</h1>
                    <form>
                        <input className="form-control m-2" placeholder="Name" aria-label="Search" />
                        <input className="form-control m-2" placeholder="Code" aria-label="Search" />
                        <div className="text-center">
                            <button type="button" className="btn btn-outline-danger">SignIn</button>
                        </div>
                    </form>


                </div>


            </div>
        </>
    )
}

export default Join