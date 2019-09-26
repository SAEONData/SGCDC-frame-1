import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dataguidance from './DataGuidance';
import TermsConditions from './TermsConditions';
import Contact from './Contact';
import About from './About';
import App from './App';
import Glossary from './Glossary';
import brandlogo from './logo.png';
import saeonLogo from './logo_SAEON.svg'


class Navigater extends Component { 

    constructor(props) {
      super(props);
      this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
      this.ContentFunc = this.ContentFunc.bind(this);
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick(event) {
    
        switch (event) {
        case "Home": 
            ReactDOM.render(<App/>, document.getElementById('root'));
            break;
    
        case "Glossary":
            ReactDOM.render(<Glossary/>, document.getElementById('root'));
            break;
            
        case "About":
            ReactDOM.render(<About/>, document.getElementById('root'));
            break;
    
        case "TermsConditions":
            ReactDOM.render(<TermsConditions/>, document.getElementById('root'));
            break;
        
        case "Dataguidance":
            ReactDOM.render(<Dataguidance/>, document.getElementById('root'));
            break;
        
        case "Contact":
            ReactDOM.render(<Contact/>, document.getElementById('root'));
            break;
    
        default:
        break;
        }
    }
 
    ContentFunc = () => {
        const Base = (<div style={{ paddingLeft: "41%", paddingBottom: "50%", fontSize: "30pt" }}>
                        Glossary Page
                      </div>)

        return Base;                      
    }
    
    render() {
        return (
            <>
<nav className="sidenav sidenav---sidenav---_2tBP sidenav---collapsed---LQDEv">
                        <button role="button" className="sidenav---sidenav-toggle---1KRjR" aria-expanded="false">
                            <span className="sidenav---icon-bar---u1f02"></span>
                            <span className="sidenav---icon-bar---u1f02"></span>
                            <span className="sidenav---icon-bar---u1f02"></span>
                        </button>
                        <div role="menu" className="sidenav---sidenav-nav---3tvij">
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo">
                                        <i className="fa fa-home" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                    <div className="sidenav---navtext---1AE_f">
                                    <a id="logo-container" href="/#" rel="noopener nereferrer" className="brand-logo"><img src={brandlogo} /><div>SAEON Global Change Data Centre</div></a>
                                    </div>
                                </div>
                                <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                    <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                    <a id="logo-container" href="/#" rel="noopener nereferrer" className="brand-logo"><img src={brandlogo} /><div>SAEON Global Change Data Centre</div></a>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a type="button" href="/#" className="black-text">Using SARVA</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Atlas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="http://www.sasdi.net/search.aspx?anytext=energy" rel="noopener nereferrer" className="black-text" target="_blank">Finding Data</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Profiler</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo">
                                        <i className="fa fa-globe" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                <div className="sidenav---navtext---1AE_f">
                                    <span>Global Change</span>
                                </div>
                            </div>
                            <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                    <span>Global Change</span>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Semantic Framework</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Data and Evidence</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Work Programme</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                            <div className="sidenav---navicon---3gCRo">
                                <i className="fa fa-laptop" style={{ fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                            </div>
                            <div className="sidenav---navtext---1AE_f">
                                <span>Linked System</span>
                            </div>
                        </div>
                        <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                            <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                <span>Linked System</span>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navtext---1AE_f">
                                        <a href="https://#">NCCRD</a>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navtext---1AE_f">
                                        <a href="https://#">Events and Disasters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo"> 
                                        <i className="fa fa-folder-open" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                    <div className="sidenav---navtext---1AE_f">
                                        <span>Archive</span>
                                    </div>
                                </div>
                                <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                    <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                        <span>Archive</span>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SAWS Climate Atlas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Atlas of Agrohydrology</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SARVA 2.0</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SARVA 1.0</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Reading Risk</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="white innerMenu" role="navigation">
                        <div className="nav-wrapper container">
                        <a id="logo-container" style={{color: "black"}} onClick={ this.handleClick.bind(this, "Home") } rel="noopener nereferrer" className="brand-logo"><img src={brandlogo} /><div>SAEON Global Change Data Centre</div></a>
                            <ul className="right hide-on-med-and-down">
                                <img id="menu-logo" alt="img not loaded" src={saeonLogo}/>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Home") }>Home</a>
                                </li>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Glossary") }>Glossary</a>
                                </li>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "About") }>About</a>
                                </li>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "TermsConditions") }>T &amp; C's</a>
                                </li>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "DataGuidence") }>Data Guidence</a>
                                </li>
                                <li styled="true">
                                    <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Contact") }>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </>

                
            )
    }
}

export default Navigater;