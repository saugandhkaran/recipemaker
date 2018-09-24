import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
import { ConnectorsListComponent } from './connectors-list/connectors-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path : 'modules', component: ListComponentComponent },
  { path : 'connectors', component: ConnectorsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
