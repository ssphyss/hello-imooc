import React from 'react';
import { WrapperSearchBar, Button, Input } from './style';

class SearchBar extends React.Component{
    render(){
        return(
            <WrapperSearchBar>
                <Input placeholder='search'/>
                <Button>小程序</Button>
                <Button>JAVA入門</Button>
                <Button className='btn-search'>Search</Button>
            </WrapperSearchBar>
        )
     }
}
export default SearchBar