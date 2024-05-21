import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'coffeelog';

  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    if (window.matchMedia('(display-mode: browser').matches) {
      //we are in browser
      if ('standalone' in navigator) {
        //only available in safari
        this.snackBar.open(
          'You can install this app, use Share > Add to home screen',
          '',
          { duration: 3000 }
        );
      } else {
        window.addEventListener('beforeinstallprompt', (event) => {
          event.preventDefault();
          const sb = this.snackBar.open('You can install this app', 'install', {
            duration: 5000,
          });
          sb.onAction().subscribe(() => {
            (event as any).prompt();
            (event as any).userChoice.then((result: any) => {
              if (result.outcome === 'dismissed') {
                //TODO
              } else {
                //TODO
              }
            });
          });
        });
      }
    }
  }
}
