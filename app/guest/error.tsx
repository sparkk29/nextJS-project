// create react error handling page
"use client"

import {useEffect} from 'react'
import { NextPage } from 'next'

const ErrorPage: NextPage = (error, reset) => {
    useEffect(() => {
        console.log('ErrorPage')
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    )
}


export default ErrorPage;
