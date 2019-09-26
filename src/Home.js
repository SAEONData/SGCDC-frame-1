import React, { Component } from 'react';
import Navigater from './nav';


class Home extends Component { 

    constructor(props) {
      super(props);
      this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
      this.ContentFunc = this.ContentFunc.bind(this);
    } 
    

 
    ContentFunc = () => {
        const Base = (<div style={{ paddingLeft: "41%", paddingBottom: "50%", fontSize: "30pt" }}>
                        Home Page
                      </div>)

        return Base;                      
    }
    
    render() {
        return (
            <div>
                <script src="/static/js/bundle.js"></script>
                <script src="/static/js/1.chunk.js"></script>
                <script src="/static/js/main.chunk.js"></script>
                <div className="animateReverse">meh
                <Navigater />
                    <div id="index-banner" className="parallax-container">
                        <ul className="breadcrumb" style={{background: "transparent none repeat scroll 0% 0%", paddingLeft: "5%", color: "black"}}></ul>
                        <div className="section no-pad-bot">
                            <div className="container">
                                <br/><br/>
                                <div>
                                    <h2 className="header center text-darken-4"></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    { this.ContentFunc() }
                    <div>
                        <div className="container widgets">
                            <div className="section">
                                <div className="row">
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Search</button>
                                            <h4 className="center">Search and Discover Resources</h4>
                                            <p className="light center">Use simple or advanced tools to search for data meeting your criteria.</p>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Themes</button>
                                            <h4 className="center">Explore Available Resources by Sector or Theme</h4>
                                            <p className="light center">Browse, preview, and access data and narratives in popular collections and in common themes.</p>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Contribute</button>
                                            <h4 className="center">Tell Us About Your Area of Interest</h4>
                                            <p className="light center">Register as a user and contribute data, assessments, and media.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parallax-container valign-wrapper"></div>
                    </div>
                    <footer className="page-footer font-small indigo" style={{background: "rgb(0, 0, 255) none repeat scroll 0% 0%"}}>
                        <div className="row" style={{ marginLeft: "15px"}}>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Technology </h5>
                                <p className="white-text light"> The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by SAEON on behalf of DST, DEA, and other stakeholders. </p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> SAEON ODP </h5>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Funding </h5>
                                <img src="https://drive.google.com/uc?id=0B18ulA7MmoWOcTQ0SkhIRDBVU3c" alt="img not loaded"/>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Legal </h5>
                                <ul>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Disclaimer </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Privacy </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Conditions of Use </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            )
    }
}

export default Home;
