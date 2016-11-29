import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpModule, 
        RouterModule.forRoot([
            { path: '', component: SearchComponent },
            { path: 'about', component: AboutComponent }
        ])
    ],
    exports: [RouterModule],
    declarations: [
        SearchComponent,
        AboutComponent
    ]
})
export class AppRoutingModule { }