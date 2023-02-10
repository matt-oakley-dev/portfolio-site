import LeftHero from './compontents/application/leftHero';
import RightHero from './compontents/application/rightHero';

import './scss/app.scss';
import './scss/helpers.scss';

function App() {
  return (
	  <>
		<div className="app">
			<LeftHero/>
			<RightHero/>
		</div>
	</>
  );
}

export default App;
