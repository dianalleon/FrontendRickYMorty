import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesktopComponent} from "./platform/desktop/desktop.component";

const routes: Routes = [
  { path: 'desktop', component: DesktopComponent },
  { path: 'mobile', loadChildren: () => import('./platform/mobile/mobile.module').then(m => m.MobileModule) },
  { path: '**', redirectTo: 'desktop' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
