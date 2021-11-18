import React,{ useState, useEffect } from 'react'; 

// CSS
import styled from "styled-components";
import './week.css';

function Review(props) {

    // useState 불린배열값을 바꾼다.false가 true로 변하면 yellow 클래스 추가
    const [clicked, setClicked] = useState([false, false, false, false, false]);
  
    // 클릭시 일어나는 이벤트
    const handleCircleClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            if (i <= index) clickStates[i] = true;
            else clickStates[i] = false;  
        }

    setClicked(clickStates);
    };

    // 뒤로가기
    const goBack = () => {
        props.history.goBack();
    }

    // 주소값의 :day를 받아옵니다.
    const toDay = props.match.params.day

    // 키보드 이벤트
    useEffect(() => {
        const keyEvent = (e) => {
            if(e.key === '1') handleCircleClick(e, 0);
            if(e.key === '2') handleCircleClick(e, 1);
            if(e.key === '3') handleCircleClick(e, 2);
            if(e.key === '4') handleCircleClick(e, 3);
            if(e.key === '5') handleCircleClick(e, 4);
            console.log('hj');
          }
        // uesEffect 에 넣고 윈도우에 이벤트 추가해줘야 먹는다..
        window.addEventListener("keydown", keyEvent);
    
        return () => window.removeEventListener("keydown", keyEvent);
      }
    )


    return (
        <div >
            <h2 style={{fontSize:'18px',textAlign:'center'}}><SpanColor>{toDay}요일</SpanColor> 평점남기기</h2>
            <CircleBar tabIndex = "0" >
                <Circle
                    onClick={(e) => handleCircleClick(e, 0)} 
                    className={clicked[0] ? 'yellow' : null}
                />
                <Circle 
                    onClick={(e) => handleCircleClick(e, 1)} 
                    className={clicked[1] ? 'yellow' : null}
                />
                <Circle 
                    onClick={(e) => handleCircleClick(e, 2)} 
                    className={clicked[2] ? 'yellow' : null}
                />
                <Circle 
                    onClick={(e) => handleCircleClick(e, 3)} 
                    className={clicked[3] ? 'yellow' : null}
                />
                <Circle 
                    onClick={(e) => handleCircleClick(e, 4)} 
                    className={clicked[4] ? 'yellow' : null}
                />
            </CircleBar>
            <BackBtn onClick={goBack}>평점남기기</BackBtn>
        </div>
        )
}

// Styled Component
const CircleBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0px;

`;


const SpanColor = styled.span`
    padding: 0.4rem 0.4rem;
    background: #ffd700;
    color: #fff;
    border-radius: 1rem;
    font-size: 18px

`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    border:1px solid #ccc;
    border-radius:50%;
    cursor:pointer
`;

const BackBtn = styled.button`
    width:60%;
    height:3rem;
    border: none;
    margin: auto 20%;
    cursor: pointer;
    background: #ff9000;
    color :#fff;
    font-size : 17px;
    font-weight:bold;
    border-radius:10px
`

export default Review


// 참조 별점만들기 https://ichi.pro/ko/css-mich-reactleul-sayonghayeo-byeolpyo-pyeongjeom-eul-mandeuneun-bangbeob-101140130179867