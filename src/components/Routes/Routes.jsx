import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes";
import SingleProduct from "../SIngleProduct/SingleProduct";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";
import SingleCategory from "../Categories/SingleCategory";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
            <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
            <Route path={ROUTES.CART} element={<Cart/>}/>
        </Routes>
    );
};

export default AppRoutes;
