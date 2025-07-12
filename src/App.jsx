import { themes } from './db.js';
import ColorThemeList from './components/ColorThemeList/ColorThemeList.jsx';
import './App.css';

function App() {
	return (
        <>      
            <h1>Theme Creator</h1>
            
            <ColorThemeList themes={themes} />
		</>
	);
}

export default App;
