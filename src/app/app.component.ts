import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NdmaFormComponent } from './components/ndma-form/ndma-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NdmaFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ndmaForm';
}
