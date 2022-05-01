import React, { useState } from 'react';
import styled from 'styled-components';
import Star from '../images/icon-star.svg';
import Thanks from '../images/illustration-thank-you.svg'
// import { Container } from './styles';

function Rating() {
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(false)
    const ratingNumbers = [1, 2, 3, 4, 5];

    const handleSubmit = () => {
        setRated(true);
    }

    return <Container>
        {!rated ? 
        <React.Fragment>
            <IconRating>
                <img src={Star} alt="Star on top of the rating" />
            </IconRating>
            <ContentRating>
                <TitleRating>How did we do?</TitleRating>
                <DescriptionRating>
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                </DescriptionRating>
            </ContentRating>
            <RatesContainer>
                {ratingNumbers.map((element) => {
                    return (
                    <NumbersContainer
                        key={element}
                        onClick={() => setRating(element)}
                        style={{ backgroundColor: rating === element ? "#7c8798" : "" }}
                    >
                        <Number>{element}</Number>
                    </NumbersContainer>)
                })}
            </RatesContainer>
            <ButtonContainer>
                <Button onClick={(e) => handleSubmit(e)}>SUBMIT</Button>
            </ButtonContainer>
        </React.Fragment> : 
        <React.Fragment>
            <ThanksImage>
                <img src={Thanks} alt="Thanks for voting" />
            </ThanksImage>
            <VotedValue>You selected {rating} out of 5</VotedValue>
            <ContentThanks>
                <TitleThanks>Thank you!</TitleThanks>
                <DescriptionThanks>
                We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
                </DescriptionThanks>
            </ContentThanks>
        </React.Fragment>}
    </Container>
}

const Container = styled.div
`
    min-height: 336px;
    width: 330px;
    background: linear-gradient(180deg, rgb(34, 41, 51) 0%, rgb(15, 22, 31) 100%);
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px
`;

const IconRating = styled.div
`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #262f39;
`;

const ContentRating = styled.div
`
    text-align: left;
`;

const TitleRating = styled.h2
`
  padding-top: 1.5rem;
  margin-bottom: 0;
`;

const DescriptionRating = styled.p
`
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  opacity: 0.6;
`;

const RatesContainer = styled.div
`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 15px
`;

const NumbersContainer = styled.div
`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #262f39;
    transition: background-color 200ms linear;
    &:hover {
        cursor: pointer;
        background-color: #ef7613;
    }
`;

const Number = styled.p
`
    opacity: 0.6;
`

const ButtonContainer = styled.div
`
    width: 100%;
    height: 40px;
    background-color: transparent;
    padding-top: 30px;
`;

const Button = styled.button
`
    background-color: #ef7613;
    width: 100%;
    height: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border: none;
    letter-spacing: 2px;
    color: white;
    font-weight: 700;
    transition: background-color 130ms linear;
    &:hover{
        background-color: whitesmoke;
        cursor: pointer;
        color: #ef7613;
    }
`;

const ThanksImage = styled.div
`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-self: center;
`;

const VotedValue = styled.p
`
    text-align: center;
    color: #ef7613;
    background-color: #262f39;
    align-self: center;
    padding: 7px 20px 7px 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
`;

const ContentThanks = styled.div
`
    justify-content: center;
`;

const TitleThanks = styled.h2
`
  margin-bottom: 0;
`;

const DescriptionThanks = styled.p
`
    opacity: 0.6;
    text-align: center;
`;

export default Rating;