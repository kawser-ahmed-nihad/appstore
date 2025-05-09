import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { useLoaderData } from 'react-router';
import AppsShow from '../components/AppsShow';
import { Helmet } from 'react-helmet';

const Home = () => {
    const appData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>App Store || Home</title>
            </Helmet>
            <div>
                <ImageSlider appData={appData}></ImageSlider>
            </div>
            <div>
                <AppsShow></AppsShow>
            </div>
        </div>
    );
};

export default Home;