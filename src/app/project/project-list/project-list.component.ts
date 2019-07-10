import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [{
    name: '企业协作平台',
    coverImg: 'assets/img/covers/0.jpg',
    desc:'这是一个企业内部协作平台'
  },{
    name: '自动化测试平台',
    coverImg: 'assets/img/covers/1.jpg',
    desc:'这是一个企业内部自动化测试'
  },{
    name: '大数据应用平台',
    coverImg: 'assets/img/covers/2.jpg',
    desc:'这是一个大数据应用平台'
  }];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      width: '400px',
      height: '330px',
      data: { dark : true }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
  //点击邀请
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

}
