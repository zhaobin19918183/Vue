function getHp(store,data) {
  return store.getters.roles.some(item => item.indexOf(data) === 0);
}
// 判断是否有权限
export default{
   getHp
} 
