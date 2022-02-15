import React, {useState} from 'react';

import './App.css';
import './index.css';
import Navbar from './comps/Navbar';
import NavItem from './comps/NavItem';
import MainUI from './comps/MainUI';

import Leftbar from './comps/Leftbar';
import Rightbar from './comps/Rightbar';

class App extends React.Component{
    render(){
        return(
            <div className='App'>
                
            <div className='container'>
                
            <Navbar>
            <NavItem icon = {'🎂'} link={'/birthday'} text='birthday'/>
                <NavItem icon = {'🍰'} link={'/party'} text='party'/>
                <NavItem icon = {'🥞'} link={'/wedding'} text='wedding'/>
                <NavItem icon = {'🧁'} link={'/anniversary'} text ='anniversary'/>
                  <a href='/' ><h1 className='homebutton'>Scrumptious Affair</h1></a>
            
            </Navbar>
            <Leftbar/>
            
            <div className='Main'>
            <MainUI />
            </div>
            <Rightbar/>
            </div>
            </div>
        );
    }
}
export default App;