import {App} from 'src/App.jsx';
import domReady from "@wordpress/dom-ready";
const {createRoot} = wp.element;

domReady(() => {
    const rootDom = document.getElementById('bastion_settings');
    const root = createRoot(
        rootDom
    );
    root.render(<App initial={bastionsettings.data}/>);
});

