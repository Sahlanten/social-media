import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostContainer';

const Profile = () => {

	return (
		<div >
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile