import {addPost, updateNewPostText} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
	 return {
			posts: state.profilePage.posts,
			newPostText: state.profilePage.newPostText,
	 }
};


const MyPostsContainer = connect(mapStateToProps,
	{addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer