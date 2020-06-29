import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props =>(
    <header className='toolbar'>
        <nav className='toolbar_nav'>
            <div className="toolbar_logo"><a href="/">COVID-19</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Prevention</a></li>
                    <li><a href="/">Our Team</a></li>
                </ul>
            </div>
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
);

export default toolbar;