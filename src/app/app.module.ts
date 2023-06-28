import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { GoalComponent } from './components/goal/goal.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ScenariosComponent } from './components/scenarios/scenarios.component';
import { ProjectDemoComponent } from './components/project-demo/project-demo.component';
import { ProsAndConsComponent } from './components/pros-and-cons/pros-and-cons.component';
import { UsecasesComponent } from './components/usecases/usecases.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NavigationArrowComponent } from './components/navigation-arrow/navigation-arrow.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeIoComponent } from './components/home-io/home-io.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    GoalComponent,
    ProgramsComponent,
    ScenariosComponent,
    ProjectDemoComponent,
    ProsAndConsComponent,
    UsecasesComponent,
    SummaryComponent,
    NavigationArrowComponent,
    HeaderComponent,
    FooterComponent,
    HomeIoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
