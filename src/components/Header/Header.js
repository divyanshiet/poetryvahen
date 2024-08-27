import logo from "./logo.png";
import { useState } from "react";
import { IoMenu} from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import './header.css'
export default function Header() {
  const [active, setActive] = useState(true);
  return (
    <>
      
      <nav>
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="toggle" onClick={()=>{setActive(!active)}}>{active ? <IoMenu /> : <AiOutlineClose />}</div>
          <ul className={active ? "menu" : "mobmenu"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Subscribe</a></li>
          <li className="searchbox">
            <form action="#">
                <input type="text" placeholder="Search poets"
                       name="search" />
            </form>
          </li>
          <li><button><a href="#">Login/signup</a></button></li>
        </ul>
      </nav>
    </>
  );
}
