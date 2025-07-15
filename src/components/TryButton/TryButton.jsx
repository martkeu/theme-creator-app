
import './TryButton.css';

function TryButton({theme, onOpenTestPage, children}) {
	return (
		<button onClick={() => onOpenTestPage(theme.id)}>
            {children} 
		</button>
	);
}

export default TryButton;
