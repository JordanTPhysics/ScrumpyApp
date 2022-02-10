import React, {useState} from 'react';

import './App.css'
import './index.css'
import Navbar from './comps/Navbar';
import NavItem from './comps/NavItem';
import MainUI from './comps/MainUI';


class App extends React.Component{
    render(){
        return(
            <div className='App'>
                
            <Navbar>
            <NavItem icon = {'🎂'} link={'/birthday'}/>
                <NavItem icon = {'🍰'} link={'/party'}/>
                <NavItem icon = {'🥞'} link={'/wedding'}/>
                <NavItem icon = {'🧁'} link={'/anniversary'}/>
                  <a href='/' ><h1 className='homebutton'>Scrumptious Affair</h1></a>
            
            </Navbar>
            <MainUI/>
            </div>
        );
    }
}
export default App