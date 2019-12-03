import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';

import { AppRoutingModule, routedComponents } from './app-routing.module'
import { SharedModule } from './shared/shared.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { DepositosComponent } from './depositos/depositos.component';

// Providers
import { dataService } from './dataservice/data.service';
import { ArticulosAddComponent } from './articulos/articulos-add/articulos-add.component';
import { DepositosAddComponent } from './depositos/depositos-add/depositos-add.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    routedComponents,
    ArticulosComponent,
    DepositosComponent,
    ArticulosAddComponent,
    DepositosAddComponent
  ],
  imports: [
    BrowserModule,
    // covalent
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    //CovalentBaseEchartsModule,
    BrowserAnimationsModule,
    // routing
    AppRoutingModule,
    //
    SharedModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
