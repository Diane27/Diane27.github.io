import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { HomeComponent } from './page/home/home.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailsComponent
  ],
  entryComponents: [ProjectDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
