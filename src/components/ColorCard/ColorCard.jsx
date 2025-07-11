import { themes } from '../../db.js';
import './ColorCard.css';

//Entwurf
function ColorCard() {
	return (
		// Alle Color-Theme Kategorien
		<ul className="cards">
			{themes.map((theme) => (
				<li key={theme.id}>
					<h2>Theme: {theme.name}</h2>

					{/* Alle Cards der Kategorie theme.name */}
					<ul>
						{theme.colors.map((color) => (
							// Eine Card der Kategorie theme.name
							<li key={color.value} className="color-card">
								<div>
									<p className="color-card__name">{color.name}</p>
									<p className="color-card__role">{color.role}</p>
									<p className="color-card__hex">{color.value}</p>
								</div>
								<div
									className="color-card__color"
									style={{ backgroundColor: color.value }}
								></div>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}

export default ColorCard;
