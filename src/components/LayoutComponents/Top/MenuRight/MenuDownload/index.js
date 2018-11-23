import React from 'react';
import { Menu, Dropdown, Card } from 'antd';
import { WrapperMenuDownload } from './style';

class MenuDownload extends React.Component{
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
                        
                    </a>
                </Menu.Item>
                <Menu.Item>
                {/* <Link to="/user/login" onClick={logout}>
                    <i className="topbar__dropdownMenuIcon icmn-exit" /> 登出
                </Link> */}
                </Menu.Item>
                <Card
                    title="Card title"
                    extra={<a href="#">More</a>}
                    style={{ width: 300 }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Menu>
        )
        return(
            <WrapperMenuDownload>               
               <Dropdown 
                    overlay={menu} 
                    // trigger={['click']}
                >
                    <a className="ant-dropdown-link" href="/">                      
                        下載APP
                    </a>
                </Dropdown>
            </WrapperMenuDownload>
        )
     }
}
export default MenuDownload