import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, IconButton, Button, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuColor: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  menuLink: {
    textDecoration: "none",
    color: "white",
    padding: "10px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.menuColor}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Button>
              <Link className={classes.menuLink} to='/'>
                Home
              </Link>
            </Button>
          </div>
          <Button>
            <Link to='/create' className={classes.menuLink}>
              Create
            </Link>
          </Button>
          <Button color='inherit' className={classes.menuLink}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
