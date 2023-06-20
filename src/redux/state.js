

let rerenderEntireTree = () =>{
	console.log('Rerendering')
}

let state = {
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
}


window.state = state;

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
	rerenderEntireTree = observer
} 

export default state;