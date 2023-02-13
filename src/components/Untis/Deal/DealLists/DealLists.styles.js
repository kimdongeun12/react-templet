import { Card } from 'antd';
import styled from 'styled-components';


export const TitleWrap = styled.div`
  padding-bottom: 16px;
  h2 {
    font-size: 21px;
    text-align: center;
    margin-bottom: 0;
  }
`
export const CardItem = styled(Card)`
  .ant-card-body{
    padding: 16px;
  }
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
