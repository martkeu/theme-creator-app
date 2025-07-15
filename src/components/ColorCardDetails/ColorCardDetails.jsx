import { useState, useEffect } from 'react';
import './ColorCardDetails.css';

/*-----------------------------------------------------------------------------mk--
| Color-Card
|----------------------------------------------------------------------------------
| A single color card with the attributes
| - name
| - role
| - hex value
|
| Fetching Color-Names according to hex-values
| - fetching as a site effect
| - handle as a state-variable (colorName)
| - rendering as a view component
*/
function ColorCardDetails({ color }) {
    const [colorName, setColorName] = useState('');

    const colorSineHashSign = color.value.slice(1);
    
    const url = `https://www.thecolorapi.com/id?hex=${colorSineHashSign}`;

	useEffect(() => {
		async function fetchData() {
			const resp = await fetch(url);
            const data = await resp.json();
            
            console.log(data.name.value);

            setColorName(data.name.value);
        }
        
        fetchData()
	}, [url]);

	return (
		<article className="color-card">
			<div className="color-card__info">
				<p className="color-card__name">{colorName}</p>
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
