import React from 'react'
import "./css/Layout.css";
import {Outlet,Link} from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/"><b>Home</b></Link></li>
                <li>
                    <Link className="nav-link" to="/about"><b>About</b></Link></li>
                <li>
                    <Link className="nav-link" to="/contact"><b>Contact</b></Link></li>
                <li>
                    <Link className="nav-link" to="/service"><b>Service</b></Link></li>
                <li>
                    <Link className="nav-link" to="/counter"><b>Counter</b></Link></li>
                <li>
                    <Link className="nav-link" to="/effect"><b>Effect</b></Link></li>
                <li>
                    <Link className="nav-link" to="/reducer"><b>Reducer</b></Link></li>
                <li>
                    <Link className="nav-link" to="/callback"><b>Callback</b></Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
