import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = 'recipes';
  
  onRecipesTriggered() {
    return this.showContent = 'recipes';
  }

  onSplTriggered() {
    return this.showContent = 'shopping list';
  }
}
