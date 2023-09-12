import styled from 'styled-components';
import { ReactNode } from 'react';

// icons
import { IoMdCloseCircle } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

/** 2023/09/12 - 경고 모달창 - by sineTlsl */
const AlertModal: React.FC<ModalProps> = ({ isOpen, onClose, children }): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoMdCloseCircle size="23px" color="var(--black-primary)" />
        </CloseBtn>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default AlertModal;

const ModalContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px 38px;
  border-radius: 5px;
  position: relative;
  text-align: center;
  line-height: 25px;
  font-weight: 500;
  font-size: 15px;
  color: var(--black-hunt);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
`;
