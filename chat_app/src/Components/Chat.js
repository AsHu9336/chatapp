import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
let socket;

const Chat = function (location) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endpoint = 'localhost:3000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log(name , room)
        

        socket = io(endpoint);

        setRoom(room);
        setName(name)
        console.log(socket)
        socket.emit("hello", { name, room });


    }, [endpoint, location.search ]);

    return (
        <>
            <h1> Chat</h1>
        </>
    )
}

export default Chat

