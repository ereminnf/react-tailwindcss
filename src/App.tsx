import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import CartPage from "./pages/cart"
import { ErrorPage } from "./pages/error"
import HomePage from "./pages/home"
import ProductPage from "./pages/product"
import TailwindApp from "./tailwind"

const App = () => {
    return (
        <div>
            <TailwindApp />
            {/* <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/cart"}>Cart</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes> */}
        </div>
    )
}

export default App
