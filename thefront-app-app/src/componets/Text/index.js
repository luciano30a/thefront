import { Style } from "@material-ui/icons";
import React from "react";
import styles from "./styles"


const Title = ( { text,style } ) =>
{
    const classes = styles();
    return <h2 className={classes.Title} style={style}>{text}</h2>;
};

const Subtitulo = ( { text,style } ) =>
{const classes = styles();
    return <h3 className={classes.Subtitulo} style={style}>{text}</h3>;
};

const Body = ( { text,style} ) =>
{const classes = styles();
    return <p className={classes.Body} style={style}>{text}</p>;
};
export { Title, Subtitulo, Body };