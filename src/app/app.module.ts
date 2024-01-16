import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForestComponent } from './forest/forest.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ParentRockComponent } from './forest/parent-rock/parent-rock.component';
import { ChildRockComponent } from './forest/parent-rock/child-rock/child-rock.component';
import { MonkeyComponent } from './forest/parent-rock/monkey/monkey.component';

@NgModule({
  declarations: [
    AppComponent,
    ForestComponent,
    HeaderComponent,
    ParentRockComponent,
    ChildRockComponent,
    MonkeyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
