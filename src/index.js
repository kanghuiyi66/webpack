/**
 * @description
 * @author 康慧怡
 * @Date 2022/09/29
 */
import './index1.less';
import './index.css';
// import _ from 'lodash';
// import {fn} from "./value";

// const obj = { a: 1, b: 2 };
// const {a, b} = obj;
// console.log(a, b);
// const arr = [
//     {id: 1, name: 'one'},
//     {id: 2, name: 'two'}
// ]
// const result = arr.map(item => item.name);
// console.log(result);
//
// console.log(fn(b));

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
//
//     element.innerHTML = _.join(['kang', 'huiyi'], ' ');
//     btn.innerHTML = 'click me';
//
//     btn.onclick = fn;
//
//     element.append(btn);
//
//     return element;
// }
//
// document.getElementsByClassName('warp')[0].appendChild(component());


async function getComponent() {
    const element = document.createElement('div');
    // 动态导入
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['hi', 'cong'], ', ');
}

getComponent().then((component) => {
    document.getElementsByClassName('warp')[0].appendChild(component)
})