import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'film-society-club';
    @HostBinding('class') className = '';
  
    toggleControl = new FormControl(false);
  
    constructor(
      private localStorageService: LocalStorageService,
      private overlay: OverlayContainer
    ) { }
  
    ngOnInit(): void {
      this.toggleControl.valueChanges.subscribe((darkMode) => {
        const darkClassName = 'darkMode';
        this.className = darkMode ? darkClassName : '';
        if (darkMode) {
          this.localStorageService.set('darkMode', true);
          this.overlay.getContainerElement().classList.add(darkClassName);
        } else {
          this.localStorageService.set('darkMode', false);
          this.overlay.getContainerElement().classList.remove(darkClassName);
        }
      });
      const darkSavedMode = this.localStorageService.get('darkMode');
      if(darkSavedMode) {
        this.toggleControl.setValue(darkSavedMode as boolean);
      }
    }
}
