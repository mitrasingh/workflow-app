import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="container">
      <div class="left-side">
        <h1>Workflow</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        height: 100vh;
        width: 50vw;
      }

      .left-side {
        flex: 1;
        background-color: #6c79ff;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
      }
    `,
  ],
})
export class HeroComponent {}
