"use client";
import "../style/Navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
export default function Navbar(){
    return(
        <>
           <div className="nav">
            
            <p>Ahmed Ur  <span>Rehman</span></p>


            <div className="nav-right">
                <ul>
                   <Link href="/"><li>Home</li></Link> 
                   <Link href="/projects"><li>Our Projects</li></Link> 
                   <Link href="/contact"><li>Contact Us</li></Link>
                   <Link href="/about"><li>About Us</li></Link>
                </ul>
               
            </div>
                 
            {/* <button className="btn"><GiHamburgerMenu /></button> */}
           </div>
        </>
    )
}
