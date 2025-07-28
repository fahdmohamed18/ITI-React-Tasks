// Main component
// parent component
// render all component

import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import Gallery from './components/Gallery/Gallery';

export function App(){
  return (
    <div>
      <Home/>
      <About/>
      <Gallery/>
    </div>
  );
}

