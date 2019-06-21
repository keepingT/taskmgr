/**
 * Created by user on 2019/6/21.
 */
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'gifts',
    ds.bypassSecurityTrustResourceUrl('assets/img/gifts.svg')
  );
};
