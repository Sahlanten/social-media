import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


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
	let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

	let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id} />)

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs
