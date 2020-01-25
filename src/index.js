import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots'
import CardList from './CardList';


ReactDOM.render(

  

        <CardList robots = {robots} />


, document.getElementById('root'));

serviceWorker.unregister();
