import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from './../../animate/card.animate';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [ cardAnim ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  // HostBinding 是属性装饰器，用来动态设置宿主元素的属性值。
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }
  // HostListener 属性装饰器，用来为宿主元素添加事件监听。
  @HostListener('mouseenter')
  onMouseenter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.cardState = 'out';
  }

  onInviteClick() {
     this.onInvite.emit();
  }


}
