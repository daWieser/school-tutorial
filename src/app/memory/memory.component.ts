import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatCardModule, MatRadioModule, FormsModule, CommonModule],
  templateUrl: "./memory.component.html"
})
export class memoryComponent {
  @Input() img = ""

  @Input() open = true;
}
