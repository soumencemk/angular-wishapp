import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishModule } from './wish.module';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent implements OnInit {
  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
  filter: any;
  items: WishItem[] = [];
}
