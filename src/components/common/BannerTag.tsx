import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';

// icons
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight,
     AiOutlineArrowUp, AiFillHeart, AiOutlineHeart,  } from "react-icons/ai";

import { getvlogbannerTagCheck } from '@api/main';
import { BannerTags } from 'types/main/list';


interface ButtonProps{
	width?: string;
	height?: string;
	bgcolor?: string;
	borderradius?: string;
	bordersize?: number; 
	bordercolor?: string; 
	textcolor?:string; 
	svgwidth? :string; 
	svgheight? :string;
}

const colors = ['var(--tag-pink);', 'var(--tag-pink);', 'var(--tag-pink);', 'var(--tag-pink);'];


const BannerTag : React.FC = (): JSX.Element => {   
  const [bannertagData, setBannertagData] = useState<BannerTags[]>([]);

  const getAllbannerTagCheck = async () => {
      const res = await getvlogbannerTagCheck();
      setBannertagData(res);
  };

  useEffect(() => {
    getAllbannerTagCheck();

  }, []);
	return(
        // <BannerTagContainer>
        //     <TextTagContainer height="35px" bgcolor="var(--tag-pink)" borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <ArrowTagContainer width="35px" height="35px" bgcolor="var(--white-hunt)" borderradius="50%">
        //       <AiOutlineArrowUp />
        //     </ArrowTagContainer>
        //     <TextTagContainer height="35px" bgcolor="var(--tag-yellow)" borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <TextTagContainer height="35px" bgcolor="var(--white-primary)" bordercolor="var(--tag-peach)" bordersize={2} borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <TagContainer width="35px" height="35px" bgcolor="var(--tag-beige)" borderradius="50%" />
        //     <ArrowTagContainer width="35px" height="35px" bgcolor="var(--white-hunt)" borderradius="50%">
        //       <AiOutlineArrowDown />
        //     </ArrowTagContainer>
        //     <TextTagContainer height="35px" bgcolor="var(--tag-orange)" borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <TagContainer width="35px" height="35px" bgcolor="var(--tag-blue)" borderradius="50%" />
        //     <TextTagContainer height="35px" bgcolor="var(--white-primary)" bordercolor="var(--tag-green)" bordersize={2} borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <ArrowTagContainer width="35px" height="35px" bgcolor="var(--white-hunt)" borderradius="50%">
        //       <AiOutlineArrowRight />
        //     </ArrowTagContainer>
        //     <TagContainer width="35px" height="35px" bgcolor="var(--tag-purple)" borderradius="50%" />
        //     <TextTagContainer height="35px" bgcolor="var(--tag-orange)" borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </TextTagContainer>
        //     <ArrowTagContainer width="35px" height="35px" bgcolor="var(--white-hunt)" borderradius="50%">
        //       <AiOutlineArrowUp width="10px" height= "10px" />
        //     </ArrowTagContainer>
        //     <BgchangeTagContainer height="35px" bgcolor="var(--tag-pink)" borderradius="20px">
        //       <span className="Label"> #{bannertag} </span>
        //     </BgchangeTagContainer>
        //     <TagContainer height="35px" bgcolor="var(--white-primary)" borderradius="50%">
        //       <AiFillHeart color="var(--icon-red)"/>
        //     </TagContainer>
        //     <TagContainer height="35px" bgcolor="var(--white-primary)" borderradius="50%">
        //       <AiOutlineHeart color="var(--icon-red)"/>
        //     </TagContainer>
        //     <TagContainer width="5.5rem" height="35px" bgcolor="var(--tag-mint)" borderradius="20px">
        //       <AiOutlineArrowLeft color="var(--white-primary)"/>
        //     </TagContainer>
        // </BannerTagContainer>
  <BannerTagContainer>
    {bannertagData?.map((tag, index) => (
      <TextTagContainer
        key={index}
        height="35px"
        bgcolor={`var(--tag-${colors[index % colors.length]})`}
        borderradius="20px"
      >
        <span className="Label"> #{tag.toString()} </span>
      </TextTagContainer>
    ))}
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
	background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'transparent')};
	border-radius: ${({ borderradius }) => (borderradius ? borderradius : 'none')};
	border: ${({ bordersize, bordercolor }) =>
		bordersize && bordercolor ? `${bordersize}px solid ${bordercolor}` : 'none'};
	color: ${({ textcolor }) => (textcolor ? textcolor : 'inherit')};
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
      background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'transparent')};
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