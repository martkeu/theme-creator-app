// import { IconChevronDown } from '@tabler/icons-react';
// import { IconChevronUp } from '@tabler/icons-react';
import './DeleteButton.css';

function DeleteButton({theme, onDeleteTheme, children}) {
	return (
		<button onClick={() => onDeleteTheme(theme.id)}>
			{children}
		</button>
	);
}

export default DeleteButton;
