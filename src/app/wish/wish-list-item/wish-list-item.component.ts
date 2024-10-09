import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../../shared/models/WishItem';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  constructor(private events: EventService) {}

  @Input() wish!: WishItem;

  get cssClasses() {
    //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return {
      strikeout: this.wish.isComplete,
      'text-muted': this.wish.isComplete,
    };
  }

  toggleFullfill() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }
}
