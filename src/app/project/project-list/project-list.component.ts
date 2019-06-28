import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [{
    name: '企业协作平台',
    coverImg: 'assets/img/covers/0.png',
    desc:'这是一个企业内部协作平台'
  },{
    name: '自动化测试平台',
    coverImg: 'assets/img/covers/1.png',
    desc:'这是一个企业内部自动化测试'
  },{
    name: '大数据应用平台',
    coverImg: 'assets/img/covers/2.png',
    desc:'这是一个大数据应用平台'
  }];

  constructor() { }

  ngOnInit() {

  }

  openNewProjectDialog() {

  }

}
