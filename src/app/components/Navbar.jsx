import React, { useState } from 'react';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Mail, Notifications, People } from "@mui/icons-material";

const StyledToolbar = styled( Toolbar )( {
    display: "flex",
    justifyContent: "space-between"
} );

const Search = styled( "div" )( ( { theme } ) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}) );
const Icons = styled( Box )( ( { theme } ) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up( "sm" )]: {
        display: "flex"
    }
}) );
const UserBox = styled( Box )( ( { theme } ) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up( "sm" )]: {
        display: "none"
    }
}) );

const Navbar = () => {
    const [open, setOpen] = useState( false );

    const handleOpen = () => {
        setOpen( prevState => !prevState );
    };
    const handleClose = () => {
        setOpen( false );
    };

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={ { display: { xs: "none", sm: "block" } } }>
                    Fast Company
                </Typography>
                <People sx={ { display: { xs: "block", sm: "none" } } }/>
                <Search>
                    <InputBase placeholder="Search..."/>
                </Search>
                <Icons>
                    <Badge badgeContent={ 4 } color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={ 2 } color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar sx={ { width: 30, height: 30 } }
                            src="https://rare-gallery.com/uploads/posts/127231-dodge-challenger-srt-demon-2018-hd.jpg"
                            onClick={ handleOpen }
                    />
                </Icons>
                <UserBox onClick={ handleOpen }>
                    <Avatar sx={ { width: 30, height: 30 } }
                            src="https://rare-gallery.com/uploads/posts/127231-dodge-challenger-srt-demon-2018-hd.jpg"
                    />
                    <Typography variant="span">Zhyrgal</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                open={ open }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: 'top',
                    horizontal: 'right',
                } }
                transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'left',
                } }
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;