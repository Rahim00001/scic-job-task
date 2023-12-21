import { Link } from "react-router-dom";
import facebook from "../../../public/Icons/facebook.png"
import insta from "../../../public/Icons/instagram.png"
import twitter from "../../../public/Icons/twitter.png"
import whatsapp from "../../../public/Icons/whatsapp.png"
import youtube from "../../../public/Icons/youtube.png"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link><a className="link link-hover text-base">About us</a></Link>
                <Link><a className="link link-hover text-base">Dashboard</a></Link>
                <Link><a className="link link-hover text-base">Contact</a></Link>
                <Link><a className="link link-hover text-base">Services</a></Link>
            </nav>
            <nav>
                <h3 className="font-bold">Follow Us</h3>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com"><img src={facebook} className="w-10" alt="" /></a>
                    <a href="https://www.instagram.com/"><img src={insta} className="w-10" alt="" /></a>
                    <a href="https://www.twitter.com/"><img src={twitter} className="w-10" alt="" /></a>
                    <a href="https://www.whatsapp.com/"><img src={whatsapp} className="w-10" alt="" /></a>
                    <a href="https://www.youtube.com/"><img src={youtube} className="w-10" alt="" /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by TaskCrafter</p>
            </aside>
        </footer>
    );
};

export default Footer;