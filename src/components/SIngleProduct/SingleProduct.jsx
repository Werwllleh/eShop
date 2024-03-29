import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../services/api/apiSlice";
import {ROUTES} from "../../utils/routes";
import Products from "../Products/Products";
import Product from "../Products/Product";
import {useDispatch, useSelector} from "react-redux";
import {getRelatedProducts} from "../../services/products/productSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const {list} = useSelector(({products}) => products)

    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() => {
        if (!isLoading && !isFetching && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess, navigate]);

    useEffect(() => {
        if (!data || !list.length) return;
        dispatch(getRelatedProducts(data.category.id))
    }, [data, dispatch, list.length]);


    return (

        !data ? (
            <section className="preloader">Loading...</section>
        ) : (
            <>
                <Product {...data} />
                <Products products={list} amount={5} title={"Related products"}/>
            </>
        )
    )
};

export default SingleProduct;
