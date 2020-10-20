import React from "react";
import HotelCard from "./HotelCard/HotelCard";
import "./hotelCards.scss";

export default function HotelCards({ state }) {
    const renderCards = state.map(elem => {
       return <HotelCard {...elem} />
    })
    
    return (
        <>
            <div class="cards-wrapper">
                {renderCards}
            </div>
        </>
    );
}
