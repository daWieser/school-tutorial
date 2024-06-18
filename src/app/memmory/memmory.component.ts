import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memmory',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatCardModule, MatRadioModule, FormsModule, CommonModule],
  templateUrl: "./memmory.component.html"
})
export class MemmoryComponent {
  @Input() img = ""

  @Input() open = true;
}
