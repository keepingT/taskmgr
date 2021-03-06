import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import {NewTaskComponent} from "../new-task/new-task.component";
import {CopyTaskComponent} from "../copy-task/copy-task.component";
import { slideToRight } from './../../animate/router.animate';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [ slideToRight ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  lists = [{
    id: 1,
    name: '待办',
    tasks: [{
      id: 1,
      desc: '任务一：去星巴克买杯咖啡',
      completed: true,
      priority: 3,
      owner: {
        id: 1,
        name: '张三',
        avatar: 'avatars:svg-11'
      },
      dueDate: new Date(),
      reminder: new Date()
    }, {
      id: 2,
      desc: '任务二：完成PPT作业',
      completed: false,
      priority: 2,
      owner: {
        id: 1,
        name: '李四',
        avatar: 'avatars:svg-12'
      },
      dueDate: new Date()
    }]
  }, {
    id: 2,
    name: '进行中',
    tasks: [{
      id: 1,
      desc: '任务一：项目代码评审',
      completed: false,
      priority: 1,
      owner: {
        id: 1,
        name: '王五',
        avatar: 'avatars:svg-13'
      },
      dueDate: new Date()
    }, {
      id: 2,
      desc: '任务二：制定项目计划',
      completed: false,
      priority: 2,
      owner: {
        id: 1,
        name: '李四',
        avatar: 'avatars:svg-12'
      },
      dueDate: new Date()
    }]
  }];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
    const dialogRef =  this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.lists
      }
    });
  }
}
