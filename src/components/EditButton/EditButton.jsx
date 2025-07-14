// import { IconChevronDown } from '@tabler/icons-react';
// import { IconChevronUp } from '@tabler/icons-react';
import './EditButton.css';

function EditButton({theme, children, onToggleEditForm}) {
	return (
		<button onClick={() => onToggleEditForm(theme.id)}>
			{children}
		</button>
	);
}

export default EditButton;
