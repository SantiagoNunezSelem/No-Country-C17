import React,{useState} from 'react'

function ErrorSistemaCitas({ mensaje }) {

    const [state,setState] = useState(true)

    return (
        <>
        {state === true &&
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
            onClick={setState(false)}>
            <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg text-white text-center">
                <h2 className="text-lg font-bold mb-4">Error</h2>
                <p>{mensaje}</p>
            </div>
        </div>
        }
        </>
    )
}

export default ErrorSistemaCitas
