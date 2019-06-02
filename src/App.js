import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
	 return (
		 <div className='app-wrapper'>
				<Header className='app-wrapper-header'/>
				<SideBarContainer className='app-wrapper-navbar'/>
				<div className='app-wrapper-content'>
					 <Route path='/profile/:id?' render={() => <ProfileContainer />}/>
					 <Route path='/dialogs' render={() => <DialogsContainer />}/>
					 <Route path='/news' render={() => <News/>}/>
					 <Route path='/music' render={() => <Music/>}/>
					 <Route path='/settings' render={() => <Settings/>}/>
					 <Route path='/users' render={() => <UsersContainer/>}/>
				</div>
		 </div>
	 );
};

export default App;