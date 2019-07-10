/**
 * Created by user on 2019/6/21.
 */
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

//公共模块，管理svg的icon，仅需要在core.module中加载一次
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const siderbarDir = 'assets/img/sidebar';
  const dayDir = 'assets/img/days';
  const avatarDir = 'assets/img/avatar';
  const iconDir = 'assets/img/icons';
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/day.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/week.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/month.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/projects.svg`));
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl(`${siderbarDir}/gifts.svg`));
  for (let i = 1; i <= 31; i++) {
    ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${i}.svg`));
  }
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
  ir.addSvgIcon('add',ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
  ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
  ir.addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
};
