import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';
import { FormsModule } from '@angular/forms';
import { EventService } from '../shared/services/EventService';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from './wish/wish.service';
import { WishModule } from './wish/wish.module';
import { WishComponent } from "./wish/wish.component";
import { ContactComponent } from "./contact/contact.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    WishModule,
    WishComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
