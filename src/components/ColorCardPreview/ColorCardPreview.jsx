import './ColorCardPreview.css';

/*-----------------------------------------------------------------------------mk--
| Color-Card Preview
|----------------------------------------------------------------------------------
| A single color field
*/
function ColorCardPreview({ color }) {
	return (
        <article className="color-card-prev">
			<div
				className="color-card__color--prev"
				style={{ backgroundColor: color.value }}
			></div>
		</article>
	);
}

export default ColorCardPreview;
