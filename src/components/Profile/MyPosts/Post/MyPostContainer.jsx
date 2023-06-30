import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profile-reducer';
import MyPosts from '../MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState()

// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				}

// 				let onPostChange = (text) => {
// 					let action = updateNewPostActionCreator(text)
// 					store.dispatch(action)

// 				}

// 				return <MyPosts
// 					updateNewPostText={onPostChange}
// 					addPost={addPost}
// 					posts={state.profilePage.posts}
// 					newPostText={state.profilePage.newPostText}
// 				/>
// 			}}
// 		</StoreContext.Consumer>
// 	)
// }

// let action = updateNewPostActionCreator(text)
// 			props.dispatch(action)

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostActionCreator(text)
			dispatch(action)
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer 