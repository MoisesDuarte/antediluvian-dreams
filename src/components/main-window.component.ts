class MainWindow extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title') || '';
    const background = this.getAttribute('background') || '';

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.createSection(title, background));
    shadow.appendChild(this.createStyle());
  }

  createSection(title: string, background: string) {
    const section = document.createElement('section');

    section.id = 'main-window';
    section.innerHTML = `<label>${title}</label>`;
    section.style.background = `url(${background}) no-repeat`;
    section.style.backgroundSize = 'cover';

    return section;
  }

  createStyle() {
    const style = document.createElement('style');

    style.innerHTML = `
      #main-window {
        border: 1px solid var(--text-color);
        border-radius: 4px;
        height: 600px;
        margin-right: 16px;
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

    return style;
  }
}

customElements.define('main-window', MainWindow);
