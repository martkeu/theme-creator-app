import ColorTheme from '../ColorTheme/ColorTheme.jsx';
import DetailsButton from '../DetailsButton/DetailsButton.jsx';
import './ColorThemeList.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme List
|----------------------------------------------------------------------------------
| A color-theme collection as a set of color themes
*/
function ColorThemeList({ themes, onToggleDetailsView }) {
	return (
		<ul>
			{themes.map((theme) => (
				<li key={theme.id}>
					<h2>
						<div>{theme.name}</div>

						<DetailsButton
							theme={theme}
							onToggleDetailsView={onToggleDetailsView}
						/>
					</h2>

					<ColorTheme theme={theme} />
				</li>
			))}
		</ul>
	);
}

export default ColorThemeList;
