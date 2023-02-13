
import React, {  } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar , Button } from 'antd';
import Slider from "react-slick";
import * as CS from '../../../../assets/styles/CommonStyles'
import * as S from './DealDetail.styles'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const itemInfo = {
  id: 'item01',
  user: {
    nickname : '국민',
    location : '김포시 운양동'
  },
  images: ['https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg'],
  title: '아이맥 m1 Apple 2021 아이맥 24',
  category: '디지털기기',
  price: 1200000,
  contents: `풀박스 a급 m1 8core`,
  like: 24,
  chat: 10
};

export default function DealDetailLayout () {

  return (
    <>
      <S.SlickWrap>
        <Slider {...settings}>
          {itemInfo.images.map(el => (
            <S.ImgWrap>
              <img alt="example" src={el} />
            </S.ImgWrap>
          ))}
        </Slider>
      </S.SlickWrap>
      <CS.ContainerWrap>
        <S.AvatarWrap>
          <Avatar size={56} icon={<UserOutlined />} />
          <S.AvatarInfo>
            <p>{ itemInfo.user.nickname }</p>
            <p>{ itemInfo.user.location }</p>
          </S.AvatarInfo>
        </S.AvatarWrap>
        <S.ItemInfo>
          <S.InfoTitle>{ itemInfo.title }</S.InfoTitle>
          <S.InfoCategory>{ itemInfo.category }</S.InfoCategory>
          <S.InfoPrice>{ itemInfo.price }원</S.InfoPrice>
          <S.InfoContents>{ itemInfo.contents }</S.InfoContents>
          <S.InfoUtiles>
            <p>
              <span>관심</span><span>{ itemInfo.like }</span>
            </p>
            <p>
              <span>채팅</span><span>{ itemInfo.chat }</span>
            </p>
          </S.InfoUtiles>
        </S.ItemInfo>
        <S.BtnWrap>
          <Button type="primary" ghost shape="round" size='large'>
            판매자와 채팅하기
          </Button>
        </S.BtnWrap>
      </CS.ContainerWrap>
    </>
  );
};