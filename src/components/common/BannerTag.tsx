import React from 'react';
import styled, {keyframes} from 'styled-components';

// icons
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight,
     AiOutlineArrowUp, AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface ButtonProps{
	width?: string;
	height?: string;
	bgColor?: string;
	borderRadius?: string;
	borderSize?: number; 
	borderColor?: string; 
	textColor?:string; 
	svgWidth? :string; 
	svgHeight? :string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextButtonProps extends ButtonProps{
}

const BannerTag : React.FC = (): JSX.Element => {   
	return(
        <BannerTagContainer>
            <TextTagContainer height="30px" bgColor="var(--tag-pink)" borderRadius="20px">
              <span className="Label"> #세계여행 </span>
            </TextTagContainer>
            <ArrowTagContainer height="30px" bgColor="var(--white-hunt)" borderRadius="50%">
              <AiOutlineArrowLeft width="10px" height= "10px" />
            </ArrowTagContainer>
            <TextTagContainer height="30px" bgColor="var(--tag-yellow)" borderRadius="20px">
              <span className="Label"> #밈고리즘 </span>
            </TextTagContainer>
            <TextTagContainer height="30px" bgColor="var(--white-primary)" borderColor="var(--tag-peach)" borderSize={2} borderRadius="20px">
              <span className="Label"> #배우는여행중 </span>
            </TextTagContainer>
            <TagContainer width="30px" height="30px" bgColor="var(--tag-beige)" borderRadius="50%" />
            <ArrowTagContainer height="30px" bgColor="var(--white-hunt)" borderRadius="50%">
              <AiOutlineArrowDown width="10px" height= "10px" />
            </ArrowTagContainer>
            <TextTagContainer height="30px" bgColor="var(--tag-orange)" borderRadius="20px">
              <span className="Label"> #림툰 </span>
            </TextTagContainer>
            <TagContainer width="30px" height="30px" bgColor="var(--tag-blue)" borderRadius="50%" />
            <TextTagContainer height="30px" bgColor="var(--white-primary)" borderColor="var(--tag-green)" borderSize={2} borderRadius="20px">
              <span className="Label"> #성수동맛집 </span>
            </TextTagContainer>
            <ArrowTagContainer height="30px" bgColor="var(--white-hunt)" borderRadius="50%">
              <AiOutlineArrowRight width="10px" height= "10px" />
            </ArrowTagContainer>
            <TagContainer width="30px" height="30px" bgColor="var(--tag-purple)" borderRadius="50%" />
            <TextTagContainer height="30px" bgColor="var(--tag-orange)" borderRadius="20px">
              <span className="Label"> #새로 뜨는 영상 </span>
            </TextTagContainer>
            <ArrowTagContainer height="30px" bgColor="var(--white-hunt)" borderRadius="50%">
              <AiOutlineArrowUp width="10px" height= "10px" />
            </ArrowTagContainer>
            <BgchangeTagContainer height="30px" bgColor="var(--tag-pink)" borderRadius="20px">
              <span className="Label"> #최근에 업로드 된 블로그 </span>
            </BgchangeTagContainer>
            <TagContainer height="30px" bgColor="var(--white-primary)" borderRadius="50%">
              <AiFillHeart color="var(--icon-red)"/>
            </TagContainer>
            <TagContainer height="30px" bgColor="var(--white-primary)" borderRadius="50%">
              <AiOutlineHeart color="var(--icon-red)"/>
            </TagContainer>
            <TagContainer width="5.5rem" height="30px" bgColor="var(--tag-mint)" borderRadius="20px">
              <AiOutlineArrowLeft color="var(--white-primary)"/>
            </TagContainer>
        </BannerTagContainer>
    )
}

export default BannerTag;

const BannerTagContainer = styled.div`
	position:relative ;
	display:flex ;  
	flex-wrap: wrap ;
    
`;

const TagContainer = styled.button<ButtonProps>`
	width: ${({ width }) => (width ? width : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 'none')};
	border: ${({ borderSize, borderColor }) =>
		borderSize && borderColor ? `${borderSize}px solid ${borderColor}` : 'none'};
	color: ${({ textColor }) => (textColor ? textColor : 'inherit')};
    ${({ theme }) => theme.common.flexCenter};
    flex-direction: row;
    padding: 6px 12px;
    margin: 0 5px 5px 0;
`;

const TextTagContainer = styled(TagContainer)<ButtonProps>`
    > .Label{
        line-height: 20px;
        font-size: 11px;
        font-weight: 500;
        color: var(--black-hunt);
        font-family: sans-serif;
        letter-spacing: 1px;

        animation-name:textColorChange; 
        animation-duration:2s; 
        animation-iteration-count:infinite ;

        @keyframes textColorChange{
	    from{color:var(--black-hunt);}
	    to{color:var(--white-primary);}
            }
        }
`;

const BgchangeTagContainer = styled(TagContainer)<ButtonProps>`
  animation: colorChangeAnimation 2s infinite;

  @keyframes colorChangeAnimation {
    from {
      background-color: var(--white-primary);
    }
    to {
      background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
    }
  }

  > .Label{
    line-height: 20px;
    font-size: 11px;
    font-weight: 500;
    color: var(--black-hunt);
    font-family: sans-serif;
    letter-spacing: 1px;
    }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const ArrowTagContainer = styled(TagContainer)<ButtonProps>`
  animation-name: ${rotateAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 5s;

    @keyframes textColorChange{
	    from{color:var(--black-hunt);}
	    to{color:var(--white-primary);}
        }
`;