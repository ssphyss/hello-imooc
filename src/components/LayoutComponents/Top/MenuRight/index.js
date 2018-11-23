import React from 'react';
import MenuProfile from './MenuProfile';
import MenuNotice from './MenuNotice';
import MenuCart from './MenuCart';
import MenuDownload from './MenuDownload';
import { WrapperMenuRight } from './style';
class MenuRight extends React.Component{
    render(){
        return(
            <WrapperMenuRight>   
               <MenuDownload />
               <MenuCart />
               <MenuNotice />
               <MenuProfile />
            </WrapperMenuRight>
        )
     }
}
export default MenuRight