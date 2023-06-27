// axios默认配置

import axios from "axios";

// 全局axios默认值
axios.defaults.baseURL = 'https://www.wanandroid.com';
// 跨域支持
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://www.wanandroid.com'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;


