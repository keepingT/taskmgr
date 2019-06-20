import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class CoreModule {
  // 需要导入CoreModule依赖，SkipSelf跳过自身，去系统父级里寻找依赖
  // Optional表示可选，第一次加载时，系统中无CoreModule，则正常地构造
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent){
      throw new Error('模块已加载，不能再次加载！');
    }
  }
}
