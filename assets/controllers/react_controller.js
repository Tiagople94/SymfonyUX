import React from 'react';
import { render } from 'react-dom';
import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        this.element.textContent = 'HOLA';
        render
    }
}
