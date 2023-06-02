import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    //const [restaurant, setRestaurant] = useState(null);

    const restaurant = useRestaurant(id);
  
    // if(!restaurant) {
    //     return <Shimmer/>;
    // }

    return (!restaurant) ? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>Restaurant ID: {id}</h1><br/>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1><br/>
                <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwo}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                {/* <ul>
                    {Object.values(restaurant?.cards[0]?.card?.card?.card?.itemCards?.card?.info).map((info)=>(
                    <li key={info?.id}>{info?.name}</li>
                    ))}
                </ul> */}
                <ul>
                    {restaurant?.cards?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards[0].card 
                    && Object.values(restaurant?.cards?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards[0].card).map((card) => (
                    <li key={card?.id}>{card?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;