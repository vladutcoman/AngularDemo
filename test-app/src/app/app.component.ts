import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  loadedFeature = 'recipe';

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}