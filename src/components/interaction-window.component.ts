class InteractionWindow extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.createSection());
    shadow.appendChild(this.createStyle());
  }

  createSection() {
    const interactions = ['Navigate', 'Observe', 'Implement', 'Communicate'];
    const section = document.createElement('section');
    
    section.id = 'interaction-window';
    section.innerHTML = `
    <article>
      <label>Actions</label>
      <ul>
        ${interactions.map(action => `<li>${action}</li>`).join('')}
      </ul>
    </article>
    `;

    return section;
  }

  createStyle() {
    const style = document.createElement('style');

    style.innerHTML = `
      #interaction-window {
        border: none;
        display: flex;
        flex-direction: column;
        height: 600px;
        gap: 16px;
      }

      #interaction-window article {
        border: 1px solid var(--text-color);
        border-radius: 4px;
        flex: 1;
      }

      #interaction-window article label {
        display: inline-block;
        border-radius: 2px 0 2px 0;
        border: 1px solid var(--text-color);
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 3px 6px;
        font-weight: 600;
      }

      #interaction-window article ul {
        list-style: none;
        font-size: 1.25rem;
        padding: 0;
        margin: 16px;
      }

      #interaction-window article ul li {
        cursor: pointer;
      }

      #interaction-window article ul li:first-letter {
        font-weight: 600;
      }

      #interaction-window article ul li:hover {
        text-decoration: underline;
      }
    `;

    return style;
  }
}

customElements.define('interaction-window', InteractionWindow);
