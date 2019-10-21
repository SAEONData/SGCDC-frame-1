import React, { Component } from 'react';
import Navigater from './nav';
import FooterStatic from './components/footer/footer';


class Contact extends Component { 

    
    
    
    ContentFunc = () => {
        const Base = (<>
<div className="row">
    <div className="col-md-6 " id="form_container">
        <p>
           Please send your message below. We will get back to you at the earliest!
        </p>
        <form role="form" method="post" id="reused_form">

            <div className="row">
                <div className="col-sm-12 form-group">
                    <label for="message">
                        Message:</label>
                    <textarea className="form-control" type="textarea" id="message" name="message"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 form-group">
                    <label for="name">
                        Your Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="col-sm-6 form-group">
                    <label for="email">
                        Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                </div>
            </div>



            <div className="row">
                <div className="col-sm-12 form-group">
                    <button type="submit" className="btn btn-lg btn-default pull-right" >Send →</button>
                </div>
            </div>

        </form>
        {/* <div id="success_message" >
            <h3>Posted your message successfully!</h3>
        </div>
        <div id="error_message"
              >
                    <h3>Error</h3>
                    Sorry there was an error sending your form.

        </div> */}
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
                        <h1 className="gcdcHeader">Contact</h1>
                        { this.ContentFunc() }
                        </div>
                    </div>
                    <FooterStatic />
                    
                </div>
            </div>
            )
    }
}

export default Contact;