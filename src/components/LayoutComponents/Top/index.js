import React from 'react';
import MenuHome from './MenuHome';
import SearchBar from './SearchBar';
import MenuRight from './MenuRight';
import logo from './../../../assets/logo.png';
import { WrapperTop } from './style';
import './index.scss';

class Top extends React.Component{
    render(){
        return(
            <div className='top'>
                <img className='logo' src={logo} alt='logo' />
                <div className='top__left'>
                    <MenuHome />
                </div>
                <div className='top__right'>
                    <MenuRight />
                </div>
                <div className='top__search'>
                    <SearchBar />
                </div>
            </div>
        )
     }
}
export default Top