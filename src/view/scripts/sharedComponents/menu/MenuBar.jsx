import React, {useEffect, useState} from "react";
import { Menu } from 'antd';
import {Link, useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router";


const MenuBar = ({match}) => {
    const mode = 'horizontal';
    const theme = 'light';
    const history = useHistory();
    const path = window.location.pathname;
    const show = path != "/" ? true : false;
    const [showMenuBar, setShowMenuBar] = useState(show);
    
    useEffect(() => {
        return history.listen((location) => {
            if(location.pathname != "/")
                setShowMenuBar(true);
            else
                setShowMenuBar(false);
        }) 
    },[history]);

    //localStorage.setItem("userId", 1);
    const showLogin = (localStorage.getItem("userId") === undefined) || (localStorage.getItem("userId") === null);
    //localStorage.clear();

    function setPage(page)
    {
        history.replace(page);
    }


    if(!showMenuBar)
        return <div></div>

    return (
        <div className="menu">
            <Menu
                defaultSelectedKeys={['1']}
                mode={mode}
                theme={theme}
            >
                <Menu.Item key="1" onClick={() => setPage("/")}>Home</Menu.Item>
                <Menu.Item key="2" onClick={() => setPage("/filter")}>Explore</Menu.Item>
                {showLogin && <Menu.Item key="3" className="right-aligned" onClick={() => setPage("/login")}>Login</Menu.Item>}
                {showLogin && <Menu.Item key="4" className="right-aligned">/</Menu.Item>}
                
                {showLogin && <Menu.Item key="5" className="right-aligned" onClick={() => setPage("/signup")}>Signup</Menu.Item>}
                {!showLogin && <Menu.Item key="6" className="right-aligned" onClick={() => setPage(`/profile/${localStorage.getItem("userId")}`)}>Profile</Menu.Item>}

            </Menu>            
            
        </div>
    );
};

const mapStateToProps = (state) => ({ profile:state.profile.user});
const ShowTheLocationWithRouter = withRouter(MenuBar);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);

