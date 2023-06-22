
let store = {
	_state: {
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
	_callSubscriber() {
		console.log('Rerendering')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		if (action.type === 'add-post') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'update-new-post-text') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}

}









export default store;

