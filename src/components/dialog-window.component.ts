class DialogWindow extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title') || '';
    const dialog = this.getAttribute('dialog') || '';

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.createSection(title, dialog));
    shadow.appendChild(this.createStyle());
  }

  createSection(title: string, dialog: string) {
    const section = document.createElement('section');

    section.id = 'dialog-window';
    
    section.innerHTML = `
      <label>${title}</label>
      <article id="dialog-container">${dialog}</article>
      <button id="advance-dialog">Next ></button>
    `;

    section.querySelector('#button-advance-dialog')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('advance-dialog'));
    });

    return section;
  }

  createStyle() {
    const style = document.createElement('style');
    
    style.innerHTML = `
      :host {
        display: block;
        grid-column: span 2;
        margin-top: 16px;
      }

      #dialog-window {
        position: relative;
        border: 1px solid var(--text-color);
        border-radius: 4px;
        height: 200px;
      }

      label {
        display: inline-block;
        border-radius: 2px 0 2px 0;
        border: 1px solid var(--text-color);
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 3px 6px;
        font-size: 1.25rem;
        font-weight: 600;
      }

      article {
        &#dialog-container {
          padding: 16px;
          font-size: 1.225rem;
          font-weight: 600;
        }
      }
      
      button{
        &#advance-dialog {
          cursor: pointer;
          position: absolute;
          bottom: -16px;
          right: 12px;
          border: 1px solid var(--text-color);
          border-radius: 4px;
          background: var(--background-color);
          color: var(--text-color);
          padding: 6px 8px;
          font-size: 1.025rem;
          font-family: "IBM Plex Mono", monospace;

          &:hover {
            border: 1px solid var(--text-color);
            background: var(--text-color);
            color: var(--background-color);
          }
        }
    }
    `;

    return style;
  }
}

customElements.define('dialog-window', DialogWindow);
