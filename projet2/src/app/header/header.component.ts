import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  collapsed = true;
  @Output() recipesTrigger = new EventEmitter<string>();
  @Output() splTrigger = new EventEmitter<string>();

  onRecipesTrigger() {
    this.recipesTrigger.emit('recipes');
  }

  onSplTrigger() {
    this.splTrigger.emit('shopping list');
  }
}
