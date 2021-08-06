// create your App component here

import React, { useState, useEffect } from 'react'

export default function App() {
    const [data, setData] = useState({ src: null })

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) =>
                res.json())
            .then((data) => {
                setData({ src: data.message })
                console.log(data.message)
            });
    }, [])

    if (!data.src)
        return <p>Loading...</p>
    return (
        <div>
            <img src={data.src} alt="A Random Dog" />
        </div>
    )
}
