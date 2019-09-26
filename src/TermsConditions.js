import React, { Component } from 'react';
import Navigater from './nav';
import FooterStatic from './components/footer/footer';


class TermsConditions extends Component { 

    
    
    
    ContentFunc = () => {
        const Base = (<>
                        <p>
                        This Content will be available soon
                        </p>
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
                        <h1 className="gcdcHeader">Terms and Conditions</h1>
                        { this.ContentFunc() }
                        </div>
                    </div>
                    <FooterStatic />
                    
                </div>
            </div>
            )
    }
}

export default TermsConditions;