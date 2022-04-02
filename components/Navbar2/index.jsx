import React, { Component } from 'react'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
} from 'mdb-react-ui-kit'
import { BrowserRouter as Router } from 'react-router-dom'

import s from '../../styles/navbar2.module.css'

class HamburgerMenuPage extends Component {
    state = {
        collapseID: '',
    }

    toggleCollapse = (collapseID) => () => {
        console.log(this)

        this.setState((prevState) => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : '',
        }))
    }

    render() {
        return (
            <Router>
                <MDBContainer className={s.navbar}>
                    <MDBNavbar
                        color="light-blue lighten-4"
                        style={{
                            marginTop: '20px',
                            zIndex: 999,
                        }}
                        light
                    >
                        <MDBContainer>
                            <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                            <MDBNavbarToggler
                                onClick={this.toggleCollapse('navbarCollapse1')}
                            />
                            <MDBCollapse
                                id="navbarCollapse1"
                                isOpen={this.state.collapseID}
                                navbar
                            >
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#!">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Link</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Profile</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        )
    }
}

export { HamburgerMenuPage }