
let store = {
	_state :{
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 20 }
			],
			newPostText: 'Hi, how are you',
		},
	
		dialogsPage: {
			messagesData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Hello' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Whats up?' }
			],
			dialogsData: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Viktor' },
				{ id: 3, name: 'Valera' },
				{ id: 4, name: 'Vlad' },
				{ id: 5, name: 'Denys' },
				{ id: 6, name: 'Pasha' }
			],
		}
	},
	getState(){
		return this._state
	},
	_callSubscriber () {
		console.log('Rerendering')
	},
	addPost () {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
	
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state);
	},
	subscribe (observer){
		this._callSubscriber = observer
	} 
}









export default store;
window.store = store;
