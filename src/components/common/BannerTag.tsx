import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// icons
import {  AiOutlineArrowLeft, AiFillHeart, AiOutlineHeart,  } from "react-icons/ai";
// store
import { useContentModeStore } from '@store/useConentModeStore';

// type
import { SearchListRequestType, SearchListType } from 'types/index';

//api
import { getvlogbannerTagCheck, getblogbannerTagCheck } from '@api/main';
import { getvlogbannerTagSearch } from '@api/main';

// type
import { BannerTags } from 'types/main/list';
import { getTagSearchVlog, getTagSearchBlog } from '@api/post';

type ContentMode = 'V' | 'B';
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

// tag-color 함수
const colors = ['pink', 'yellow', 'beige', 'orange'];
const bgcolors = ['gray', 'purple', 'white', 'peach']; 

// const tagSearchMapping: Record<ContentMode, (params: SearchListRequestType) => Promise<string[]>> = {
//   V: getTagSearchVlog,
//   B: getTagSearchBlog,
// };


//**2023/07/19 bannertag - by jh
const BannerTag : React.FC = (): JSX.Element => {   
  const [bannertagData, setBannertagData] = useState<BannerTags[]>([]);
  const { mode } = useContentModeStore();
  const navigate = useNavigate();

  // allbannerTagApi 변수 생성
  const bannerTagApi = mode === 'V' ? getvlogbannerTagCheck : mode === 'B' ? getblogbannerTagCheck : null;

  //**2023/11/10 bannertag api 적용 함수 - by jh
  const getAllbannerTagCheck = async () => {
    try {
      if (bannerTagApi) {
        const res = await bannerTagApi();
        setBannertagData(res);
      } else {
        console.error('Invalid mode:', mode);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const handleTagClick = async (tag: string | BannerTags) => {
  //   try {
  //     // const selectedApi = tagSearchMapping[mode as ContentMode];
  //     const tagString = typeof tag === 'string' ? tag : tag.toString();
  //     const keyword = `${tagString}`;
  //     console.log('Keyword:', keyword);
  //     const params: SearchListRequestType = {
  //       keyword,
  //     };
  //     const res = await getvlogbannerTagSearch(params, keyword);
  //     console.log(res);

  //     navigate(`/search?s=${encodeURIComponent(tagString)}`, {
  //       state: { searchList: res, searchTag: tagString },
  //     });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  useEffect(() => {
    getAllbannerTagCheck();
  }, [mode]);
  
	return(
    <BannerTagContainer>
      {bannertagData?.map((tag, index) => (
        <React.Fragment key={index}>
          <TextTagContainer
            key={index}
            height="35px"
            bgcolor={`var(--tag-${colors[index % colors.length]})`}
            borderradius="20px"
            // onClick={() => handleTagClick(tag)}
          >
            <span className="Label"> #{tag.toString()} </span>
          </TextTagContainer>

          <BgchangeTagContainer
            width="35px"
            height="35px"
            bgcolor={`var(--tag-${bgcolors[index % bgcolors.length]})`}
            borderradius="50%"
          >
          </BgchangeTagContainer>
        </React.Fragment>
      ))}
      <SubTagContainer height="35px" bgcolor="var(--white-primary)" borderradius="50%">
        <AiFillHeart color="var(--icon-red)"/>
      </SubTagContainer>
      <SubTagContainer height="35px" bgcolor="var(--white-primary)" borderradius="50%">
        <AiOutlineHeart color="var(--icon-red)"/>
      </SubTagContainer>
      <SubTagContainer width="5.6rem" height="35px" bgcolor="var(--tag-mint)" borderradius="20px">
        <AiOutlineArrowLeft color="var(--white-primary)"/>
      </SubTagContainer>
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
  cursor: pointer;

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
   @media screen and (max-width: 1400px) {
    display: none;
  }
`;

const SubTagContainer = styled(TagContainer)<ButtonProps>`
   @media screen and (max-width: 1400px) {
    display: none;
  }
`;