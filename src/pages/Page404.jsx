import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
    text-align: center;
    font-family: 'Gilda Display', serif;
    font-size: 95px;
    font-style: italic;
    text-align: center;
    width: 100px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -60px;
    right: 0;
    animation: noise 2s linear infinite;
    overflow: default;
    &:after {
        content: '404';
        font-family: 'Gilda Display', serif;
        font-size: 100px;
        font-style: italic;
        text-align: center;
        width: 150px;
        height: 60px;
        line-height: 60px;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        color: blue;
        animation: noise-1 .2s linear infinite;
    }
    &:before {
        content: '404';
        font-family: 'Gilda Display', serif;
        font-size: 100px;
        font-style: italic;
        text-align: center;
        width: 100px;
        height: 60px;
        line-height: 60px;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        color: red;
        animation: noise-2 .2s linear infinite;
    }
`
const Info = styled.span`
    text-align: center;
    font-family: 'Gilda Display', serif;
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 140px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: noise-3 1s linear infinite;
`
const Page404 = () => {
    return (
        <>
            <Error>404</Error>
            <br /><br />
            <Info>Site not found</Info>
        </>
    )
}

export default Page404