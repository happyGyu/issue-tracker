import styled from 'styled-components';

import LabelTableBody from '@components/LabelTable/LabelTableBody';
import LabelTableHeader from '@components/LabelTable/LabelTableHeader';

export default function LabelTable() {
  return (
    <LabelTableContainer>
      <LabelTableHeader />
      <LabelTableBody />
    </LabelTableContainer>
  );
}

const LabelTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;