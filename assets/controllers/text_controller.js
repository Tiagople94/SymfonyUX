import {Controller} from "stimulus";

export default class extends Controller {
    static targets = ["textBlock"];

    connect() {
        this.displayText();
    }

    displayText() {
        switch (this.textBlockTarget.getAttribute("class")) {
            case "stimulusClass":
                this.textBlockTarget.textContent = 'Stimulus est un framework JavaScript aux ambitions modestes. Il ne cherche pas à prendre en charge l\'intégralité de votre front-end. En fait, il ne se préoccupe pas du tout de rendu HTML. Au lieu de cela, il est conçu pour augmenter votre code HTML avec juste assez de comportement pour le faire briller.';
                break;
            case "TurboClass":
                this.textBlockTarget.textContent = 'Turbo utilise des techniques complémentaires pour réduire considérablement la quantité de JavaScript personnalisé que la plupart des applications Web auront besoin d\'écrire';
                break;
            case "StradaClass":
                this.textBlockTarget.textContent = 'Standardise la façon dont les parties Web et natives d\'une application hybride mobile se communiquent via des attributs de pont HTML.';
                break;
        }
    }
}