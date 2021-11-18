import React from 'react'; 
import { Link } from 'react-router-dom';

// CSS
import styled from "styled-components";
import './week.css';


const Main = (props) => {

    // 날짜 배열 생성
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    // 난수 생성
    const randArray = []
    for(let j=0; j<week.length; j++) {
        const rand = Math.floor(Math.random()*5);
        randArray.push(rand);
    } 

    // 리스트 배열 생성 (이걸 컴포넌트로?...)
    const circleArray = week.map((arr,index) => (
        <CircleBar key={week[index]}>
            <p>{week[index]}</p>
            <div style={{display:'flex',margin:'0px'}}>
                <Circle className={randArray[index] >= 0 ? 'yellow' : null} />
                <Circle className={randArray[index] >= 1 ? 'yellow' : null} />
                <Circle className={randArray[index] >= 2 ? 'yellow' : null} />
                <Circle className={randArray[index] >= 3 ? 'yellow' : null} />
                <Circle className={randArray[index] >= 4 ? 'yellow' : null} />
            </div>
            <div className='circle'></div>
            <Link to={`/review/${week[index]}`}><Tryangle/></Link>
        </CircleBar>
      )
    )

    console.log(circleArray[0].key)

    return (
        <div>
            <h2 style={{textAlign:'center',fontSize:'20px'}}>내 일주일은 어땠나요?</h2>
            {circleArray}
        </div>
    )
        
}

// Styled Component
const CircleBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size:18px;
        font-weight:bold;
    }
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    border:1px solid #ccc;
    border-radius:50%;
`;

const Tryangle = styled.div`
    appearance: none; // 크로스브라우징?
    width: 0px;
    height: 0px;
    border-top:1rem solid transparent;
    border-bottom:1rem solid transparent;
    border-left: 1.5rem solid #ff9000;
    cursor: pointer;
`;

export default Main