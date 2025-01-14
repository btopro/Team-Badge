import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import '@lrnwebcomponents/a11y-collapse/a11y-collapse.js';



const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class TeamBadge extends LitElement {
  // reflect: true not needed on all these
  static properties = {
    header: { type: String,
      reflect: true
},
    detail: { type: String,
      reflect: true},
    team: { type: Array,
      reflect: true },
    name: { type: String,
      reflect: true },
    image: { type: String,
      reflect: true },
    location: { type: String,
      reflect: true },
    wins: { type: String,
      reflect: true },
    losses: { type: String,
      reflect: true },
    Hof: { type: String,
      reflect: true },
      
  };



  static get styles () {
    return css`
    :host {
      display: block;
      padding: 25px;
      color: var(--team-badge-text-color, #000);
    }
  img {
    float: center;
    width:  50px;
    height: 50px;
    background-size: cover;
    
    
}
  /* .card {
   transition: 0.3s;
   width: 100%;
   color: blue;
    border: 1px solid blueviolet;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    
  } */
  .wrapper {
  border: 1px solid black; 
   width: 100%;
   background-color: light blue;
   }
   .details {
    color: blue;
    font-size: 100px;
   }
   .h1{
    font-size: 200px;
    color:white;
   }
    .searchbar {
      width: 100%;
      position: relative;
      display: flex;
    }
    .heading{
      font-size: 100px;
      
    }
    .page-container {
      border-color:black;
      display: flex;
    }
  `;
  }
  constructor() {
    super();
    this.header = 'NBA Encyclopedia';
    this.detail = 'Use the search bar to find your favorite team, and use the dropdown to learn more.';
    this.name = ""
    this.image = ""
    this.location = ""
    this.wins = ""
    this.losses = ""
    this.Hof = ""
  
}
// heading-button makes the whole thing clickable
  render() {
    return html`


 
    <div class="wrapper">
    <a11y-collapse icon="expand-more" heading-button>
    <p slot="heading"><img src="${this.image}" alt="Team Logo" width="100" height="100"> ${this.name}</p>

          <div slot="content">
            <p>Location: ${this.location}</p>
            <p>Wins: ${this.wins}</p>
            <p>Losses: ${this.losses}</p>
            <p>Hall of Famers: ${this.Hof}</p>
          </div>
          </a11y-collapse>
    </div>
    `;
  }
}

customElements.define('team-badge', TeamBadge);