const animationPortfolioItemStyles = /* html */`
<style>
  li.animation-portfolio-item {
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    list-style: none;
    min-width: 300px;
    margin: 0;
    max-width: 350px;
    padding: 0;
    gap: 0.5rem;
    padding: 0;
    width: 100%;
  }

  .animation-portfolio-item .title {
    font-size: 1.25rem;
  }

  .animation-portfolio-item .description {
    font-size: 0.75rem;
  }

  .animation-portfolio-item video {
    border-radius: var(--border-radius);
  }
</style>
`

class AnimationPortfolioItem extends HTMLElement {
  title = null
  type = null
  link = null
  thumbnail = null

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.type = this.getAttribute('type')
    this.link = this.getAttribute('link')
    this.thumbnail = this.getAttribute('thumbnail')
    this.title = this.getAttribute('title')
    this.shadowRoot.innerHTML = /* html */`
    ${animationPortfolioItemStyles}
    <li class="animation-portfolio-item">
      ${this.renderContent()}
      <span class="title">
        ${this.title}
      </span>
      <span class="description">
        <slot></slot>
      </span>
    </li>
  `
  }

  renderContent () {
    if (this.type === 'youtube') {
      const [videoId] = this.link.split('watch?v=').reverse()
      return /* html */`<youtube-video video-id="${videoId}"></youtube-video>`
    }
    if (this.type === 'video') {
      return /* html */`
        <video controls poster="${this.thumbnail}">
          <source src="${this.link}" type="video">
        </video>`
    }
    return this.type
  }
}

window.customElements.define('animation-portfolio-item', AnimationPortfolioItem)
