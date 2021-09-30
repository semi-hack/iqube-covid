import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { covidCases } from '../store/action'


function Table() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data)
    useEffect(() => {
        dispatch(covidCases())
    }, [dispatch])
    return (
        <div>
            
        </div>
    )
}

export default Table
