'use client'
import React, { useState, useMemo } from 'react';

import axios from 'axios';

const newAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'X-Custom-Header': 'foobar'}
})

export default function ExpensiveComponent() {
    const getById = async (id: number)  => {
        const result  =await newAxios.get("/todos/" + id)
        console.log(result.data)
    }
  return <div>
    <button onClick={() => getById(1)}>Get By ID</button>
  </div>
}
