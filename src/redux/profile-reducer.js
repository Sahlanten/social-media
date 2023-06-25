const add_post = 'add_post';
const update_new_post_text = 'update_new_post_text';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 20 }
	],
	newPostText: 'Hi, how are you',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_post:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};

			state.posts.push(newPost);
			state.newPostText = '';

			return state;

		case 'update_new_post_text':
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: add_post })
export const updateNewPostActionCreator = (text) => ({ type: update_new_post_text, newText: text })

export default profileReducer