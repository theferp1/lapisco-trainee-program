import styled from "styled-components";


export const Container01 = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 40%;
`

export const ImgBg = styled.img`
    background-image: url(Bg);
    background-image: url('sua-imagem.jpg'); /* Caminho para a sua imagem */
    background-size: cover; /* Ajusta a imagem para cobrir toda a tela */
    background-position: center; /* Centraliza a imagem */
    background-attachment: fixed; /* Faz a imagem ficar fixa no fundo */
    width: 100%;
    height: auto;
`
export const Container02 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 200px;


    
`

export const Bar = styled.div`
    width: 40%;
    height: 25px;

    background-color: #C34036;
`

export const Circle = styled.div`
    width: 20%;
    height: fit-content;

    border-radius: 50%;
    background-color: #001B2E;
`