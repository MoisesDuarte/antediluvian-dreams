class InteractionWindow extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.createSection());
    shadow.appendChild(this.createStyle());
  }

  createSection() {
    const interactions = ['navigate', 'observe', 'implement', 'communicate'];
    const section = document.createElement('section');
    
    section.id = 'interaction-window';
    section.innerHTML = `
    <article>
      <label>Actions</label>
      <ul id="interactions-options">
        ${interactions.map(action => `<li id="action-${action}">${action}</li>`).join('')}
      </ul>

      ${interactions.map(action => `
        <ul id="${action}-options" class="hidden">
          <li>Item A</li>
          <li id="${action}-back">< Back</li>
        </ul>
      `).join('')}
    </article>
    `;

    const parentItem = section.querySelector('#interactions-options');

    interactions.forEach((action) => {
      const childrenItem = section.querySelector(`#${action}-options`);

      section.querySelector(`#action-${action}`)?.addEventListener('click', () => {
        if (parentItem && childrenItem) {
          parentItem.classList.value = 'hidden';
          childrenItem.classList.value = '';
        }
      })

      section.querySelector(`#${action}-back`)?.addEventListener('click', () => {
        if (parentItem && childrenItem) {
          parentItem.classList.value = '';
          childrenItem.classList.value = 'hidden';
        }
      })
    })

    return section;
  }

  createStyle() {
    const style = document.createElement('style');

    style.innerHTML = `
      .hidden {
        display: none;
      }

      #interaction-window {
        border: none;
        display: flex;
        flex-direction: column;
        height: 600px;
        gap: 16px;
        user-select: none;
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
        text-transform: uppercase;
      }

      #interaction-window article ul li:hover {
        text-decoration: underline;
      }
    `;

    return style;
  }
}

customElements.define('interaction-window', InteractionWindow);
