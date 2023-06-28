import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { GoalComponent } from './components/goal/goal.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ScenariosComponent } from './components/scenarios/scenarios.component';
import { ProjectDemoComponent } from './components/project-demo/project-demo.component';
import { ProsAndConsComponent } from './components/pros-and-cons/pros-and-cons.component';
import { UsecasesComponent } from './components/usecases/usecases.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'cel_pracy', component: GoalComponent },
  { path: 'komponenty_programowe', component: ProgramsComponent },
  { path: 'scenariusze_automatyzacji', component: ScenariosComponent },
  { path: 'demo', component: ProjectDemoComponent },
  { path: 'wady_i_zalety', component: ProsAndConsComponent },
  { path: 'zastosowanie_symulatora', component: UsecasesComponent },
  { path: 'podsumowanie', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
