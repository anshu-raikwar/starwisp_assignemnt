
import React, { Component } from 'react';
import styled, {css} from 'styled-components'
import { HashRouter, /*BrowserRouter,*/ Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ClassStream from './ClassStream';
import DashBoard from './DashBoard';

import dashboard from './images/dashboard.png';
import lorem from './images/lorem.png';
import ipsum from './images/ipsum.png';

const Div = styled.div`
    scroll-behavior: smooth;
    &::--webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`

const LayoutWrapper = styled(Div)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100vw;
    height: 100vh;

    overflow: scroll;
`
const LayoutContainer = styled(Div)`
    position: fixed;

    width: 100vw;
    height: 100vh;

    overflow: hidden;
    background: #F2F2F2;
`
const Menu = styled(Div)`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 315px;
    height: 1084px;

    background: #FF6C40;
    padding-top: 7px;   
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const MenuItem = styled(Div)`
    width: 315px;
    height: 82px;

    ${props =>
        props.selected === true && css`
            background: #FFC480;
            `}
    display: grid;
    grid-template-areas: "icon title";
    grid-template-rows: 1fr;
    grid-template-columns: 96px 1fr; 
`
const Icon = styled.img`
    grid-area: icon;

    width: 36px;
    height: 36px;
    margin: auto;
`
const Title = styled(Div)`
    grid-area: title; 
    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    align-self: center;

    color: #FFFFFF;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const DisplayContainer = styled(Div)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100vw - 315px); 
    height: 100vh; 

    overflow: hidden; 
`
const DisplayContainerScreen = styled(Div)`
    position: absolute;
    top: 0px;
    right: -20px;
    width: calc(100vw - 295px);
    height: calc(100vh + 20px);

    overflow: scroll;
`


class HomePage extends Component {
    constructor(props) {
        super(props)
        const {menuItem} = this.props
      
        this.state = {
            menuItems: ["DashBoard", "ClassStream", "Ipsum"],
            menuIcons: [dashboard, lorem, ipsum],
            selectedMenuItem: menuItem
        }
    }
    handleMenuItemToggle = (index) => (e) => {
        this.setState({ selectedMenuItem: index });
    }
    render() {
        const {selectedMenuItem} = this.state
        const {menuItems, menuIcons} = this.state
        const MENUITEMS = menuItems.map((title, i) => {
            var isSelected = false
            var Path = "/"+title
            if(selectedMenuItem === i) isSelected = true
            return (
                <StyledLink key={`link_${i}`}
                    to={{
                        pathname: Path
                    }}
                >
                    <MenuItem selected={isSelected} 
                        onClick={(e) => {
                            if(isSelected !== true) {
                                e.stopPropagation();
                                this.handleMenuItemToggle(i)(e)
                            }
                        }} 
                    >
                        <Icon src={menuIcons[i]} ></Icon>
                        <Title> {title} </Title>
                    </MenuItem>
                </StyledLink>
            )
        })

        return (
            <LayoutWrapper>
                <LayoutContainer>
                    <HashRouter basename='/'>
                        <Menu id="Menu" >       
                            { MENUITEMS }
                        </Menu>
                        <DisplayContainer>
                            <DisplayContainerScreen>
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/DashBoard" />
                                    </Route>
                                    <Route exact path="/DashBoard">
                                        <DashBoard/>
                                    </Route>
                                    <Route exact path="/ClassStream">
                                        <ClassStream/>
                                    </Route>
                                    <Route exact path="/Ipsum" >
                                        <DashBoard/>
                                    </Route>
                                </Switch> 
                            </DisplayContainerScreen>
                        </DisplayContainer>
                    </HashRouter>
                </LayoutContainer>
            </LayoutWrapper>
        )
    }
}

export default HomePage