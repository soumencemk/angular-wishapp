import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input()
  wishes: WishItem[] = [];
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(`${item.wishText} : ${item.isComplete}`);
  }
}
