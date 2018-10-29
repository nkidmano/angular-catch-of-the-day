import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFishFormComponent } from './components/add-fish-form/add-fish-form.component';
import { EditFishFormComponent } from './components/edit-fish-form/edit-fish-form.component';
import { FishComponent } from './components/fish/fish.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StorePickerComponent } from './pages/store-picker/store-picker.component';
import { StoreComponent } from './pages/store/store.component';
import { CentUSDPipe } from './pipes/cent-usd.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StorePickerComponent,
    StoreComponent,
    NotFoundComponent,
    FishComponent,
    InventoryComponent,
    EditFishFormComponent,
    AddFishFormComponent,
    HeaderComponent,
    LoginComponent,
    OrderComponent,
    CentUSDPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
