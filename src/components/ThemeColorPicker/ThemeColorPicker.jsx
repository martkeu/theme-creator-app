import { useState } from 'react';
import './ThemeColorPicker.css';

function ThemeColorPicker({ onAddTheme }) {
	const [hexValue1, setHexValue1] = useState('#ff0000');
	const [hexValue2, setHexValue2] = useState('#00ff00');
	const [hexValue3, setHexValue3] = useState('#0000ff');
	const [hexValue4, setHexValue4] = useState('#ffffff');
    
	// function handleSync(val) {
	// 	setHexValue1(val);
	// }

	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

        console.log(data);
        
        const newThemeData = {
			name: data.title,
			colors: [
				{ role: 'primary', value: data.color1 },
				{ role: 'secondary', value: data.color2 },
				{ role: 'surface', value: data.color3 },
				{ role: 'surface-on', value: data.color4 },
			],
		};

		// onAddTheme(data);
		onAddTheme(newThemeData);

        setHexValue1('#ff0000');
        setHexValue2('#00ff00');
        setHexValue3('#0000ff');
        setHexValue4('#ffffff');

        event.target.reset();
		event.target.elements.title.focus();
	}

	return (
		<form className="theme-form" onSubmit={handleSubmit}>
			<h2 className="theme-form__title">New Color-Theme</h2>

			<div className="theme-form__fields">
				<div className="theme-form__field">
					<label htmlFor="title" className="theme-form__label">
						Theme-Name
					</label>
					<input type="text" name="title" id="title" autoFocus required />
				</div>

				<div className="theme-form__field">
					<label htmlFor="colors">Theme-Colors</label>

					<div className="theme-form__colors picker__color-card">
						<span>
							<label htmlFor="color1" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color1"
								id="color1"
                                // defaultValue="#ff0000"
                                value={hexValue1}
                                onChange={(event) => setHexValue1(event.target.value)}
							/>
							<span>Primary</span>
							<input
								type="text"
								name="hex1"
								placeholder="Format: #11f34a"
                                pattern="^#([a-f0-9]{6})$"
                                value={hexValue1}
                                onChange={(event) => setHexValue1(event.target.value)}
							/>
						</span>
						<span>
							<label htmlFor="color2" className="screen-reader-only">
								Color 2
							</label>
							<input
								type="color"
								name="color2"
								id="color2"
								// defaultValue="#00ff00"
                                value={hexValue2}
                                onChange={(event) => setHexValue2(event.target.value)}
							/>
							<span>Secondary</span>
							<input
								type="text"
								name="hex2"
								placeholder="Format: #11f34a"
                                pattern="^#([a-f0-9]{6})$"
                                value={hexValue2}
                                onChange={(event) => setHexValue2(event.target.value)}
							/>
						</span>
						<span>
							<label htmlFor="color3" className="screen-reader-only">
								Color 3
							</label>
							<input
								type="color"
								name="color3"
								id="color3"
								// defaultValue="#0000ff"
                                value={hexValue3}
                                onChange={(event) => setHexValue3(event.target.value)}
							/>
							<span>Surface</span>
							<input
								type="text"
								name="hex3"
								placeholder="Format: #11f34a"
                                pattern="^#([a-f0-9]{6})$"
                                value={hexValue3}
                                onChange={(event) => setHexValue3(event.target.value)}
							/>
						</span>
						<span>
							<label htmlFor="color4" className="screen-reader-only">
								Color 4
							</label>
							<input
								type="color"
								name="color4"
								id="color4"
								// defaultValue="#ffffff"
                                value={hexValue4}
                                onChange={(event) => setHexValue4(event.target.value)}
							/>
							<span>Surface-on</span>
							<input
								type="text"
								name="hex4"
								placeholder="Format: #11f34a"
                                pattern="^#([a-f0-9]{6})$"
                                value={hexValue4}
                                onChange={(event) => setHexValue4(event.target.value)}
							/>
						</span>
					</div>
				</div>

				<div className="theme-form__button-wrapper">
					{/* <Button type="submit">Create</Button> */}
					<button type="submit">Create Theme</button>
				</div>
			</div>
		</form>
	);
}

export default ThemeColorPicker;
