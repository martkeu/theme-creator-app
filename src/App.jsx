import { initialThemes } from './db.js';
import { useState } from 'react';
import ColorThemeList from './components/ColorThemeList/ColorThemeList.jsx';
import ThemeForm from './components/ThemeForm/ThemeForm.jsx';
import { uid } from 'uid';
import './App.css';

function App() {
	const [themes, setThemes] = useState(initialThemes);

	function toggleDetailsView(id) {
		setThemes(
			themes.map((theme) =>
				theme.id === id
					? { ...theme, isDetailsView: !theme.isDetailsView }
					: theme
			)
		);
	}

	function handleAddTheme(newTheme) {
		setThemes([
			{
				id: uid(),
				name: newTheme.title,
				colors: [
					{ role: 'primary', value: newTheme.color1 },
					{ role: 'secondary', value: newTheme.color2 },
					{ role: 'surface', value: newTheme.color3 },
					{ role: 'surface-on', value: newTheme.color4 },
				],
			},
			...themes,
		]);
	}

	function handleDeleteTheme(id) {
        // console.log('deleted:', id);
        
		setThemes(themes.filter(theme => theme.id !== id));
	}

	return (
		<>
			<h1>Theme Creator</h1>

			<ThemeForm onAddTheme={handleAddTheme} />

			<ColorThemeList
				themes={themes}
				onToggleDetailsView={toggleDetailsView}
				onDeleteTheme={handleDeleteTheme}
			/>
		</>
	);
}

export default App;
