import React from 'react';
export default function contact(){
    return(
        <>
          <div className="contact-us">

            <div className="contact-left">
                <h1>I am Looking Forward To <span className="span">Connect</span> With You</h1>
            </div>

            <div className="contact-right">

              <h1>Contact Us</h1>
              <form>
                <label className="label">Your Name</label>
                <input className="input" type="text" placeholder ="Your Name" required/>
                  <br/>
                  <br/>
                
                <label className="label">Your Phone</label>
                <input className="input" type="tel" placeholder ="Your phone" required/>
                <br/>
                <br/>
                
                <label className="label">Your Email</label>
                <input className="input" type="email" placeholder ="Your Email" required/>
                <br/>
                <br/>
                <button className="btn6">Submit</button>
              </form>
            </div>

          </div>
        </>
    )
}