const update_new_message_body = 'update_new_message_body';
const send_message = 'send_message';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

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