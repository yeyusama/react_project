import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import logo from '../../../assets/logo.png'
import './index.less';

const { SubMenu } = Menu;

export default class LeftNav extends Component {
    render() {
        return (
            <div className='box_one'>
                <div className="layout-logo">
                    <img src={logo} alt="logo" />
                    <h1>后台管理</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <Icon type="unordered-list" />
                            <span>分类管理</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="calendar" theme="filled" />
                            <span>商品管理</span>
                        </Menu.Item>

                    </SubMenu>
                    <Menu.Item key="2">
                        <Icon type="team" />
                        <span>账号管理</span>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Icon type="setting" />
                        <span>权限管理</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="build" theme="twoTone" />
                                <span>图形图表</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">
                        <Icon type="share-alt" />
                        柱状图
                        </Menu.Item>
                        <Menu.Item key="8">
                        <Icon type="fund" />折线图
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="pie-chart" theme="filled" />饼饼图

                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
