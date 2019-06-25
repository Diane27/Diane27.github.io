import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dianetobit';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `devpost`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons8-dev-post.svg`)
    );
  }
}
