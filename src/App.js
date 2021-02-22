import './App.css';
import Game from './Game';
//without this it wont apply styles
import 'bootstrap/dist/css/bootstrap.min.css';
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
