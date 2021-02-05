import React from "react";
import { Menu } from 'antd';
import {Link, useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router";


const MenuBar = ({match}) => {
    const mode = 'horizontal';
    const theme = 'light';
    const history = useHistory();

    //localStorage.setItem("userToken", 1);
    const showLogin = (localStorage.getItem("userToken") == undefined);
    //localStorage.clear();

    function setPage(page)
    {
        history.replace(page);
    }

    return (
        <div className="menu">
            <Menu
                defaultSelectedKeys={match.path === `/profile/:id` ? ['6'] : ['1']}
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

