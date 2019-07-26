import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ItemAnim } from './../../animate/item.animate';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [ ItemAnim ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  widerPriority = 'in';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter')
  onMouseenter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.widerPriority = 'in';
  }

}
