import React, { useRef } from 'react'
import './NewTodo.css';

interface NewTodoProps {
	onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = textInputRef.current!.value;
		props.onAddTodo(enteredText);
		console.log(`Form submitted = ${enteredText}`);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">To-do's</label>
				<input ref={textInputRef} type="text" id="todo" />
			</div>
			<button type="submit">Add To-Do</button>
		</form>
	);
}

export default NewTodo
