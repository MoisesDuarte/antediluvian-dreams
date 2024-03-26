class InteractionWindow extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.createSection());
    shadow.appendChild(this.createStyle());
  }

  createSection() {
    const interactions = ['move', 'look', 'use', 'talk'];
    const section = document.createElement('section');
    
    section.id = 'interaction-window';
    section.innerHTML = `
    <article>
      <label id="interactions-label">
        Actions
      </label>
      
      <ul id="interactions-list">
        ${interactions.map(action => `<li id="action-${action}">${action}</li>`).join('')}
      </ul>

      ${interactions.map(action => `
        <ul id="${action}-list" class="hidden">
          <li>Item A</li>
          <li id="${action}-back">< Back</li>
        </ul>
      `).join('')}
    </article>
    `;


    const interactionLabel = section.querySelector('#interactions-label');
    const interactionsList = section.querySelector('#interactions-list');

    interactions.forEach((action) => {
      const actionsList = section.querySelector(`#${action}-list`);

      section.querySelector(`#action-${action}`)?.addEventListener('click', () => {
        if (interactionsList && actionsList && interactionLabel) {
          interactionsList.classList.value = 'hidden';
          actionsList.classList.value = '';
          interactionLabel.innerHTML = action;
        }
      })

      section.querySelector(`#${action}-back`)?.addEventListener('click', () => {
        if (interactionsList && actionsList && interactionLabel) {
          interactionsList.classList.value = '';
          actionsList.classList.value = 'hidden';
          interactionLabel.innerHTML = 'Actions';
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

        article {
          border: 1px solid var(--text-color);
          border-radius: 4px;
          flex: 1;

          label {
            display: inline-block;
            width: 85px;
            border-radius: 2px 0 2px 0;
            border: 1px solid var(--text-color);
            background-color: var(--text-color);
            color: var(--background-color);
            padding: 3px 6px;
            font-size: 1.25rem;
            font-weight: 600;
            transition: left 0.5s ease;

            &:first-letter {
              text-transform: uppercase;
            }
          }

          ul {
            list-style: none;
            font-size: 1.5rem;
            padding: 0;
            margin: 16px;

            li {
              cursor: pointer;
              padding: 2px 8px;

              &:first-letter {
                text-transform: uppercase;
              }

              &:hover {
                border-radius: 4px;
                background-color: var(--text-color);
                color: var(--background-color);
              }
            }
          }
        }
      }
    `;

    return style;
  }
}

customElements.define('interaction-window', InteractionWindow);
