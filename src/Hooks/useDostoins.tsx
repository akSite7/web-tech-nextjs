"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useDostoins = () => {
    const [dostoinsList, setDostoinsList] = useState([]);

    useEffect(() => {
      getDostion();
    },[]);
  
    const getDostion = () => {
      GlobalApi.getDostoin().then(resp => {
        console.log(resp.data.data);
        setDostoinsList(resp.data.data);
      });
    }

    return dostoinsList;
}

export default useDostoins;