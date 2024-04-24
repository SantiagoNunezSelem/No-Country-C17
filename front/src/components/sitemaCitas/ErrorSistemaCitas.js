import React,{useState} from 'react'

function ErrorSistemaCitas({ mensaje, handleStateError }) {

    const [state,setState] = useState(true)

    return (
        <>
            {state &&
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50"
                    onClick={() => handleStateError({error:false,mensaje:""})}>
                    <div className="bg-gray-900 p-8 rounded-lg text-white text-center">
                        <h2 className="text-lg font-bold mb-4">Error</h2>
                        <p>{mensaje}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default ErrorSistemaCitas
