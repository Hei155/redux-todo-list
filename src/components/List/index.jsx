import React from 'react';
import Item from '../Item';
import { useSelector } from 'react-redux';

const List = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<Item id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default List;