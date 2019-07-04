/**
 * Created by user on 2019/6/21.
 */
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

//公共模块，管理svg的icon，仅需要在core.module中加载一次
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  let avatarDir = 'assets/img/avatar';
  const iconDir = 'assets/img/icons';
  ir.addSvgIcon(
    'gifts',
    ds.bypassSecurityTrustResourceUrl('assets/img/gifts.svg')
  );
  // 添加 svg 图标集合
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
  ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
  ir.addSvgIcon('and',ds.bypassSecurityTrustResourceUrl(`${iconDir}/and.svg`));
  ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
};
