// src/index.js 是js的入口文件
// 引入ReactDOM
import ReactDOM from 'react-dom/client';

// 创建一个JSX
const App = <div>
    <h1>这是一个React项目</h1>
    <p>第一个React项目</p>
</div>;

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染列表
root.render(App);