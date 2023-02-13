
import React, {  } from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import * as CS from '../../../../assets/styles/CommonStyles'
import * as S from './DealLists.styles'

const { Title } = Typography;
const itemList = [
  {
    id : 'item01',
    thumnail: 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg',
    title: '아이맥 m1 Apple 2021 아이맥 24',
    price: 1200000,
    user: {
      nickname: '국민',
      location: '김포시 운양동'
    },
    like : 24,
    chat : 10
  },
  {
    id : 'item02',
    thumnail: 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg',
    title: '아이맥 m1 Apple 2021 아이맥 24',
    price: 1200000,
    user: {
      nickname: '국민',
      location: '김포시 운양동'
    },
    like : 24,
    chat : 10
  },
]

export default function DealListsLayout () {

  return (
    <CS.ContainerWrap style={{paddingTop: '32px' }}>
      <S.TitleWrap>
        <Title level={2}>중고거래 인기매물</Title>
      </S.TitleWrap>
      <Row className='' gutter={16}>
        {
          itemList.map((el , idx) => (
            <Col className="gutter-row" span={12} key={idx}>
              <Link to={`/deal/${el.id}`}>
                <S.CardItem
                  hoverable
                  cover={<img alt="example" src={el.thumnail} />}
                >
                  <CS.EllipsisOne>{ el.title }</CS.EllipsisOne>
                  <p>{ el.price }원</p>
                  <p>{ el.user.location }</p>
                  <S.InfoUtiles>
                    <p>
                      <span>관심</span><span>{ el.like }</span>
                    </p>
                    <p>
                      <span>채팅</span><span>{ el.chat }</span>
                    </p>
                  </S.InfoUtiles>
                </S.CardItem>
              </Link>
            </Col>
          ))
        }
      </Row>
    </CS.ContainerWrap>
  );
};
