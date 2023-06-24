import { Switch } from "react-router-dom";

const update_new_message_body = 'update_new_message_body';
const send_message = 'send_message';

const dialogsReducer = (state, action) => {

	switch (action.type) {
		case update_new_message_body:
			state.newMessageBody = action.body;
			return state;
		case send_message:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messagesData.push({ id: 6, message: body });
			return state;
		default:
			return state
	}
}

export const sendMessageCreator = () => ({ type: send_message })
export const updateNewMessageBodyCreator = (body) => ({ type: update_new_message_body, body: body })

export default dialogsReducer