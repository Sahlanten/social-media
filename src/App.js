import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className={styles.appWrapper}>
				<Header />
				<Navigation />
				<div className={styles.appWrapperContent}>
					<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
