import LeftHero from './compontents/hero/leftHero';
import RightHero from './compontents/hero/rightHero';

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
