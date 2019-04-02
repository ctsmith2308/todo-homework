import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderStore from './ProviderStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ProviderStore />, document.getElementById('root'));

serviceWorker.unregister();
