class MainWindow extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title');
    const background = this.getAttribute('background');

    const shadow = this.attachShadow({ mode: 'open' });

    const section = document.createElement('section');
    section.id = 'main-window';
    section.innerHTML = `
      <label>${title}</label>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      #main-window {
        border: 1px solid var(--text-color);
        border-radius: 4px;
        height: 600px;
        margin-right: 16px;
        background: url(${background}) no-repeat;
        background-size: cover;
      }

      #main-window > label {
        display: inline-block;
        border-radius: 2px 0 2px 0;
        border: 1px solid var(--text-color);
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 3px 6px;
        font-weight: 600;
      }
    `;

    shadow.appendChild(section);
    shadow.appendChild(style);
  }
}

customElements.define('main-window', MainWindow);