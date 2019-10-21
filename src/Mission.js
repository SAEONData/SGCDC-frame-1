import React, { Component } from 'react';
import Navigater from './nav';
import FooterStatic from './components/footer/footer';


class Mission extends Component { 

    
    
    
    ContentFunc = () => {
        const Base = (<>
                        <p>The South African Environmental Observation Network's Global Change Data Centre is a repository housing spatially referenced global change data. It is run by SAEON's uLwazi node and funded by...</p>
                        <h2 className="pb4 pt4">SAEON Mandate:</h2>
                        <div className="row">
                            <div className="col-6 bg-grey pt4">
                                <h3>Vision:</h3>
                                <p>A sustained, coordinated, responsive and comprehensive South African in-situ environmental observation network that delivers long-term reliable data for scientific research and informs decision-making for a knowledge society and improved quality of life.</p>
                            </div>
                            <div className="col-6 bg-blue pt4">
                                <h3>Mandate:</h3>
                                <p>The mandate of SAEON is derived from the Science and Technology White Paper of 1995 and the National Research and Development Strategy of 2003 and is further expressed in the context of the National Global Change Research Plan."</p>
                            </div>
                        </div>
                      </>)

        return Base;                      
    }
    
    render() {
        return (
            <div>
                <div className="animateReverse">
                 <Navigater />
                    <div className="container-fluid bg-white">
                       <div className="container gcdc-content pt4">
                        <h1 className="gcdcHeader">Mission and Vision</h1>
                        { this.ContentFunc() }
                        </div>
                    </div>
                    <FooterStatic />
                    
                </div>
            </div>
            )
    }
}

export default Mission;