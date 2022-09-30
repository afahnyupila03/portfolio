import { Fragment } from "react";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioFilter from "./PortfolioFilter";


const Portfolio = () => {

    return (
        <Fragment>
            <PortfolioBanner />
            <PortfolioFilter />
        </Fragment>
    );

};

export default Portfolio;