import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import Link from 'next/link';

export default function Footer(){
    return(
        <>
          <footer className="footer">
             <Link href="https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/"> <h2><FaLinkedin /></h2></Link>
             <Link href="https://discord.com/channels/@me"> <h2><FaDiscord /></h2></Link>
             <Link href="https://github.com/Ahmedkhang"><h2><SiGithub /></h2></Link>
             <Link href="https://vercel.com/new/ahmeds-projects-bafb690a?onboarding=true"><h2><IoLogoVercel /></h2></Link>
          </footer>
        </>
    )
}