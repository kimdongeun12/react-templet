
import styled from 'styled-components';

export const SlickWrap = styled.div`
  display: block;
  padding-bottom: 32px;
  overflow: hidden;
  .slick-dots {
    bottom: 16px;
  }
`
export const ImgWrap = styled.div``
export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #bdbdbd;
`
export const AvatarInfo = styled.div`
  padding-left: 8px;
  p + p {
    padding-top: 8px;
  }
`
export const ItemInfo = styled.div`
  padding-top: 16px;
  p + p {
    margin-top: 8px;
  }
`
export const InfoTitle = styled.p`
  font-size: 16px;
`
export const InfoCategory = styled.p`
  font-size: 12px;
  color: #999999;
`
export const InfoPrice = styled.p`
  font-size: 18px;
`
export const InfoContents = styled.p`
  font-size: 14px;
`
export const InfoUtiles = styled.div`
  font-size: 14px;
  color: #999999;
  p {
    display: inline-block;
  }
  p + p {
    padding-left: 8px;
  }
`
export const BtnWrap = styled.div`
  padding-top: 16px;
  display: block;
  button {
    width: 100%;
  }
`