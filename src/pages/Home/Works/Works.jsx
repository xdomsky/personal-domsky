import React from 'react'
import styled from 'styled-components'
import img1 from "./01.png";
import img2 from "./02.png";
import img3 from "./03.png";
import img4 from "./04.png";

const ContainerWork = styled.section``
const Container = styled.div`
    margin-top: 2rem;
    h4 {
        font-size: 3vw;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
    @media screen and (max-width: 1024px) {
        h4 {
            font-size: 6vw;
        }
    }
`

const NumberTitle = styled.div`
    span {
        font-size: 2vw;
        font-weight: 700;
        font-family: "Bai Jamjuree", sans-serif;
        color: var(--main-color);
    }
    @media screen and (max-width: 768px) {
        span {
            font-size: 4vw;
            font-weight: 700;
            font-family: "Bai Jamjuree", sans-serif;
        }
    }
`
const LinkStyle = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    padding: 0px 4vw;
    color: var(--text-color);
    text-decoration: none;
    @media screen and (max-width: 768px) {
        padding: 0px 10vw;
        flex-direction: column;
    }
`
const ImageItem = styled.div`
    z-index: 1;
`
const Item = styled.div`
    padding: 20px;
    position: relative;
    width: 40vw;
    height: 35vw;
    left: 0px;
    filter: grayscale(100%) brightness(0.5);
    @media screen and (max-width: 768px) {
        width: 80vw;
        height: 80vw;
    }
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 1s;
    }
`
const TextContainer = styled.div`
    margin-left: 4vw;
    @media screen and (max-width: 768px) {
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContainer3 = styled.div`
    display: none;
    margin-left: 4vw;
    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContainer2 = styled.div`
    margin-right: 4vw;
    @media screen and (max-width: 768px) {
        display: none;
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContent = styled.div`
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`
const Title = styled.div`
    display: flex;
    h1 {
        font-family: "Bai Jamjuree", sans-serif;
        font-size: 5vw;
        margin: 0px;
        line-height: 95%;
        font-weight: 600;
        text-transform: uppercase;
    }
`
const Para = styled.div`
    font-size: 2vw;
    line-height: 120%;
    text-transform: uppercase;
    max-width: 80%;
    p {
        font-size: inherit;
        text-transform: uppercase;
        line-height: 110%;
        margin-bottom: 6vw;
    }
    a {
        color: var(--text-color);
        pointer-events: auto;
        text-decoration: none;
        font-size: inherit;
        position: relative;
        z-index: 2;
        text-transform: uppercase;
    }
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        margin-left: 0vw;
        margin-bottom: 4vw;
    }
`
const LinkTest = styled.div`
    display: flex;
    align-items: center;
`
const ItemTest = styled.div`

`
const ItemLink = styled.a`
    color: #fff;
    display: inline-flex;
    z-index: 1;
    position: relative;
    text-decoration: none;
    margin: 10px;
    &:before {
        content: '';
        position: absolute;
        display: flex;
        bottom: 0;
        left: -10px;
        height: 50%;
        width: 0;
        background: var(--main-color);
        z-index: -1;
        transition: 0.3s;
    }
    &:hover {
        &:before {
            width: calc(100% + 20px);
        }
    }
`
const Work = () => {
    return (
        <ContainerWork id="works">
            <NumberTitle>
                <span>02/</span>
            </NumberTitle>
            <Container>
                <LinkStyle>
                    <ImageItem>
                        <Item>
                            <Image>
                                <img src={img1} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer>
                        <TextContent>
                            <Title>
                                <h1>ANMAR-MEBLE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project01">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer>
                </LinkStyle>
                <LinkStyle>
                    <TextContainer2>
                        <TextContent>
                            <Title>
                                <h1>TERRANITA</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project02">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer2>
                    <ImageItem>
                        <Item>
                            <Image>
                                <img src={img2} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer3>
                        <TextContent>
                            <Title>
                                <h1>TERRANITA</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project02">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer3>
                </LinkStyle>
                <LinkStyle>
                    <ImageItem>
                        <Item>
                            <Image>
                                <img src={img3} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer>
                        <TextContent>
                            <Title>
                                <h1>ECOLOGY SITE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project03">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer>
                </LinkStyle>
                <LinkStyle>
                    <TextContainer2>
                        <TextContent>
                            <Title>
                                <h1>SHOP TABLES</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project04">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer2>
                    <ImageItem>
                        <Item>
                            <Image>
                                <img src={img4} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer3>
                        <TextContent>
                            <Title>
                                <h1>SHOP TABLES</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="/project04">Preview Project</ItemLink><ItemLink href="https://github.com/" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer3>
                </LinkStyle>
            </Container>
        </ContainerWork>
    )
}

export default Work