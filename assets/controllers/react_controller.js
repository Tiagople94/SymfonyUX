import React from 'react';
import { render } from 'react-dom';
import {Controller} from 'stimulus';
import Greeting from './components/Greeting';

export default class extends Controller {
    connect() {
        render(<Greeting/>, this.element)
    }
}
