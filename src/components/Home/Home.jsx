import React, {useEffect} from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import Banner from "../Banner/Banner";
import {filterByPrice} from "../../features/products/productSlice";

const Home = () => {

  const dispatch = useDispatch();
  const { list, filtered } = useSelector((state) => state.products);
  const { list: categoriesList } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100))
  }, [dispatch, list.length]);

  return (
    <>
      <Poster/>
      <Products products={list} amount={5} title="Trending"/>
      <Categories products={categoriesList} amount={5} title="Worth seeing"/>
      <Banner/>
      <Products products={filtered} amount={5} title="Less than 100$"/>
    </>
  );
};

export default Home;
