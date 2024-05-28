import React, { useState, useEffect } from 'react';
import { Container, ContainerYears, ContainerMembers, ContainerProjects, ContainerPapers, ContainerCoffes, Ball, BallRed, Number, NumberRed, LabelBall, LabelBallRed } from "./style";

const Counter = () => {
    const [coffees, setCoffees] = useState(70);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setCoffees((prevCoffees) => prevCoffees + 1);
        }, 600); // Incrementa a cada 1 segundo

        return () => clearInterval(intervalo);
    }, []);

    return (
        <Container>
            <ContainerYears>
                <Ball>
                    <Number>9</Number>
                </Ball>
                <LabelBall>years</LabelBall>
            </ContainerYears>
            <ContainerMembers>
                <Ball>
                    <Number>61</Number>
                </Ball>
                <LabelBall>members</LabelBall>
            </ContainerMembers>
            <ContainerProjects>
                <Ball>
                    <Number>38</Number>
                </Ball>
                <LabelBall>projects</LabelBall>
            </ContainerProjects>
            <ContainerPapers>
                <Ball>
                    <Number>251</Number>
                </Ball>
                <LabelBall>papers</LabelBall>
            </ContainerPapers>
            <ContainerCoffes>
                <BallRed>
                    <NumberRed>{coffees}</NumberRed>
                </BallRed>
                <LabelBallRed>coffes</LabelBallRed>
            </ContainerCoffes>
        </Container>
    );
}

export default Counter;
