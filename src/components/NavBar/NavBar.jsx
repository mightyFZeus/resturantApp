import React,{useState, useEffect, useContext} from 'react'
import {AppBar, Drawer, Toolbar, List, ListItem,IconButton} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './Styles'
import './Styles.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {Link} from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import cartContext from '../../Context/CartContext';


const NavBar = ({amountOfAmounts}) => {
  const {cart} = useContext(cartContext)
    const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const classes = useStyles()
    return (
        <div>
            {isDesktop?<div>
        <AppBar
       position='fixed'
        className={classes.appbar}

      >
        <Toolbar>
            <p className='title'>Figo</p>
          <ul>
            <li>
              <Link className='link-color' to='/'>
                Home
              </Link>
            </li>
            <Link className='link-color' to='/menu'>
           <li>
           
             Menu
           </li>
           </Link>
            <li>Services</li>
            <li>Sign In</li> 
            <Link to='/cart'>
            <li>
            <Badge  badgeContent={cart.length} color="primary">
                  <ShoppingCartIcon />
            </Badge>
            </li></Link>

    
          </ul>
        </Toolbar>
      </AppBar>
      </div>: 
      <div>
        <AppBar position='fixed' className={classes.appbar} >
            <Toolbar>
            <p className='title'>Figo</p>
                <div className={classes.menu}>
                  <IconButton  onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                  
                    className={classes.test}
                    anchor={"right"}
                    open={drawer}
                    onClose={toggleDrawer(false)}
                  > 
                    <List>
                    <Link className={classes.linkColor} to='/'>
                        <ListItem>
                        Home
                      </ListItem>
                      </Link>
                      <Link className={classes.linkColor} to='/menu'>
                        <ListItem>
                        Menu
                      </ListItem>
                      </Link>
                      <ListItem>
                       Services
                      </ListItem>
                      <ListItem>
                       Sign in 
                      </ListItem>
                      
                      <Link to='/cart'>
                      <ListItem>
                      <Badge badgeContent={cart.length} color='primary'>
                       <ShoppingCartIcon />
                       </Badge>
                      </ListItem>
                      </Link>
                      
                    </List>

                  </Drawer>

                </div>
            </Toolbar>
          </AppBar>  
      </div>
      }
   
        </div>
    )
}

export default NavBar
