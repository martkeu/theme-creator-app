import './ColorCardDetails.css';

/*-----------------------------------------------------------------------------mk--
| Color-Card
|----------------------------------------------------------------------------------
| A single color card with the attributes
| - name
| - role
| - hex value
*/
function ColorCardDetails({ color }) {
	return (
		<article className="color-card">
			<div className="color-card__info">
				<p className="color-card__name">{color.name}</p>
				<p className="color-card__role">{color.role}</p>
				<p className="color-card__hex">{color.value}</p>
			</div>

			<div
				className="color-card__color"
				style={{ backgroundColor: color.value }}
			></div>
		</article>
	);
}

export default ColorCardDetails;
