import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomUpperCasePipe } from './custom-upper-case.pipe';
import { FilterPipe } from './filter.pipe';
import { PurePipePipe } from './pure-pipe.pipe';
import { ImPurePipePipe } from './im-pure-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustomPipePipe,
    CustomUpperCasePipe,
    FilterPipe,
    PurePipePipe,
    ImPurePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
