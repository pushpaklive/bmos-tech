import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AtlLabComponent } from "./atl-lab/atl-lab.component";
import { WorkshopNTrainingComponent } from "./workshop-ntraining/workshop-ntraining.component";
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "wnt",
    component: WorkshopNTrainingComponent
  },
  {
    path: "atllab",
    component: AtlLabComponent
  },
  {
    path: "*",
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkshopNTrainingComponent,
    AtlLabComponent,
    ServicesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
