import React from 'react';
import { Badge, Icon } from 'antd';
import { WrapperBadge } from './style';

class MenuNotice extends React.Component{

    render(){
        return(
            <WrapperBadge>
                <Badge dot className='wrapperBadge'>
                    <Icon type="bell" theme="filled" />
                </Badge> 
            </WrapperBadge>
        )
     }
}
export default MenuNotice