import ColorCardDetails from '../ColorCardDetails/ColorCardDetails.jsx';
import ColorCardPreview from '../ColorCardPreview/ColorCardPreview.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import EditButton from '../EditButton/EditButton.jsx';
import TryButton from '../TryButton/TryButton.jsx';
import ThemeEditForm from '../ThemeEditForm/ThemeEditForm.jsx';
import './ColorTheme.css';

/*-----------------------------------------------------------------------------mk--
| Color-Theme 
|----------------------------------------------------------------------------------
| A color collection as a set of color cards
*/
function ColorTheme({ theme, onDeleteTheme, onEditTheme, onToggleEditForm, onOpenTestPage}) {
	return (
		<>
			{theme.isDetailsView ? (
                <div className="control-buttons">
                    <TryButton theme={theme} onOpenTestPage={onOpenTestPage}>
						Try
					</TryButton>

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

			{theme.isEditForm && theme.isDetailsView ? (
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
