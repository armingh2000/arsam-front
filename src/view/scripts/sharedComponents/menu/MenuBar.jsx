import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';


const MenuBar = () => {
    const mode = 'horizontal';
    const theme = 'light';

    function setSelectedKey()
    {

        
    }
    
    return (
        <div>
            <Menu
                style={{ width: "100%", backgroundColor:"#E6F7FF" }}
                defaultSelectedKeys={['1']}
                mode={mode}
                theme={theme}
            >
                <Menu.Item key="1"> Home </Menu.Item>
                <Menu.Item key="2"> Explore </Menu.Item>
                <Menu.Item key="3"> Create </Menu.Item>
                <Menu.Item key="4"> <Link to="/">back to login!</Link> </Menu.Item>

            </Menu>
        </div>
    );
};

export default MenuBar;
