import React from "react"
import style from "./index.module.scss"

const TailwindApp = () => {
    return (
        <div>
            <div className='border border-purple-500 rounded-md p-4 w-screen'>
                <button
                    className='mx-10 text-center bg-purple-500 bg-opacity-50 px-6 py-2 rounded-xl
                hover:bg-opacity-80 transition-all active:bg-opacity-100 md:bg-blue-500 dark:bg-red-200'
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default TailwindApp
