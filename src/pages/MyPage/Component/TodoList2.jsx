import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  BsChevronCompactLeft, 
  BsChevronCompactRight, 
  BsPlusSquare, 
  BsDashSquare,
  BsChevronDown, 
  BsChevronUp 
} from "react-icons/bs";
import axios from 'axios';

// 전체 컨테이너
const Container = styled.div`
  width: 375px;
  height: 812px;

  background-color: #F7F6F2;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  /* hr .css */
  .tophr {
    width:375px;
    border: 1px solid black;
  }
`;

// *******************************************TopBar***********************************************

//  Musterd 글씨와 프사 있는 TopBar
const TopBar = styled.div`
  height: 49px;

  display: flex;
`;

// Musterd 텍스트
const MusterdText = styled.div`
  width: 58px;
  height: 20px;

  font-size: 15px;

  margin: 14px 239px 15px 25px;
  
  display: flex;
  align-items: center;
  justify-content: center;

`;

// 프사
const ProfilePic = styled.div`
  width: 29px;
  height: 29px;

  margin-right: 24px;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: #F2C93F;
`;

// ******************************************Calendar***********************************************

// 캘린더 박스
const Calendar = styled.div`
  width: 88px;
  height: 21px;

  margin-top: 17px;
  margin-left: 272px;

  background-color: #F2C93F;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Calendar 텍스트
const CalendarText = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
// ***********************************************************************************************

// 날짜 컨테이너
const DateBody = styled.div`
  height: 90px;

  padding-top: 9px;

  display: flex;
  align-items: center;
`;

//  좌우버튼 , 연도 , 날짜 , 요일 컨테이너
const DateContainer = styled.div`
  height: 46px;

  display: flex;
  align-items: flex-end;
`;


// 연도
const NowYear = styled.div`
  width: 60px;
  height: 10px;
  font-size: 10px;

  display: flex;
  justify-content: center;
`;

// 날짜
const NowDate = styled.div`
  font-size: 30px;
`;

// 요일
const DayWeek = styled.div`
  width: 60px;
  height: 10px;
  font-size: 10px;

  display: flex;
  justify-content: center;
`;

//***************************************************************************************************

// Todo / Done 버튼 컨테이너
const DoneContainer = styled.div`
  height: 58px;

  display: flex;
  justify-content: center;
`;

// Todo 버튼
const TodoButton = styled.div`
  width: 188px;
  height: 58px;

  background-color: #F2C93F;
  border: 1px solid black;
  font-size: 15px;
  font-weight: 900; 

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Done 버튼
const DoneButton = styled.div`
  width: 188px;
  height: 58px;

  border: 1px solid black;
  font-size: 15px;
  font-weight: 900;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//********************************************************************************

// 플러스 마이너스 버튼 컨테이너
const PlusMinusContainer = styled.div`
  height: 24px;

  margin-top:20px;

  display: flex;
`;

// ***********************************************************************************

// 전체적인 플랜박스들을 담는 컨테이너
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

// 체크박스 , 플랜 을 담는 컨테이너
const PlanContainer = styled.div`
  width: 333px;
  height: 49px;

  display: flex;
  align-items: center;
`;

// 체크박스
const CheckBox = styled.div`
  width:24px;
  height: 24px;

  margin-right: 18px;

  border: 1px solid black;
  background-color: blue;
`;

// 플랜 박스
const PlanBox = styled.div`
  width: 273px;
  height: 49px;

  display: flex;
  align-items: center;
`;

// 플랜의 날짜 박스
const PlanTime = styled.div`
  width: 45px;
  height: 15px;

  margin-right: 7px;

  font-size: 10px;
`;

// 플랜 내용 박스 
const PlanBody = styled.div`
  width: 150px;
  height: 20px;

  font-size: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 장소버튼
const PlaceButton = styled.div`
  width: 56px;
  height: 24px;
  border: 1px solid black;
  margin-right: 14px;

  background-color: #F3C93F;
  font-size: 15px;
  font-weight: 900px;

  display: flex;
  justify-content: center;
  align-items: center;

`;





const TodoList2 = ({ apiUrl }) => {
  
  return (
    <Container>
      {/* TopBar */}
      <TopBar>
        <MusterdText>Musterd</MusterdText>
        <ProfilePic />
      </TopBar>
      <hr className='tophr'></hr>
      {/* 캘린더 버튼 */}
      <Calendar>
        <CalendarText>Calendar</CalendarText>
        <BsChevronDown size='15'/>
        </Calendar>
      {/* 날짜 파트 */}
      <DateBody>
        <DateContainer>
          <BsChevronCompactLeft style={{fontSize:'30px'}} />
          <NowYear>2022</NowYear>
          <NowDate>8.17</NowDate>
          <DayWeek>Wedsday</DayWeek>
          <BsChevronCompactRight style={{fontSize:'30px'}} />
        </DateContainer>
      </DateBody>
      {/* Todo / Done 버튼 */}
      <DoneContainer>
        <TodoButton>To Do</TodoButton>
        <DoneButton>Done</DoneButton>
      </DoneContainer>
      {/* 플러스 마이너스 버튼  */}
      <PlusMinusContainer>
        <BsPlusSquare style={{backgroundColor:' #F3C93F', marginLeft:'268px', marginRight:'33px'}} size='24' />
        <BsDashSquare style={{backgroundColor:' #F3C93F', marginRight:'26px'}} size='24' />
      </PlusMinusContainer>
      {/* 플랜 파트 */}
      <MainContainer>
        <PlanContainer>
        <CheckBox />
        <PlanBox>
          <PlanTime>10:00 PM</PlanTime>
          <PlanBody>산쪼메 먹으러 가기</PlanBody>
          <PlaceButton>Place</PlaceButton>
        </PlanBox>
        </PlanContainer>
      </MainContainer>
      
    </Container>
  );
};

export default TodoList2;