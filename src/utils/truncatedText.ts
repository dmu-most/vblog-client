/** 2023/09/20 - 지정한 텍스트보다 많을 경우 ... 처리 - by sineTlsl*/
export const truncatedText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

/** 2023/11/09 - 해쉬태그 '#' 문자열 포함 시 제거 - by sineTlsl*/
export const removeTagText = (tag: string) => {
  return tag.replace(/#/g, '');
};
