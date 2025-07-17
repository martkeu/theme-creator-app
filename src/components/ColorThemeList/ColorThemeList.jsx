import ColorTheme from '../ColorTheme/ColorTheme.jsx';
import DetailsButton from '../DetailsButton/DetailsButton.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './ColorThemeList.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme List
|----------------------------------------------------------------------------------
| A color-theme collection as a set of color themes
*/
function ColorThemeList({
	themes,
	onToggleDetailsView,
	onDeleteTheme,
	onToggleEditForm,
	onEditTheme,
	onOpenTestPage,
}) {
	return (
		<ul>
			{themes.map((theme) => (
				<li key={theme.id}>
					<div className="theme__heading">
						<h2>{theme.name}</h2>

						<DetailsButton
							theme={theme}
							onToggleDetailsView={onToggleDetailsView}
						/>

						{/* <DeleteButton theme={theme} onDeleteTheme={onDeleteTheme}>X</DeleteButton> */}
					</div>

					<ColorTheme
						theme={theme}
						onDeleteTheme={onDeleteTheme}
						onToggleEditForm={onToggleEditForm}
						onEditTheme={onEditTheme}
						onOpenTestPage={onOpenTestPage}
					/>
				</li>
			))}
		</ul>
	);
}

export default ColorThemeList;
