import React from "react";

const Join = function () {

    return (
        <>

            <div className=" min-vh-100 d-flex flex-column justify-content-center align-items-center bg-warning">
                <h1 className="text-center m-2">Join</h1>
                <form role="search">
                    <input class="form-control m-2" type="search" placeholder="Name" aria-label="Search" />
                    <input class="form-control m-2" type="search" placeholder="Code" aria-label="Search" />
                    <div class="text-center">
                        <button type="button" class="btn btn-outline-danger">SignIn</button>
                    </div>
                </form>



            </div>
        </>
    )
}

export default Join