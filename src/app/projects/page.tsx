import React from 'react';
import Link from 'next/link';


export default function projects(){
    return(
        <>
          <div className="project-body">

            <h1> Our Projects</h1>
               <div className="card-body">
  
               <div className="card">
                <h2 className="h2">My Resume</h2>
                <p className="para">I have Created <span className="span">My Resume</span> using HTML, CSS and TypeScript, Click below to see on Vercel</p>

            <Link href="https://milestone-1-2-plum.vercel.app/"><p className="view-on-vercel">View On Vercel</p></Link>

               </div>
               <div className="card">
                <h2 className="h2">Editable Resume</h2>
                <p className="para">I have Created <span className="span">Editable Resume</span> using HTML, CSS and TypeScript, Click below to see on Vercel</p>
                      
                <Link href="https://milesotne-3.vercel.app/"> <p className="view-on-vercel">View On Vercel</p></Link> 

               </div>

               <div className="card">
                  <h2 className="h2">Insta Like Feature</h2> 

                  <p className="para">I have Created <span className="span">Instagram Like Feature</span> using HTML, CSS and JavaScript, Click below to see on Vercel</p>

                  <Link href="https://java-script-dom-projects-sgqx.vercel.app/"><p className="view-on-vercel">View On Vercel</p></Link>
               </div>
               
               
                </div>

          </div>
        </>
    )
}