import './ThemeTestPage.css';

function ThemeTestPage({ testTheme, handleCloseTestPage }) {
	return (
		<>
			<button className="closeBtn" onClick={() => handleCloseTestPage()}>Close Preview</button>

			<header className="header">
				<h1
					className="header__title"
					style={{ color: testTheme.colors[3].value }}
				>
					Theme: {testTheme.name}
				</h1>

				<h2
					className="css-var-test"
					style={{ background: testTheme.colors[2].value }}
				>
					A Heading
				</h2>
			</header>

			<p className="test__paragraph" style={{ color: testTheme.colors[0].value }}>
				Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses
				getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er,
				es war, als sollte die Scham ihn überleben.
			</p>
			<p className="test__paragraph" style={{ color: testTheme.colors[0].value }}>
                Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er
                sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.
			</p>

			<p
				className="css-var-test"
				style={{ '--primary': testTheme.colors[0].value }}
			>
				Don't forget to test CSS-Variables!
			</p>

			<div
				className="test__highlightbox"
				style={{ background: testTheme.colors[1].value }}
			>
				Happy Cadaver!
			</div>

			<p>{testTheme.colors.role}</p>

			{testTheme.colors.map((color) => (
				<p className="test__colorvalues" style={{ background: color.value }}>
					{color.role}
				</p>
			))}

			<footer style={{ color: testTheme.colors[0].value }}>
				&copy; 2025 &bull; by mk
			</footer>
		</>
	);
}

export default ThemeTestPage;
