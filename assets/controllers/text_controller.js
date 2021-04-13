import {Controller} from "stimulus";

export default class extends Controller {
    static targets = ["textBlock"];

    connect() {
        this.displayText();
    }

    displayText() {
        switch (this.textBlockTarget.getAttribute("class")) {
            case "stimulusClass":
                this.textBlockTarget.textContent = 'Stimulus is a JavaScript framework with modest ambitions. It doesn’t seek to take over your entire front-end—in fact, ' +
                    'it’s not concerned with rendering HTML at all. ' +
                    'Instead, it’s designed to augment your HTML with just enough behavior to make it shine.';
                break;
            case "TurboClass":
                this.textBlockTarget.textContent = 'Turbo uses complementary techniques to dramatically reduce the amount of custom JavaScript that most web applications will need to write';
                break;
            case "StradaClass":
                this.textBlockTarget.textContent = 'Standardizes the way that web and native parts of a mobile hybrid application talk to each other via HTML bridge attributes.';
                break;
        }
    }
}