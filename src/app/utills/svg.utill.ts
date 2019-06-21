/**
 * Created by user on 2019/6/21.
 */
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

//公共模块，管理svg的icon，仅需要在core.module中加载一次
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'gifts',
    ds.bypassSecurityTrustResourceUrl('assets/img/gifts.svg')
  );
};
