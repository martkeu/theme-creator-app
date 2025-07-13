import ColorTheme from '../ColorTheme/ColorTheme.jsx';
import DetailsButton from '../DetailsButton/DetailsButton.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './ColorThemeList.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme List
|----------------------------------------------------------------------------------
| A color-theme collection as a set of color themes
*/
function ColorThemeList({ themes, onToggleDetailsView, onDeleteTheme }) {
	return (
		<>
			<ul>
				{themes.map((theme) => (
					<li key={theme.id}>
						<h2>
							<div>{theme.name}</div>

							<DetailsButton
								theme={theme}
								onToggleDetailsView={onToggleDetailsView}
							/>

							<DeleteButton
								theme={theme}
								onDeleteTheme={onDeleteTheme}
							/>
						</h2>

						<ColorTheme theme={theme} />
					</li>
				))}
			</ul>
		</>
	);
}

export default ColorThemeList;
