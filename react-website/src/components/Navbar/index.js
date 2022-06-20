import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    {/* <div class = "left-nav"> */}
                        <NavLink to="/index" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/cards" activeStyle>
                            Cards
                        </NavLink>
                        <NavLink to="/sets" activeStyle>
                            Sets
                        </NavLink>
                        <NavLink to="/discover" activeStyle>
                            Discover
                        </NavLink>
                    {/* </div> */}
                    <h1>
                        MY MAGIC
                    </h1>
                    {/* <div class = "right-nav"> */}
                        <NavLink to="/myfriends" activeStyle>
                            My Friends
                        </NavLink>
                        <NavLink to="/mydecks" activeStyle>
                            My Decks
                        </NavLink>
                    {/* </div> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;