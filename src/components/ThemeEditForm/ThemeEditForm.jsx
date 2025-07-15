import './ThemeEditForm.css';

export default function ThemeEditForm({ theme, onEditTheme }) {
	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		console.log(data, theme.id);

		onEditTheme({ ...data, id: theme.id });

		event.target.reset();
		event.target.elements.title.focus();
	}

	return (
		<form className="theme-form" onSubmit={handleSubmit}>
			<h2 className="theme-form__title">Update Color-Theme</h2>

			<div className="theme-form__fields">
				<div className="theme-form__field">
					<label htmlFor="title">Theme-Name</label>
					<input
						type="text"
						name="title"
						id="title"
						defaultValue={theme.name}
						required
					/>
				</div>

				<div className="theme-form__field">
					<label htmlFor="colors">Theme-Colors</label>

					<div className="theme-form__colors">
						<div>
							<label htmlFor="color1" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color1"
								id="color1"
								defaultValue={theme.colors[0].value}
							/>
						</div>
						<div>
							<label htmlFor="color2" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color2"
								id="color2"
								defaultValue={theme.colors[1].value}
							/>
						</div>
						<div>
							<label htmlFor="color3" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color3"
								id="color3"
								defaultValue={theme.colors[2].value}
							/>
						</div>
						<div>
							<label htmlFor="color4" className="screen-reader-only">
								Color 1
							</label>
							<input
								type="color"
								name="color4"
								id="color4"
								defaultValue={theme.colors[3].value}
							/>
						</div>
					</div>
				</div>

				<div className="theme-form__button-wrapper">
					{/* <Button type="submit">Create</Button> */}
					<button type="submit">Update Theme</button>
				</div>
			</div>
		</form>
	);
}
