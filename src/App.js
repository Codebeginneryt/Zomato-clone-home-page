import React from 'react';
import './App.css';
import DeliveryFoodItem from './Pages/DeliveryFoodItem';
import Filter from './Pages/Filter';
import FoodRecepie from './Pages/FoodRecepie';
import Footer from './Pages/Footer';
//import axios from 'axios';
import Navbar from './Pages/Navbar';
import PopularCities from './Pages/PopularCities';
import TopBrands from './Pages/TopBrands';
import { useState } from 'react';

function App() {
  const [itemName, setItemName] = useState("pizza");

  function getData(){
    setItemName("food");
    alert("helo run");
}

  return (
    <>
    <Navbar />
    <Filter />
    <TopBrands />
    <FoodRecepie />
    <PopularCities />
    <Footer />
    </>
  );
}

export default App;
