import { Fragment } from "react";
import Banner from "./Banner";
import TalkPage from "./TalkPage";
import Services from './Services';
import ContactTab from './ContactTab';
import Feedback from "./Feedback";
import MessageTab from "./MessageTab";


const Home = () => {

    return (
        <Fragment>
            <div>
                <Banner />
                <TalkPage />
                <Services />
                <ContactTab />
                <Feedback />
                <MessageTab />
            </div>
        </Fragment>
    );

};

export default Home;