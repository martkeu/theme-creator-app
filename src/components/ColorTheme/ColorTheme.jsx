import ColorCard from '../ColorCard/ColorCard.jsx';
import './ColorTheme.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme 
|----------------------------------------------------------------------------------
| A color collection as a set of color cards
*/
function ColorTheme({ theme }) {
	return (
		<ul>
			{theme.colors.map((color) => (
				<li key={color.value}>
					<ColorCard color={color} />
				</li>
			))}
		</ul>
	);
}

export default ColorTheme;
