import styled from 'styled-components';

export const ContainerWrap = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
  width: 100%;
`;

export const EllipsisOne = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const EllipsisTwo = styled.div`
  display: -webkit-box;
  line-height: 1.2;
  height: 2.6em;
  word-break: break-word;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
