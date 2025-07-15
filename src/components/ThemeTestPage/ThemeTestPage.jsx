import './ThemeTestPage.css';

function ThemeTestPage({handleCloseTestPage}) {
	return (
        <>
            <button onClick={() => handleCloseTestPage()}>Close Preview</button>

			<header className="header">
                <h1 className="header__title">Theme Test Page</h1>
			</header>
		</>
	);
}

export default ThemeTestPage;
