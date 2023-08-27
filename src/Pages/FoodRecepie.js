import React, { useEffect, useState } from 'react'
//import ReactDOM from 'react-dom';
import DeliveryFoodItem from "./DeliveryFoodItem.js";
import axios from 'axios';
import "./Key";
function FoodRecepie() {

  const [itemName, setItemName] = useState("food");

  function getPizza(){
    setItemName("pizza");
    console.log(itemName);
}
function getBiryani(){
  setItemName("biryani");
  console.log(itemName);
}
function getChicken(){
  setItemName("chicken");
  console.log(itemName);
}
function getBurger(){
  setItemName("burger");
  console.log(itemName);
}
function getThali(){
  setItemName("chapati");
  console.log(itemName);
}
function getSpringRoll(){
  setItemName("roll");
  console.log(itemName);
}
 

  const [recipes, setrecipes] = useState([]);
  
  const YOUR_APP_ID = "3074a8d7";
  const YOUR_APP_KEY = "7328deb7bddbb80bc8878b04a6f9bef0";

  var url = `https://api.edamam.com/search?q=${itemName}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=42&calories=591-722&health=alcohol-free`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setrecipes(res.data.hits);
      console.log(res.data.hits);
    })
  }, [itemName])

  // const [food, setFood] = useState([])
  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     console.log(res.data.articles);
  //     setFood(res.data.articles);
  //   })
  // }, [])

  return (
    <>
    <DeliveryFoodItem pizzaItem = {getPizza} biryani = {getBiryani} chicken = {getChicken} burger = {getBurger} thali = {getThali} springroll = {getSpringRoll}/>
     <div className="container my-5">
        <div className="row text-center">
          {
            recipes.map((recipe) => {
              return (
                <div className="col my-3">
                  <div className="card card_hover" style={{ width: "20rem", borderRadius:"20px", cursor:"pointer" }}>
                    <img src={recipe["recipe"]["image"]} className="card-img-top" alt="..."  style={{borderRadius:"20px", padding:"10px" }} />
                    <p style={{
                      position:"absolute",
                      background:"#256fef",
                      padding:"3px",
                      color:"#fff",
                      top:"50%",
                      left:"4%",
                      fontSize:"14px"
                    }}>50% OFF up to 100</p>
                    <div className="card-body">
                      <div className="recipeLabel d-flex">
                      <h5 className="card-title">{recipe["recipe"]["label"]}</h5>
                      <p className="mx-5" style={{ background:"green", color:"white", padding:"5px"}}>4.5*</p>
                      </div>
                      <div className="priceList d-flex m-1">
                      <p>{recipe["recipe"]["dietLabels"]}</p>
                      <p className="mx-5">Rs.100 for one</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default FoodRecepie