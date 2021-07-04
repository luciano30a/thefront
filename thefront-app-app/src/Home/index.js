import React from 'react';
import ButtonPrimary from '../componets/ButtonPrimary';
import ButtonSecundary from '../componets/ButtonSecundary';
import {Title,Subtitulo,Body} from '../componets/Text';
const Home = () =>
{
    return <div>
        <ButtonPrimary title="Get started" />
        <ButtonSecundary title="Documentation" />
        <Title  text="A modern design system for your new" />
        <Subtitulo  text="Less code. More speed" />
        <Body text="theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications." />



    </div>;





}
export default Home;


