import React from "react";
import styles from "./styles"


const Title = ( { text } ) =>
{const classes = styles();
    return <h2 className={classes.Title}>{text}</h2>;
};

const Subtitulo = ( { text } ) =>
{const classes = styles();
    return <h3 className={classes.Subtitulo}>{text}</h3>;
};

const Body = ( { text } ) =>
{const classes = styles();
    return <p className={classes.Body}>{text}</p>;
};
export { Title, Subtitulo, Body };