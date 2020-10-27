import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const NavBox = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   min-width:100%;
   min-height:50px;
   background-color:#FCCA36;
`;

const NavContent = styled.div`
    display:flex;
    justify-content:space-around;
    min-width:45%;
    color:#424242;
    .navtext{
        cursor:pointer;

        .hr, .hr1, .hr2, .hr3{
            position:absolute;
            top:55px;
            height:3.5px;
            background-color:#424242;
            border-radius:70px;
        }
        .hr{
            left:29.4%;
            min-width:8%;
        }
        .hr1{
            left:40%;
            min-width:8%;
    
        }
        .hr2{
            left:50.4%;
            min-width:10%;
    
        }
        .hr3{
            left:62.9%;
            min-width:8%;
        }
    }
   
`;


const Nav = ({display}) => {
    return <div>
        <NavBox>
            <NavContent>
                <div className="navtext">Profile
                    <hr className="hr" display={0}></hr>
                </div>
                <div className="navtext">Forum
                    <hr className="hr1"></hr>
                </div>
                <div className="navtext">Tutor Tips
                    <hr className="hr2"></hr>
                </div>
                <div className="navtext">Tutors
                    <hr className="hr3"></hr>
                </div>
            </NavContent>
        </NavBox>
    </div>

}

Nav.defaultProps = {
    display:"none"
}

export default Nav;