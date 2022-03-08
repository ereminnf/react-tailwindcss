import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import InputMask from "react-input-mask"

type data = {
    name: string
    password: string
    phone: string
}

const schema = yup.object().shape({
    name: yup.string().required("Введите имя!"),
    password: yup.string().required("Введите пароль!").min(4, "Пароль должен состоять из минимум 4 символов"),
    phone: yup.string().test("len", "Не корректный телефон", (val) => {
        if (val) {
            const value = val
                .replace(/\)/g, "")
                .replace(/\(/g, "")
                .replace(/-/g, "")
                .replace(/_/g, "")
                .replace(/ /g, "")
                .replace(/\+/g, "")

            return value.length === 11
        }

        return false
    }),
})

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
    } = useForm<data>({
        // reValidateMode: "onChange",
        defaultValues: {
            name: "",
            password: "",
        },
        // mode: "onChange",
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const watchName = watch("name")

    React.useEffect(() => {
        console.log(watchName)
    }, [watchName])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <input
                    type="text"
                    placeholder="name"
                    {...register("name" /*, { required: { message: "Введите имя", value: true } }*/)}
                />{" "}
                <br />
                <input
                    type="text"
                    placeholder="password"
                    {...register(
                        "password" /*, {
                        required: { message: "Введите пароль", value: true },
                        min: { message: "Длина пароль минимум 4 символа", value: 4 },
                    }*/
                    )}
                />{" "}
                <InputMask mask="+7 (999) 999 9999" {...register("phone")}>
                    {(inputProps) => <input name="phone" placeholder="+7 (" {...inputProps} />}
                </InputMask>
                <br />
                {Object.values(errors).map((item, i) => (
                    <p key={i}>error: {item.message}</p>
                ))}
                <button type="submit">login</button>
                <button
                    onClick={() => {
                        setValue("name", "Nickolay")
                    }}
                >
                    setName
                </button>
            </form>
        </div>
    )
}

export default Form
