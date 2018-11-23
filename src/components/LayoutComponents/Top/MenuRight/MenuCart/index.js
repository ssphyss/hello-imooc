import React from 'react';
import { Badge, Icon, Dropdown, Menu, Card } from 'antd';
import { WrapperMenuCart } from './style';
import './index.scss';

class MenuCart extends React.Component{
    state = {
        count: 6,
    }
    render(){
        const { count } = this.state;
        const menu = (
            <Menu>
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
            <Dropdown overlay={menu} >
                <WrapperMenuCart  className='WrapperMenuCart'>                
                    <Icon type="shopping-cart" className='cartIcon' />
                    <div>購物車</div>
                    <Badge count={count} className='wrapperBadge'>              
                    </Badge>                
                </WrapperMenuCart>
            </Dropdown>
        )
     }
}
export default MenuCart