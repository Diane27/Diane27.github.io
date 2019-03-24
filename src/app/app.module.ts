import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { HomeComponent } from './page/home/home.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    AboutComponent
  ],
  entryComponents: [ProjectDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
