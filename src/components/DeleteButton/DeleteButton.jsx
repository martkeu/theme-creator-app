// import { IconChevronDown } from '@tabler/icons-react';
// import { IconChevronUp } from '@tabler/icons-react';
import './DeleteButton.css';

function DeleteButton({theme, onDeleteTheme}) {
	return (
		<button onClick={() => onDeleteTheme(theme.id)}>
			X
		</button>
	);
}

export default DeleteButton;
