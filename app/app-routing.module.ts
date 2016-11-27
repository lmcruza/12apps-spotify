import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    imports: [
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