import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const DialogItem = (props) => {
	return (
		<div className={styles.dialog + ' ' + styles.active}>
			<NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={styles.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let messagesElements = state.messagesData.map(message => <Message message={message.message} id={message.id} />)
	let newMessageBody = state.newMessageBody


	let onSendMessageClick = () => {
		props.sendMessage()
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body)
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
					<div><button onClick={onSendMessageClick} >Send</button></div>
				</div>
			</div>
		</div >
	)
}

export default Dialogs
