import ColorTheme from '../ColorTheme/ColorTheme.jsx';
import './ColorThemeList.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme List
|----------------------------------------------------------------------------------
| A color-theme collection as a set of color themes
*/
function ColorThemeList({themes}) {
	return (
		<ul>
            {themes.map((theme) => (
                <li key={theme.id}>
                    <h2>Theme: {theme.name}</h2>
                    
                    <ColorTheme theme={theme} />
                </li>
            ))}
        </ul>
	);
}

export default ColorThemeList;