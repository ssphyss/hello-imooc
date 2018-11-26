import React from 'react';
import { Dropdown, Menu, Card } from 'antd';
import { WrapperSearchBar, Button, Input } from './style';

class SearchBar extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Card
                        title="Card title"
                        extra={<a href="/">More</a>}
                        style={{ width: 300 }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Menu.Item>
            </Menu>
        )
        return(
            <WrapperSearchBar>
                <Dropdown overlay={menu} >
                    <Input placeholder='search'/>
                </Dropdown>                
                <Button>小程序</Button>
                <Button>JAVA入門</Button>
                <Button className='btn-search'>Search</Button>
            </WrapperSearchBar>
        )
     }
}
export default SearchBar