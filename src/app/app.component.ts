import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MemmoryComponent } from './memmory/memmory.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { WinDialog } from './win-dialog/win-dialog.component';
import { initialState } from './initial-state';


type Card = {
  id: number,
  connectedId: number,
  picture: string,
  open: boolean,
  forcedState: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatToolbar, MemmoryComponent, CommonModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'school-tutorial';

  currentlyOpen: Card | undefined = undefined;

  memmoryState: Card[] = [...initialState];

  constructor(public dialog: MatDialog) {}


  open(current: Card) {

    if(this.currentlyOpen == current || current.forcedState)
      return;

    if (!!this.currentlyOpen) {
      if (this.currentlyOpen.connectedId === current.id) {
        current.open = true;
        this.currentlyOpen.open = true;
        current.forcedState = true;
        this.currentlyOpen.forcedState = true;
        this.currentlyOpen = undefined;
      }
      else {
        current.open = true
        setTimeout(() => {
          if (!!this.currentlyOpen)
            this.currentlyOpen.open = false;
          current.open = false;
          this.currentlyOpen = undefined;
        }, 1000);

      }
    }
    else {
      current.open = true;
      this.currentlyOpen = current;
    }
    if(this.memmoryState.filter(value => !value.open).length == 0   )
      setTimeout(() => {
        this.openDialog()
      }, 1000);
  }

  openDialog() {
    this.dialog.open(WinDialog);
  }

}
