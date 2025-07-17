import { initialThemes } from './db.js';
import useLocalStorageState from 'use-local-storage-state';
import { useState } from 'react';
import { uid } from 'uid';
import Header from './components/Header/Header.jsx';
import ColorThemeList from './components/ColorThemeList/ColorThemeList.jsx';
import ThemeCreateForm from './components/ThemeCreateForm/ThemeCreateForm.jsx';
import ThemeTestPage from './components/ThemeTestPage/ThemeTestPage.jsx';
import ThemeColorPicker from './components/ThemeColorPicker/ThemeColorPicker.jsx';
import CreateButton from './components/CreateButton/CreateButton.jsx';
import './App.css';

function App() {
	/*-----------------------------------------------------------------------------mk--
    | State Setting
    |----------------------------------------------------------------------------------
    | - themes: stores the color themes
    | - page: stores the current Page (ThemePage respectively TestPage)
    | - testTheme: identifys theme-selection by users to display on TestPage
    */
	const [themes, setThemes] = useLocalStorageState('themes', {
		defaultValue: [],
	});
	const [page, setPage] = useState(null);
	const [testTheme, setTestTheme] = useState(null);
	const [isCreateView, setIsCreateView] = useState(false);

	/*-----------------------------------------------------------------------------mk--
    | Show/Hide Color-Theme Create Form
    |----------------------------------------------------------------------------------
    | 
    */
	function toggleCreateView() {
		setIsCreateView(!isCreateView);
	}

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
    | Create Theme
    |----------------------------------------------------------------------------------
    | 
    */
	function handleAddTheme(newThemeData) {
		//console.log(newThemeData);
		setThemes([{ id: uid(), ...newThemeData }, ...themes]);
	}

	async function handleAddTheme2(newThemeData) {
		const promises = newThemeData.colors.map(async (color) => {
			console.log('xxx: ', color);
			const colorSineHashSign = color.value.slice(1);

			const url = `https://www.thecolorapi.com/id?hex=${colorSineHashSign}`;

			const resp = await fetch(url);
			const data = await resp.json();

			return {
				...color,
				name: data.name.value,
			};
		});

		const newColorsAndNames = await Promise.all(promises);

		// console.log('colorsAndNames: ', newColorsAndNames);
		setThemes([
			{ id: uid(), ...newThemeData, colors: newColorsAndNames },
			...themes,
		]);
	}

	/*-----------------------------------------------------------------------------mk--
    | Update Theme
    |----------------------------------------------------------------------------------
    | 
    */
	function handleEditTheme(updatedTheme) {
		// console.log('edit:', updatedTheme);
		setThemes(
			themes.map((theme) => (theme.id === updatedTheme.id ? updatedTheme : theme))
		);
	}

	async function handleEditTheme2(updatedTheme) {
		const promises = updatedTheme.colors.map(async (color) => {
			const colorSineHashSign = color.value.slice(1);

			const url = `https://www.thecolorapi.com/id?hex=${colorSineHashSign}`;

			const resp = await fetch(url);
			const data = await resp.json();

			return {
				...color,
				name: data.name.value,
			};
		});

		const newColorsAndNames = await Promise.all(promises);

		// console.log('colorsAndNames: ', newColorsAndNames);
		setThemes(
			themes.map((theme) =>
				theme.id === updatedTheme.id
					? { ...updatedTheme, colors: newColorsAndNames }
					: theme
			)
		);
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
    | Show Test Page
    |----------------------------------------------------------------------------------
    | - Select the Test page
    | - Select and set the Theme chosen by the user
    */
	function handleShowTestPage(id) {
		// console.log('Test Page opened - Theme:', id);
		setPage('test');

		setTestTheme(themes.find((theme) => theme.id === id));
	}

	/*-----------------------------------------------------------------------------mk--
    | Close Test Page
    |----------------------------------------------------------------------------------
    | 
    */
	function handleCloseTestPage() {
		// console.log('Test Page closed');
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

			<CreateButton
				isCreateView={isCreateView}
				onToggleCreateView={toggleCreateView}
			/>

			{/* <ThemeCreateForm onAddTheme={handleAddTheme} /> */}

			<ThemeColorPicker
				isCreateView={isCreateView}
				onAddTheme={handleAddTheme2}
			/>

			<ColorThemeList
				themes={themes}
				onToggleDetailsView={toggleDetailsView}
				onToggleEditForm={toggleEditForm}
				onDeleteTheme={handleDeleteTheme}
				onEditTheme={handleEditTheme2}
				onOpenTestPage={handleShowTestPage}
			/>
		</>
	);
}

export default App;
