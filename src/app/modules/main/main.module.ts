import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TopHeaderContextComponent } from './components/top-header-context/top-header-context.component';
import { NavBarContextComponent } from './components/nav-bar-context/nav-bar-context.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { SliderContextComponent } from './components/slider-context/slider-context.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewExperienceComponent } from './components/new-experience-context/new-experience.component';
import { BactToTopComponent } from '../share/components/bact-to-top/bact-to-top.component';
import { FooterContextComponent } from './components/footer-context/footer-context.component';
import { DestinationContextComponent } from './components/destination-context/destination-context.component';
import { FormsModule } from '@angular/forms';
import { OffersContextComponent } from './components/offers-context/offers-context.component';




@NgModule({
  declarations: [
    MainComponent,
    TopHeaderContextComponent,
    NavBarContextComponent,
    SliderContextComponent,
    NewExperienceComponent, 
    BactToTopComponent,
    FooterContextComponent,
    DestinationContextComponent,
    OffersContextComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    FormsModule
    
  ]
})
export class MainModule { }
