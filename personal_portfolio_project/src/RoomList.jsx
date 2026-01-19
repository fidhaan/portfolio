import React, { useState, useEffect } from 'react';

function RoomList() {
    const [rooms, setRooms] = useState([]); // State to store room data

    useEffect(() => {
        // Replace with your actual Django API URL
        fetch('http://127.0.0.1:8000/api/rooms/')
            .then(response => response.json())
            .then(data => setRooms(data))
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    return (
        <div>
            <h1>Hotel Rooms</h1>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>
                        {room.room_number}{room.photo} - {room.room_type} (${room.price})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RoomList;