// import _ from 'lodash';
// import printMe from './print.js';
// import { cube } from './math.js';
// import './style.css';

function getComponent() {
    // var element = document.createElement('div');
    // var element = document.createElement('pre');
    // var btn = document.createElement('button');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);
    // element.innerHTML = [
    //   'Hello webpack!',
    //   '5 cubed is equal to ' + cube(5)
    // ].join('\n\n');

    return import(/* webpackChunkName: "lodash" */).then(_=>{
      var element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    }).catch(error=>'模块加载错误！')
  
  }
  
  document.body.appendChild(component());

  // if (module.hot){
  //   module.hot.accept('./print.js',function(){
  //     console.log('同意更新 printMe 模块!');
  //     // printMe();
  //     document.body.removeChild(element);
  //     element = component(); // 重新渲染页面后，component 更新 click 事件处理
  //     document.body.appendChild(element);
  //   })
  // }