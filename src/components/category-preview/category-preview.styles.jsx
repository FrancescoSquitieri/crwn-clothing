import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const CategoryPreviewTitle = styled.span`
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */        
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
`
export const CategoryPreviewItems = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
`