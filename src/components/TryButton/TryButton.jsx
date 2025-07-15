
import './TryButton.css';

function TryButton({theme, onOpenTestPage, children}) {
	return (
		<button onClick={() => onOpenTestPage()}>
            {children} 
		</button>
	);
}

export default TryButton;
