import {
  Loading
} from 'element-ui';
let loadingCount = 0;
let loading;
let setTime = 0;
let begin = '';

const startLoading = () => {
  loading = Loading.service({
    lock: true,
    // text: '加载中……',
    background: 'rgba(255, 255, 255, 0.5)'
  });
};

const endLoading = () => {
  loading.close();
};

function showLoading () {
  if (loadingCount === 0) {
    begin = window.setInterval(function () {
      setTime += 100;
    }, 100)
    startLoading();
  }
  loadingCount += 1;

};

function hideLoading  () {
  clearInterval(begin);
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    if (setTime >= 500) {
      endLoading();
    } else {
      const time = 500 - setTime
      setTimeout(endLoading(), time)
    }
  }
};
export default{
  showLoading,
  hideLoading
}