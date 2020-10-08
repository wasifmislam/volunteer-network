import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.jpg';
import logo from '../../images/logo.png';
import { Button, TextField } from '@material-ui/core';
import {UserContext} from '../../App'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div style={{ backgroundImage: ` url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events/:volType">Events</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    
                    <li>
                        <strong>{loggedInUser.name}</strong>
                    </li>
                   <li>
                       <Link to="/registration/:volType">
                   <Button variant="contained" color="primary">
                        Register
                    </Button>
                    </Link>
                   </li>
                   <li>
                   <Button variant="contained" color="black">
                        Admin
                    </Button>

                   </li>
                </ul>
            </nav>
            <br></br>
            <div className="title-container">

                <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
                <br></br>
                <form  noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Search..." variant="outlined" />
                  
                  <Button  variant="contained" color="primary">
                        Search
                    </Button>
              </form>
            </div>

        </div>
    );
};

export default Header;