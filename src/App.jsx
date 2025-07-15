import { initialThemes } from './db.js';
import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';
import ColorThemeList from './components/ColorThemeList/ColorThemeList.jsx';
import ThemeForm from './components/ThemeCreateForm/ThemeCreateForm.jsx';
import './App.css';
import Header from './components/Header/Header.jsx';
import TryButton from './components/TryButton/TryButton.jsx';
import ThemeTestPage from './components/ThemeTestPage/ThemeTestPage.jsx';

function App() {
	/*-----------------------------------------------------------------------------mk--
    | State Setting
    |----------------------------------------------------------------------------------
    | - themes stores the color themes
    | - page stores 
    */
	const [themes, setThemes] = useLocalStorageState('themes', {
		defaultValue: initialThemes,
	});

	const [page, setPage] = useState(null);
	const [testTheme, setTestTheme] = useState(null);

	/*-----------------------------------------------------------------------------mk--
    | Show/Hide Color Details
    |----------------------------------------------------------------------------------
    | 
    */
	function toggleDetailsView(id) {
		setThemes(
			themes.map((theme) =>
				theme.id === id
					? { ...theme, isDetailsView: !theme.isDetailsView }
					: theme
			)
		);
	}

	/*-----------------------------------------------------------------------------mk--
    | Create Theme
    |----------------------------------------------------------------------------------
    | 
    */
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

	/*-----------------------------------------------------------------------------mk--
    | Delete Theme
    |----------------------------------------------------------------------------------
    | 
    */
	function handleDeleteTheme(id) {
		// console.log('deleted:', id);
		setThemes(themes.filter((theme) => theme.id !== id));
	}

	/*-----------------------------------------------------------------------------mk--
    | Show/Hide Edit Form
    |----------------------------------------------------------------------------------
    | 
    */
	function toggleEditForm(id) {
		setThemes(
			themes.map((theme) =>
				theme.id === id ? { ...theme, isEditForm: !theme.isEditForm } : theme
			)
		);
	}

	/*-----------------------------------------------------------------------------mk--
    | Update Theme
    |----------------------------------------------------------------------------------
    | 
    */
	function handleEditTheme(updatedTheme) {
		// console.log('edit:', updatedTheme);
		setThemes(
			themes.map((theme) =>
				theme.id === updatedTheme.id
					? {
							name: updatedTheme.title,
							colors: [
								{ role: 'primary', value: updatedTheme.color1 },
								{ role: 'secondary', value: updatedTheme.color2 },
								{ role: 'surface', value: updatedTheme.color3 },
								{ role: 'surface-on', value: updatedTheme.color4 },
							],
					  }
					: theme
			)
		);
	}

	/*-----------------------------------------------------------------------------mk--
    | Show Test Page
    |----------------------------------------------------------------------------------
    | - Select the Test page
    | - Select and set the Theme chosen by the user
    */
	function handleShowTestPage(id) {
		// console.log('Test Page opened'); console.log(id);
		setPage('test');

		setTestTheme(themes.find((theme) => theme.id === id));
	}

	/*-----------------------------------------------------------------------------mk--
    | Close Test Page
    |----------------------------------------------------------------------------------
    | 
    */
	function handleCloseTestPage() {
		//console.log('Test Page closed');
		setPage(null);
	}


	return page === 'test' ? (
		<>
			{/* <button onClick={() => setPage(null)}>Back</button> */}
			<ThemeTestPage
				testTheme={testTheme}
				handleCloseTestPage={handleCloseTestPage}
			/>
		</>
	) : (
		<>
			<Header />

			<ThemeForm onAddTheme={handleAddTheme} />

			<ColorThemeList
				themes={themes}
				onToggleDetailsView={toggleDetailsView}
				onToggleEditForm={toggleEditForm}
				onDeleteTheme={handleDeleteTheme}
				onEditTheme={handleEditTheme}
				onOpenTestPage={handleShowTestPage}
			/>
		</>
	);
}

export default App;
