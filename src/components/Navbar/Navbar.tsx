"use client"
import { AppBar, Avatar, Box, Container, FormControl, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import React ,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";




const pages = [
    "Home","TV Shows", "Movie", "New & Popular","My List","Browse By Languages"
]

const Navbar = ()=>{
    const router = useRouter();
    const [anchorElNav,SetAachorElNav]= useState<null | HTMLElement>(null);
    const [searchQuery, SetSearchQuery] = useState<string>("");
    const [showClearIcon, setShowClearIcon] = useState<string>("none");
    
    const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>)=>
        {
            SetAachorElNav(event.currentTarget)
        }
    
    const handleCloseNavMenu = ()=>
            {
                SetAachorElNav(null)
            }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>
            {
                const value = event.target.value;
                SetSearchQuery(value);
                setShowClearIcon(value? "block":"none")
            }
            
    const handleClick = ()=>
                {
                    SetSearchQuery("");
                    setShowClearIcon("none ")
                }
    const handleSearchKeyPress = (event:React.KeyboardEvent<HTMLInputElement>)=>
                    {
                        if(event.key=="enter" && searchQuery.trim())
                            {
                                event.preventDefault();
                                router.push(`/search?query=${encodeURIComponent(searchQuery)}`)

                            }    
                    }
            
        


    return (
        <AppBar
        position="sticky"
        sx={{
            backgroundColor:"rgba(0,0,0,.65)",
            top:"0",
            transition:"background-color 0.3s",
            "&:hover":{
                backgroundColor:"#000",
                opacity:1,
            },
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                    width={100}
                    height={50}
                    src={"/assets/logo.png"}
                    alt="Logo"
                    style={{
                        position:"relative",
                        zIndex:1,
                    }}/>
                    <Box
                    sx={{
                        flexGrow:1,
                        display:{xs:"flex", md:"none"}
                    }}>
                        <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={
                            {vertical:"bottom",
                            horizontal:"left"}
                        }
                        keepMounted
                        transformOrigin={
                            {vertical:"top",
                            horizontal:"left"}
                        }
                        open={Boolean(handleCloseNavMenu)}
                        sx={{
                            display:{
                                xs:"block",md:"none",
                            }
                        }}>
                            {pages.map((page)=>(
                                <MenuItem 
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        borderRadius:0
                                    }}>
                                    <Typography>
                                        <Link href={page ==="Home" ? "/":page== "My List"? "/my_list":"#"}
                                        passHref
                                        style={{
                                            textDecoration:'none',
                                            color:"black",
                                        }}>
                                            <Box
                                            sx={{
                                                opacity:0.9,
                                                cursor:"pointer",
                                                padding:".6rem  .9rem",
                                                "&:hover":
                                                {
                                                    borderColor:"#fff",
                                                }
                                            }}>
                                                {page}
                                            </Box>
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow:1,
                            display:{xs:"none", md:"flex"}
                        }}
                    >
                        {pages.map((page)=>(
                                        <Link key={page} href={page ==="Home" ? "/":page== "My List"? "/my_list":"#"}
                                        passHref
                                        style={{
                                            textDecoration:'none',
                                            color:"white",
                                        }}>
                                            <Box
                                            sx={{
                                                opacity:0.9,
                                                cursor:"pointer",
                                                padding:".6rem  .9rem",
                                                "&:hover":
                                                {
                                                    fontWeight:500,
                                                    borderColor:"#fff",
                                                }
                                            }}>
                                                {page}
                                            </Box>
                                        </Link>
                            ))}
                    </Box>
                    <FormControl
                    sx={{
                        marginRight:"10px", backgroundColor:"#2a2a2a99",
                    }}>
                        <TextField
                        size="small"
                        variant="outlined"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleChange}
                        onKeyPress={handleSearchKeyPress}
                        inputProps={{
                            startAdornement:(
                                <InputAdornment position="start">
                                    <SearchIcon sx={{
                                        color:"#ffffff80",
                                    }}/></InputAdornment>
                            ),
                            endAdornement:(
                                <InputAdornment position="end"
                                style={{
                                    display:showClearIcon
                                }}
                                onClick={handleClick}>
                                    <ClearIcon
                                    sx={{
                                        color:"#ffffff80",
                                        cursor:"pointer",
                                    }}/>
                                    </InputAdornment>
                            ),
                            style:{color:'#ffffff80',}

                        }}
                        sx={{
                            "& . MuiInputBase-input":{
                                color:'#ffffff80',
                            }
                        }}
                        >

                        </TextField>
                        
                    </FormControl>
                    <Box
                    sx={{
                        flexGrow:0,
                    }}>
                        <Tooltip title="Open Settings">
                            <IconButton>
                                <Avatar
                                alt="User Avatar"
                                src="/assets/avatar.png"
                                sx={{
                                    borderRadius:"5px", width:40, height:40,
                                }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;