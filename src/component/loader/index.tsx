import React from 'react'

// Loader on component and API loads
function Loader() {
    return (
        <div className="flex justify-center items-center bg-black h-screen">
            <div className="bg-gray-600 flex space-x-2 p-5 rounded-full justify-center items-center">
            <div className="p-2 w-4 h-4 rounded-full bg-white animate-bounce" style={{animationDelay: "0.1s"}}></div>
            <div className="bg-white p-2 w-4 h-4 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
            <div className="bg-white p-2 w-4 h-4 rounded-full animate-bounce" style={{animationDelay: "0.3s"}}></div>
            </div>
        </div>
    )
}

export default Loader;
