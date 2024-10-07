import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
removeWish() {
throw new Error('Method not implemented.');
}
  @Input() wishText!: string;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<Boolean>();

  get cssClasses() {
    //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return { strikeout: this.fullfilled, 'text-muted': this.fullfilled };
  }

  toggleFullfill() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
