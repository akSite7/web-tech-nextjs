"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useRooms = () => {
    const [roomsList, setRoomsList] = useState([]);

    useEffect(() => {
      getRoom();
    },[]);
  
    const getRoom = () => {
      GlobalApi.getRoom().then(resp => {
        console.log(resp.data.data);
        setRoomsList(resp.data.data);
      });
    }

    return roomsList;
}

export default useRooms;