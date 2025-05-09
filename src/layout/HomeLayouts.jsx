import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Loading from '../pages/Loading';

const HomeLayouts = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>

                <section>
                    {state == "loding" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <section className=''>
                    <Top></Top>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;