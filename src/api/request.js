import axios from "axios";
import {
  message
} from "antd";
import store from '../redux/store'
import codeMessage from "../config/code-message";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // 基础路径：所有请求的公共路径
  timeout: 10000,
  headers: {
    // 公共的请求头参数
  }
});

// 设置axios拦截器
axiosInstance.interceptors.request.use(config => {
  if (config.method === "post") {
    config.headers["content-type"] = "application/x-www-form-urlencoded";

    config.data = Object.keys(config.data)
      .reduce((prev, key) => {
        const value = config.data[key];
        return prev + `&${key}=${value}`;
      }, "")
      .substring(1);
  }
    //读取数据
  const {
    user:{
      token
    }
  } = store.getState();

  if (token) {
    config.headers.authorization = "Bearer " + token;
  }

  return config;
});
// 响应拦截器
axiosInstance.interceptors.response.use(
  ({
    data
  }) => {
    // 统一处理：功能成功/失败
    if (data.status === 0) {
      // 返回成功的数据
      return data.data;
    } else {
      // 功能失败
      message.error(data.msg);
      return Promise.reject(data.msg);
    }
  },
  // 响应失败触发的回调函数
  error => {
    // 定义一个codeMessasge

    let errorMessage = "";

    if (error.response) {
      // 说明服务器返回了响应
      errorMessage = codeMessage[error.response.status] || "未知错误";
    } else {
      // 说明服务器没有返回响应，请求还没给服务器 / 还没有接受到服务器的响应 请求就终止了
      if (error.message.indexOf("Network Error") !== -1) {
        errorMessage = "请检查网络连接";
      } else if (error.message.indexOf("timeout") !== -1) {
        errorMessage = "网络太卡了，请连上wifi重试";
      } else {
        errorMessage = "未知错误";
      }
    }
    // console.dir(error);
    message.error(errorMessage);
    return Promise.reject(errorMessage);
  }
);

export default axiosInstance;