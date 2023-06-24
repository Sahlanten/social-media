const add_post = 'add_post';
const update_new_post_text = 'update_new_post_text';

const profileReducer = (state, action) => {
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