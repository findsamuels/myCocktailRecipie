import { SvgIcon } from "@mui/material";
import React from "react";
import classes from './Icon.module.scss'


const Icon = ({ ...props }) => {
  return <SvgIcon fontSize='medium'  className={`${classes.Icon} `} component={props.icon} {...props} />

};

export default Icon;