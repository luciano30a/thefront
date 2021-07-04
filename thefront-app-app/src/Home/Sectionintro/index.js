import React from "react";
import styles from "./Styles";
import { Title, Body, Subtitulo } from "../../componets/Text";
import Grid  from "@material-ui/core/Grid";

  
const Sectionintro = () =>
{
    const classes = styles();
    return(
        <div>
            <Grid container justify="center" >
                <Grid item md={3}>
                    <Title text="Build assemble React apps with speed"
                    style={{textAlign:"center"}}

                    />
                    
            <Body text="Build a beautiful, modern website with flexible, 
            fully customizable, atomic Material UI components."
                        style={{textAlign:"center", color:"#718096"}}
            />
                </Grid>
            </Grid>

            <Grid container justify="center" spacing={8}>
                <Grid item md={4}>
                <Subtitulo text="buit for developers" />
                <Body text="TheFront is built to make your life easier.
             Variables, build tooling, documentation, and reusable 
             components." 
             style={{ color:"#718096"}}/>
                </Grid>
                <Grid item md={4}>
               <Subtitulo text="Designed to be modern"/>
                    <Body text="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful." 
                    style={{ color:"#718096"}} />
                </Grid>

                <Grid item md={4}>
                <Subtitulo text="Documentation for everything"/>
                <Body text=" Weve written extensive documentation for components and tools so you never have to reverse engineer anything." 
                style={{ color:"#718096"}}/>
                    </Grid>




            </Grid>
        </div>
    );
};
export default Sectionintro;