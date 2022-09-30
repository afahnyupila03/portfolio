import { Fragment } from "react";
import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServicesCard";
import ContactTab from "../Home/ContactTab";
import MessageTab from '../Home/MessageTab';


const Services = () => {

    return (
        <Fragment>
            <ServiceBanner />
            <ServiceCard />
            <ContactTab />
            <MessageTab />
        </Fragment>
    );

};

export default Services