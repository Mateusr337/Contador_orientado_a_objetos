class Button {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
  }

  configureInteraction(command) {
    this.buttonElement.addEventListener("click", command);
  }
}

class KeyPress {
  constructor(key) {
    this.key = key;
  }

  configureInteraction(command) {
    window.addEventListener("keypress", (e) => {
      console.log(e.key);
      if (e.key === this.key) {
        command();
      }
    });
  }
}

class Contador {
  constructor({ contagemInicial, contagemElement, interactable }) {
    this.contagem = contagemInicial;
    this.contagemElement = contagemElement;
    this.interactable = interactable;
  }

  initialize() {
    this.interactable.configureInteraction(this.onAdd.bind(this));
  }

  onAdd() {
    this.contagem++;
    this.contagemElement.textContent = this.contagem;
  }
}

const botaoMais = document.querySelector(".js-botao-mais");
const buttonInteractable = new Button(botaoMais);
const keyPressInteractable = new KeyPress("p");

const contador = new Contador({
  contagemInicial: 0,
  contagemElement: document.querySelector(".js-contagem"),
  interactable: keyPressInteractable
});
contador.initialize();
