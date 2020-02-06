import store from '../store';
// 判断是否有权限
export function getHp(data) {
  return store.getters.roles.some(item => item.indexOf(data) === 0);
}
