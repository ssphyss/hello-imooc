import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';
import { WrapperMenuProfile } from './style';

class MenuProfile extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <span>Hello, userState.role</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a href="/">
                        <i className="topbar__dropdownMenuIcon icon-user" /> 
                        設定
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a
                        href="https://www.google.com.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="toFront mr-4 d-none d-sm-inline"
                    >
                        <Button type="primary">前台</Button>
                    </a>
                </Menu.Item>
                <Menu.Item>
                {/* <Link to="/user/login" onClick={logout}>
                    <i className="topbar__dropdownMenuIcon icmn-exit" /> 登出
                </Link> */}
                </Menu.Item>
            </Menu>
        )
        return(            
            <WrapperMenuProfile>
                <Dropdown 
                    overlay={menu} 
                    // trigger={['click']}
                >
                    <a className="ant-dropdown-link" href="/">                       
                        <Avatar className="topbar__avatar" /* shape="square" size="large"*/ icon="user" />
                    </a>
                </Dropdown>
            </WrapperMenuProfile>            
        )
     }
}
export default MenuProfile