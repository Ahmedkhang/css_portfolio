// import Image from "next/image";
import React from 'react';
import "../style/Navbar.css";
import Link from 'next/link';
// import app from "./page.module.css";

export default function Home() {
 return(

                // Home Page

     <>
     <div className="container">
        <div className="body-right-side">
           <h2> Hello, My Name is <span className="span">Ahmed Ur Rehman</span>. I am a Frontend Developer. </h2> 
          <Link href="/contact"><button className="btn2">Contact Us</button></Link> 
          <Link href="/projects"><button className="btn3">Explore Projects</button></Link>  
        </div>
        <div className="body-left-side">
            <img src="/oip2.jpg"></img>
        </div>
     </div>
     </>

   

 )
}
