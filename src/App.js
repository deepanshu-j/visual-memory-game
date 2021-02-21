import './App.css';
import Game from './Game';

function App() {
	return (
		<div className="App">
			<div>
				<Game boardSize={3} />
			</div>
		</div>
	);
}

export default App;
