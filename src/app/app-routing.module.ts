import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StorePickerComponent } from './pages/store-picker/store-picker.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: '', component: StorePickerComponent },
  { path: 'store/:storeId', component: StoreComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
