import React, { Link, Component, useEffect, useState } from 'react';
import dashboard from './dashboard.css'
import Header from './Header';
import Footer from './Footer';
import Navbar from './Nav';



function Dashboard() {

        return (

            <div>
                <Header />
                <Navbar />
                    <div className="kreep">
                        <a id='center-button' href='https://ballast-html.herokuapp.com/'><button>Generate a Question</button></a>
                    </div>
                <Footer />
            </div>
            
            
        )

}

export default Dashboard;