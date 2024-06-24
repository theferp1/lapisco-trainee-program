import React, { useState, useEffect } from 'react';
import { Container, ContainerBalls, Ball, BallRed, Number, NumberRed, LabelBall, LabelBallRed } from "./style";

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
            <ContainerBalls>
                <Ball>
                    <Number>9</Number>
                </Ball>
                <LabelBall>years</LabelBall>
            </ContainerBalls>
            <ContainerBalls>
                <Ball>
                    <Number>61</Number>
                </Ball>
                <LabelBall>members</LabelBall>
            </ContainerBalls>
            <ContainerBalls>
                <Ball>
                    <Number>38</Number>
                </Ball>
                <LabelBall>projects</LabelBall>
            </ContainerBalls>
            <ContainerBalls>
                <Ball>
                    <Number>251</Number>
                </Ball>
                <LabelBall>papers</LabelBall>
            </ContainerBalls>
            <ContainerBalls>
                <BallRed>
                    <NumberRed>{coffees}</NumberRed>
                </BallRed>
                <LabelBallRed>coffes</LabelBallRed>
            </ContainerBalls>
        </Container>
    );
}

export default Counter;
