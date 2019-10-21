import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TermsConditions from '../../TermsConditions';
import Mission from '../../Mission';

class FooterStatic extends Component { 

    constructor(props) {
      super(props);
      this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
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
        
        case "Mission":
            ReactDOM.render(<Mission/>, document.getElementById('root'));
            break;
        
        case "Contact":
            ReactDOM.render(<Contact/>, document.getElementById('root'));
            break;
    
        default:
        break;
        }
    }
    
    render() {
        return (
            <>
<footer className="page-footer font-small indigo" style={{background: "rgb(0, 0, 255) none repeat scroll 0% 0%"}}>
                        <div className="row" style={{ marginLeft: "15px"}}>
                            <div className="col l3 s12">
                                <h5 className="white-text light">Technology </h5>
                                <p className="white-text light">The GCDC is a quality assured subject based knowledge repository focused on global change data produced by the earth and environmental science community of South Africa.</p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light">SAEON ODP </h5>
                                <p>Saeon's open data portal directly supports and allows users free access to and visualisation of spatial and non-spatial data and information on a myriad of themes. This includes impacts of global change on human and natural environments.</p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light">Funding </h5>
                                <p> The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by <a href="https://ulwazi.saeon.ac.za" target="_blank">SAEON</a> on behalf of DST, DEA, and other stakeholders.</p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light">Quick links </h5>
                                <ul>
                                    <li><a className="white-text light" onClick={ this.handleClick.bind(this, "TermsConditions") }>Terms and Conditions </a></li>
                                    <li><a className="white-text light" onClick={ this.handleClick.bind(this, "Mission") }>Mission and vision</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
            </>

                
            )
    }
}

export default FooterStatic;