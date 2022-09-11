import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: min(601px, 100%);
  
  @media(min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
` 
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  text-align: left;
  
  padding: 8px 15px;
` 
export const Title = styled.h1`
  font-weight: bold;
  font-size: 22px;
` 
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  
  border-radius: 50%;
  
  background: var(--gray);
`
export const WriteTweet = styled.div`
  height: 150px;
  width: 100%;
  
  position: relative;

  padding: 24px 80px;
  
  border-bottom: 1px solid var(--outline);
`
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  
  object-fit: cover;
  
  border-radius: 50%;
  
  position: absolute;
  top: 8px;
  left: 8px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 100%;
`
export const WritterTweet = styled.input`
  font-size: 22px;
  
  &:focus {
    outline: none;
  }
`
export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const BottomIcon = styled.img`
  width: 20px;
  height: 20px;
`

interface Props {
  outlined?: boolean;
}


export const Button = styled.button<Props>`
  position: absolute;
  bottom: 8px;
  right: 8px;

  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`
export const TweetsWrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
`

