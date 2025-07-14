import './ColorCardPreview.css';

/*-----------------------------------------------------------------------------mk--
| Color-Card Preview
|----------------------------------------------------------------------------------
| A single color field
*/
function ColorCardPreview({ color }) {
	return (
			<article
				className="color-card__preview"
				style={{ backgroundColor: color.value }}
			></article>
	);
}

export default ColorCardPreview;
