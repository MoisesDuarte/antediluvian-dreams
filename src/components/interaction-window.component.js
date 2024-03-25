class InteractionWindow extends HTMLElement {
  constructor() {
    super();

    const interactions = ['Navigate', 'Observe', 'Implement', 'Communicate'];

    const shadow = this.attachShadow({ mode: 'open' });

    const section = document.createElement('section');
    section.id = 'interaction-window';

    const actionArticle = document.createElement('article');
    actionArticle.id = 'action-box';
    actionArticle.innerHTML = `
      <label>Actions</label>
      <ul>
      ${interactions.map((action) => `<li>${action}</li>`).join('')}
      </ul>
    `;

    const inventoryArticle = document.createElement('article');
    inventoryArticle.id = 'inventory-box';
    inventoryArticle.innerHTML = `<label>Map</label>`;

    section.appendChild(actionArticle);
    section.appendChild(inventoryArticle);

    const style = document.createElement('style');
    style.innerHTML = `
      #interaction-window {
        border: none;
        display: flex;
        flex-direction: column;
        height: 600px;
        gap: 16px;

        article {
          border: 1px solid var(--text-color);
          border-radius: 4px;
          flex: 1;

          label {
            display: inline-block;
            border-radius: 2px 0 2px 0;
            border: 1px solid var(--text-color);
            background-color: var(--text-color);
            color: var(--background-color);
            padding: 3px 6px;
            font-weight: 600;
          }

          ul {
            list-style: none;
            font-size: 1.25rem;
            padding: 0;
            margin: 16px;

            li {
              cursor: pointer;

              &:first-letter {
                font-weight: 600;
              }

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

    `;

    shadow.appendChild(section);
    shadow.appendChild(style);
  }
}

customElements.define('interaction-window', InteractionWindow);