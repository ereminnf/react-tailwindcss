import React from "react"
import style from "./index.module.scss"

const TailwindApp = () => {
    const [isLogin, setIsLogin] = React.useState(false)

    return (
        <div className={style.root}>
            <div className={style.form}>
                <div className={style.header}>Form</div>
                <input type='text' className={style.input} />
                <input type='text' className={style.input} />
                <button className={style.button} onClick={() => setIsLogin(!isLogin)}>
                    Login
                </button>
                {isLogin && (
                    <div className='animate-fade mb-2 mt-2 text-center text-green-500 w-full'>Successfully</div>
                )}
            </div>
        </div>
    )
}

export default TailwindApp
