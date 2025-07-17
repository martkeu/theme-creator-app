import './ThemeCreateForm.css';

function ThemeCreateForm({ onAddTheme }) {
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

		onAddTheme(newThemeData);

		event.target.reset();
		event.target.elements.title.focus();
	}

	return (
		<form className="theme-form" onSubmit={handleSubmit}>
			<h2 className="theme-form__title">New Color-Theme</h2>

			<div className="theme-form__fields">
				<div className="theme-form__field">
					<label htmlFor="title" className="theme-form__label">
						Name
					</label>
					<input type="text" name="title" id="title" autoFocus required />
				</div>

				<div className="theme-form__field">
					<label htmlFor="colors">Colors</label>

					<div className="theme-form__colors">
						<span>
							<label htmlFor="color1" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color1"
								id="color1"
								defaultValue="#ff0000"
							/>
						</span>
						<span>
							<label htmlFor="color2" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color2"
								id="color2"
								defaultValue="#00ff00"
							/>
						</span>
						<span>
							<label htmlFor="color3" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color3"
								id="color3"
								defaultValue="#0000ff"
							/>
						</span>
						<span>
							<label htmlFor="color4" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color4"
								id="color4"
								defaultValue="#ffffff"
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

export default ThemeCreateForm;
