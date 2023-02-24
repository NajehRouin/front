import './App.css';

import { IoMdNotifications } from "react-icons/io";
import { GoThreeBars } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { AiTwotoneAppstore } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import React from 'react';
import image from "./userfin.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <div className="topbarContainer">
        <div className="topbarLeft">
          <p className="logo"> Partage Ghramek</p>

        </div>
        <div className="topbarCenter">
          <label htmlFor="checkbox">
            <GoThreeBars className="IconItem" />
          </label>
          <IoMdNotifications className="IconItem" />
          <IoIosMail className="IconItem" />
          <AiTwotoneAppstore className="IconItem" />
        </div>
        <div className="topbarRight">
          <div className="searchbar">
            <GoSearch className="Icon" />
            <input placeholder='Recherche' className='searchInput' />
          </div>
          <img src={image} className="topbarImg" />
        </div>
      </div>
      <div className="leftbarContainer">
        <aside className="sidebar" >
          <label for="nav-toggle"></label>
          <ul>

            <li>
              <Link to='/accueil' className='active'>
                <i className={`fa-solid fa-house-user nav-logo-icon`}></i>
                <span className='nav-logo-name'> Accueil </span>
              </Link>
            </li>

            <li>
              <Link to='/videos'>
                <i className='fa-solid fa-video nav-link-icon'></i>
                <span className='nav-link-name'>Videos</span>
              </Link>
            </li>
            <li>
              <Link to='/cours'>
                <i class="fa-solid fa-graduation-cap"></i>
                <span className='nav-link-name'>Cours</span>
              </Link>
            </li>
            <li>
              <Link to='/event' >
                <i className='fa-solid fa-calendar-days nav-link-icon'></i>
                <span className='nav-link-name'>Evenements</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className='fa-solid fa-circle-question nav-link-icon'></i>
                <span className='nav-link-name'>Question</span>
              </Link>
            </li>
            <li>
              <Link to='/messenger' >
                <i className='fa-solid fa-comments nav-link-icon'></i>
                <span className='nav-link-name'>Messenger</span>
              </Link>
            </li>

            <li>
              <Link to="">
                <i className='fa-solid fa-circle-check'></i>
                <span className='nav-link-name'>Propositions</span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="out">
                <i className="fa fa-power-off" aria-hidden="true"></i>
                <span className='nav-link-name'>Logout</span>
              </Link>
            </li>
          </ul>
        </aside>


      </div>
    </div>

  );
}

export default Home;
