import { IconChevronDown } from '@tabler/icons-react';
import { IconChevronUp } from '@tabler/icons-react';
import './DetailsButton.css';

function DetailsButton({theme, onToggleDetailsView}) {
	return (
		<button onClick={() => onToggleDetailsView(theme.id)}>
			{/* {theme.isDetailsView ? 'Hide Details' : 'Show Details'} */}
			{theme.isDetailsView ? <IconChevronUp /> : <IconChevronDown />}
		</button>
	);
}

export default DetailsButton;
