import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  // 使用在qiankun中 配置webpack的publicPath
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  // 独立运行 不依赖于qiankun
  render();
}

export async function bootstrap() {}

export async function mount(){
  render()
}

export async function unmount(){
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}