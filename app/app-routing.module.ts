import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';

const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    declarations: [
        SearchComponent,
        AboutComponent, 
        ArtistComponent
    ]
})
export class AppRoutingModule { }