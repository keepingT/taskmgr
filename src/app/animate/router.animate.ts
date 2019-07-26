import { trigger, state, transition, style, animate} from '@angular/animations';

export const slideToRight = trigger('routerAnim', [
  // void 空状态，一开始不存在
  state('void', style({
    position: 'fixed',
    width: '100%',
    height: '100%'
  })),
  // * 可以匹配任何一个动画状态
  state('*', style({
    position: 'fixed',
    width: '100%',
    height: '80%'
  })),
  // 进场动画
  transition('void => *', [
    style({transform: 'translateX(-100%)' }),
    animate('.5s ease-in-out', style({transform: 'translateX(0)' }))
  ]),
  // 离场动画
  transition('* => void', [
    style({transform: 'translateX(0)' }),
    animate('.5s ease-in-out', style({transform: 'translateX(100%)' }))
  ]),
]);
