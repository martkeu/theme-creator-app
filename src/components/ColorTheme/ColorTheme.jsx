import ColorCardDetails from '../ColorCardDetails/ColorCardDetails.jsx';
import ColorCardPreview from '../ColorCardPreview/ColorCardPreview.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import EditButton from '../EditButton/EditButton.jsx';
import ThemeEditForm from '../ThemeEditForm/ThemeEditForm.jsx';
import './ColorTheme.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme 
|----------------------------------------------------------------------------------
| A color collection as a set of color cards
*/
function ColorTheme({ theme, onDeleteTheme, onEditTheme, onToggleEditForm }) {
	return (
		<>
			{theme.isDetailsView ? (
				<div className="control-buttons">
					<EditButton
						theme={theme}
						onEditTheme={onEditTheme}
						onToggleEditForm={onToggleEditForm}
					>
						Edit
					</EditButton>

					<DeleteButton theme={theme} onDeleteTheme={onDeleteTheme}>
						Delete
					</DeleteButton>
				</div>
			) : null}

			{theme.isEditForm ? (
				<ThemeEditForm theme={theme} onEditTheme={onEditTheme} />
			) : null}

			<ul className={theme.isDetailsView ? 'cards-details' : 'cards-preview'}>
				{theme.colors.map((color) => (
					<li key={color.value}>
						{theme.isDetailsView ? (
							<ColorCardDetails color={color} />
						) : (
							<ColorCardPreview color={color} />
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default ColorTheme;
