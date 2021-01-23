import React from "react"
import LandPad from "../components/LandPad"
import ItaliaToday from "../components/ItaliaToday"
import Musicology from "../components/Musicology"
import "../pages/PortfolioA.css"

function PortfolioA() {
    return (
        <div className="portfolioA">
            <h1 id="portfolioheading">PORTFOLIO</h1>

            <LandPad />
            <ItaliaToday />
            <Musicology />

        </div>
    );
};

export default PortfolioA;