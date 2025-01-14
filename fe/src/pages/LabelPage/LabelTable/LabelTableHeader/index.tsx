import styled from 'styled-components';

import { useLabelContext } from '@contexts/LabelProvider';
import mixin from '@style/mixin';

export default function LabelTableHeader() {
  const { labels } = useLabelContext();

  return (
    <LabelTableHeaderContainer>
      <span>{labels?.length}개의 레이블</span>
    </LabelTableHeaderContainer>
  );
}

const LabelTableHeaderContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  height: 4rem;
  padding: 0 2rem 0 1.5rem;
  background-color: ${({ theme }) => theme.palette.lighterBgColor};
  border-radius: 1rem 1rem 0 0;
`;
