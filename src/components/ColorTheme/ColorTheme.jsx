import ColorCard from '../ColorCard/ColorCard.jsx';
import ColorCardPreview from '../ColorCardPreview/ColorCardPreview.jsx';
import './ColorTheme.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme 
|----------------------------------------------------------------------------------
| A color collection as a set of color cards
*/
function ColorTheme({ theme }) {
	return (
		<ul className={theme.isDetailsView ? "cards" : "cardsPrev"}>
			{theme.colors.map((color) => (
				<li key={color.value}>
					{theme.isDetailsView ? (
						<ColorCard color={color} />
					) : (
						<ColorCardPreview color={color} />
					)}
				</li>
			))}
		</ul>
	);
}

export default ColorTheme;
