import { helper } from '@ember/component/helper';

export default helper(function plural(param /*, named*/) {
  let [count, zero, one, over] = param;
  if(count === 0){
    return zero;
  }
  if (count === 1){
    return '1 ' + one;
  }
  return count + ' ' + over;
});
