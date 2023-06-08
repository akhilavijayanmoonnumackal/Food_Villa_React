import React, { useEffect } from "react";
import { restaurantList } from "../config";
import RestrauntCard from './RestrauntCard';
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    //const searchText = "KFC";
    //searchText is a local state variable
    const [searchText, setSearchText] = useState("");   //to create state variable

    // console.log(restaurants);
    // const [searchClicked, setSearchClicked] = useState("false");
    
    useEffect(() => {
        //API call
        getRestaurants();
    },[]); 

    async function getRestaurants() { 
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.943811700000001&lng=76.3275467&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    //console.log("Render");

    const isOnline = useOnline();

    if(!isOnline) {
        return <h1>Offline, please check your internet connection!!</h1>
    }

    if(allRestaurants?.length === 0) 
    return <Shimmer/> 

    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) 
    return <h1>No Restaurant Match Your Filter!!!</h1>

    return (
        <>
        <div className="p-5">
            <input 
            type="text" 
            className="focus:bg-slate-300 p-2 m-2" 
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            />     
            {/* <h1>{searchClicked}</h1> */}
            <button className=" bg-slate-700 rounded-sm m-2 w-24 text-white hover:bg-orange-300" onClick={() => {
                //need to filter data
                const data = filterData(searchText, allRestaurants);
                //update the state-restaurants 
                setFilteredRestaurants(data);
                
            }}>Search </button>

        </div>
        <div className="flex flex-wrap m-8">
            {filteredRestaurants.map((restaurant) => {
                return (
                    <Link 
                        to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}
                    >
                        <RestrauntCard {...restaurant.data} />
                    </Link>
                );
            })}
        </div>
        </>
    );
};

export default Body;