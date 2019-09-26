import React, { Component } from 'react';



class FooterStatic extends Component { 

    constructor(props) {
      super(props);
      this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
    } 
    

    
    render() {
        return (
            <>
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
            </>

                
            )
    }
}

export default FooterStatic;