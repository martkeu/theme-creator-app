// import { IconChevronDown } from '@tabler/icons-react';
// import { IconChevronUp } from '@tabler/icons-react';
import './EditButton.css';

//theme.id --> handleShowTestPage --> select Theme
function EditButton({theme, onToggleEditForm, children}) {
	return (
		<button onClick={() => onToggleEditForm(theme.id)}>
			{children}
		</button>
	);
}

export default EditButton;
