import { initialThemes } from './db.js';
import { useState } from 'react';
import ColorThemeList from './components/ColorThemeList/ColorThemeList.jsx';
import './App.css';

function App() {
    const [themes, setThemes] = useState(initialThemes);
    
    function toggleDetailsView(id) {
		setThemes(
			themes.map((theme) =>
				theme.id === id ? { ...theme, isDetailsView: !theme.isDetailsView } : theme
			)
		);
	}

	return (
		<>
			<h1>Theme Creator</h1>

			<ColorThemeList
				themes={themes}
				onToggleDetailsView={toggleDetailsView}
			/>
		</>
	);
}

export default App;
