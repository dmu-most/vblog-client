import React, { ReactNode } from 'react';
import { styled } from "styled-components";

interface DetailFormProps {
  children: ReactNode;
}


const DetailForm: React.FC<DetailFormProps> = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};

export default DetailForm;


const FormContainer = styled.div`
  background-color: var(--green-hunt);
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    // 나중에 지우기
    margin-top: 50px;
`;