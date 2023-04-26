import { Layout, Menu, Breadcrumb, theme } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './../pages/CSS/admin.css'
const Dashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return (
        <Layout>

            <Layout>
                <Sider breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}>
                    <div className="logo bg-white">LoGo</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="1">
                                <NavLink to="/admin/users">Home</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/admin/film">Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/admin/showtime">Showtimes</NavLink>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Dashboard