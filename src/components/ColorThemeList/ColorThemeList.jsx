import ColorTheme from '../ColorTheme/ColorTheme.jsx';
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
					<h2>{theme.name}</h2>

					<button onClick={() => onToggleDetailsView(theme.id)}>
						{theme.isDetailsView ? 'Hide Details' : 'Show Details'}
					</button>

					<ColorTheme theme={theme} />
				</li>
			))}
		</ul>
	);
}

export default ColorThemeList;
