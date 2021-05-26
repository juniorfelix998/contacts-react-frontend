import logo from '../../assets/images/logo.svg';
import React from 'react';
import {Button, Icon, Image, Menu} from "semantic-ui-react";
import {Link,useLocation} from "react-router-dom";


const Header = () =>{
    const {pathname} = useLocation();
    return(
        <Menu secondary pointing>
            <Image src={logo} width={60}/>
            <Menu.Item as={Link} to='/' style={{fontSize:24}}>
                ContactManagement
            </Menu.Item>
            {pathname === '/' && <Menu.Item position='right'>
                <Button as={Link} to='/contact/create' primary basic icon>
                    <Icon name="add">
                    </Icon>
                    Create Contact
                </Button>
            </Menu.Item>}
            {pathname === '/' && <Menu.Item>
                <Button color="red" basic icon>
                    <Icon name="log out">
                    </Icon>
                    LogOut
                </Button>
            </Menu.Item>}


        </Menu>
    )
}

export default Header