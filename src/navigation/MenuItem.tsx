import React from "react";
import { IRouteMappingProps } from "../models/IRouteMappingProps";
import { ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Home } from "@material-ui/icons";
import { Observable } from "rxjs";

interface Props extends IRouteMappingProps {
  otherItemSelected: Observable<any>;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  image: {
    height: 40,
    width: 90,
    marginRight: '1rem !important',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageButton': {
        backgroundColor: theme.palette.action.hover
      },
      // '& $imageMarked': {
      //   opacity: 1,
      // },
      // '& $imageTitle': {
      //   border: '4px solid currentColor',
      // },
    }
  },
  imageButton: {
    textDecoration: 'none',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default
  },
  imageButtonSelected: {
    textDecoration: 'none',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.action.selected
  },
  imageTitle: {
    position: 'relative',
    color: theme.palette.text.primary
  },
  imageMarked: {
    width: '0%',
    opacity: 1,
    transition: theme.transitions.create(['opacity', 'width'], {duration:200})
  },
  imageClicked: {
    height: 2,
    width: '100%',
    opacity: 1,
    backgroundColor: theme.palette.text.primary,
    position: 'absolute',
    left: 0,
    bottom: -1,
    transition: theme.transitions.create(['opacity', 'width'], {duration:200})
  }
}));

export default function MenuItem(props: Props) {
  const classes = useStyles();

  const path = props.mapping.path;
  const name = path.replace('/', '');


  const [isSelected, setIsSelected] = React.useState(() => false);
  props.otherItemSelected.subscribe(value => setIsSelected(false));

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        className={classes.image}
        onClick={event => setIsSelected(true)}>
        <Link className={isSelected ? classes.imageButtonSelected : classes.imageButton}
              to={path}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {
              name === ''
                ? <Home />
                : name
            }

            <span className={isSelected ? classes.imageClicked : classes.imageMarked}/>
          </Typography>
        </Link>
      </ButtonBase>
    </div>
  );
}
