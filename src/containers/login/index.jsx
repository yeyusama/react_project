import React, { Component } from "react";
import { Form, Input, Button, Icon } from "antd";
import { connect } from "react-redux";
import { getUserAsync } from "../../redux/action-creators/user";
import { setItem } from "../../utils/storage";
// import { reqLogin } from "../../api";
import logo from "./logo.png";
import "./index.less";

const { Item } = Form;
@connect(null, { getUserAsync })
@Form.create()
class Login extends Component {
  validator = (rule, value, callback) => {
    const name = rule.field === "username" ? "用户名" : "密码";

    if (!value) {
      callback(name + "不能为空😊");
    } else if (value.length < 4) {
      callback(name + "长度不能小于4位嗷😝~");
    } else if (value.length > 13) {
      callback(name + "长度不能大于十三位嗷🐷");
    } else if (!/\w/.test(value)) {
      callback(name + "只能包含数字·字母·下划线~👴");
    } else {
      callback();
    }
  };

  login = e => {
    e.preventDefault();
    const { form } = this.props;

    //校验 获取value 错误信息
    form.validateFields((err, values) => {
      // console.log(err, values);

      if (!err) {
        const { username, password } = values;

        this.props
          .getUserAsync(username, password)

          .then(response => {
            // console.log(response);
            setItem("user", response);
            this.props.history.push("/");
          })
          .catch(err => {
            form.resetFields(["password"]);
          });
      }
    });
  };

  render() {
    //getFieldDecorator是一个高阶组件
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>欢迎进入 React后台管理系统</h1>
        </header>

        <section className="login-section">
          <h3>用户登录</h3>
          <Form onSubmit={this.login}>
            <Item>
              {getFieldDecorator("username", {
                rules: [
                  /* {
                    required: true, //必填
                    message: "请输入用户名" //错误提示
                  },
                  {
                    min: 4,
                    message: "用户名长度不能少于四位"
                  },
                  {
                    max: 16,
                    message: "用户名长度不能超过十六位"
                  },
                  {
                    pattern: /\w/,
                    message: "用户名只能包含数字·字母·下划线_"
                  } */
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" className="login-icon" />}
                  placeholder="用户名"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" className="login-icon" />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Item>

            <Item>
              <Button type="primary" className="login-btn" htmlType="submit">
                登 录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

//高阶组件 复用代码
// connect(null, { getUserAsync })(Login);

export default Login;
