import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <aside>    
    <p className="text-2xl">Best Hostel Ltd.<br/>Providing reliable tech since 1992</p>
    <p className="text-2xl">Adress:New Town, Kolkata-700156</p>
  </aside> 
  <nav>
    <h6 className="footer-title text-2xl">Social Contact</h6> 
    <div className="grid grid-flow-col gap-4 font-semibold text-3xl">
       <CiFacebook><a href="https://www.aliah.ac.in/" target="blank"></a></CiFacebook>  
       <FaInstagram><a href="https://www.facebook.com/"target="blank"></a></FaInstagram> 
       <FaLinkedin><a href="https://www.facebook.com/"target="blank"></a></FaLinkedin>       
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;