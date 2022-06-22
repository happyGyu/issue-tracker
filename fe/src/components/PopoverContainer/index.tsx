import { useState } from 'react';
import styled from 'styled-components';

import PopoverMenus from '@components/PopoverContainer/PopoverMenus';
import mixin from '@style/mixin';

type PropsType<T> = {
  left?: string | number;
  top?: string | number;
  title: string;
  menus?: T[];
  onClickModalItem?: (item: T) => void;
  children: React.ReactElement;
};

export default function PopoverContainer<T>({
  left,
  top,
  title,
  menus,
  onClickModalItem,
  children,
}: PropsType<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <Wrapper onClick={() => setIsModalOpened((prev) => !prev)}>
      <Trigger type="button">{children}</Trigger>
      {isModalOpened && (
        <PopoverMenus
          left={left}
          top={top}
          title={title}
          menus={menus}
          onClickModalItem={onClickModalItem}
        />
      )}
    </Wrapper>
  );
}

const Trigger = styled.button``;
const Wrapper = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  position: relative;
`;