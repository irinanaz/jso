import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { VbDatabindingComponent } from '../vbdatabinding/vbdatabinding.component';
import { VbIfComponent } from '../vbif/vbif.component';
import { VbroutingReqparamComponent } from './vbrouting-reqparam.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'vb01',
    component: VbDatabindingComponent
  },
  {
    path: 'vb02',
    component: VbIfComponent
  },
  {
    path: 'routing/:id',
    component: VbroutingReqparamComponent
  },
  { 
    path: '',   // start path
    redirectTo: '/vb01',  // REDIRECT
    /* A redirect route requires a pathMatch property to tell the router 
      how to match a URL to the path of a route. The router throws an error 
      if you don't. */
    pathMatch: 'full'  // whole URL must match
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class VbRoutingModule { }