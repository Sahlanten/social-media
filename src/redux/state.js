const add_post = 'add_post';
const update_new_post_text = 'update_new_post_text';
const update_new_message_body = 'update_new_message_body';
const send_message = 'send_message';

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
			dialogsData: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Viktor' },
				{ id: 3, name: 'Valera' },
				{ id: 4, name: 'Vlad' },
				{ id: 5, name: 'Denys' },
				{ id: 6, name: 'Pasha' }
			],
			messagesData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Hello' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Whats up?' }
			],
			newMessageBody: ''
		},
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
		if (action.type === add_post) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === update_new_post_text) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === update_new_message_body) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === send_message) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messagesData.push({ id: 6, message: body });
			this._callSubscriber(this._state);
		}
	}

}

export const addPostActionCreator = () => ({ type: add_post })
export const updateNewPostActionCreator = (text) => ({ type: update_new_post_text, newText: text })

export const sendMessageCreator = () => ({ type: send_message })
export const updateNewMessageBodyCreator = (body) => ({ type: update_new_message_body, body: body })







export default store;

