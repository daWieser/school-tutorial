import {Component, Inject} from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-win-dialog',
    templateUrl: './win-dialog.component.html',
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatButtonModule],
  })
  export class WinDialog {
    constructor() {}

    randomize(){
        
    }
  }