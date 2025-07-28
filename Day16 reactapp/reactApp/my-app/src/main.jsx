import ReactDom from 'react-dom/client'
import { App } from './App';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import Gallery from './components/Gallery/Gallery';
            //main js
            //1- entry point
            //2- Map => Link your main component with your html code


               // React has it`s own dom
                //ReactDom   object -> create root element (html)

                const element = document.querySelector('#root')
                const reactRootElement = ReactDom.createRoot(element)

                //to render any component => you must render it using it`s selector
                //selector => component name in empty tag
                reactRootElement.render(<App/>)