import './CreateButton.css';

function CreateButton({isCreateView, onToggleCreateView}) {
	return (
        <button className="create-button" onClick={() => onToggleCreateView()}>
			{isCreateView ? 'X' : 'Create A Color Theme'}
		</button>
	);
}

export default CreateButton;
