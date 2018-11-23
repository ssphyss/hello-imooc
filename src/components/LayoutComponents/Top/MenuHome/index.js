import React from 'react';
import { WrapperMenuHome, Item } from './style'; 

class MenuHome extends React.Component{
    render(){
        return(
            <WrapperMenuHome>
                <Item>免費課程</Item>
                <Item>實戰課程</Item>
                <Item>就業班</Item>
                <Item>猿問</Item>
                <Item>手記</Item>
                <Item>猿聘</Item>
            </WrapperMenuHome>
        )
     }
}
export default MenuHome