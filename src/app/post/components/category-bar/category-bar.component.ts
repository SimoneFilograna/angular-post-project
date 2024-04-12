import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.scss'
})
export class CategoryBarComponent {
  @Input() posts!: Observable<Array<Post>>;
  @Output() categoryEmitted = new EventEmitter<string>()

  emitCat(ct: string) {
    const data = ct;
    this.categoryEmitted.emit(data)
  }
}

