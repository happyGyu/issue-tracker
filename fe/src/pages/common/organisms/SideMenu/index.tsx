import { useTheme } from 'styled-components';

import Divider from '@components/data-display/Divider';
import Squircle from '@components/layout/Squircle';
import { useLabelContext } from '@contexts/LabelProvider';
import { useMemberContext } from '@contexts/MemberProvider';
import { useMilestoneContext } from '@contexts/MilestoneProvider';
import SideMenuItem from '@pages/common/organisms/SideMenu/SideMenuItem';

export default function SideMenu({ menuState, menuDispatch }) {
  const theme = useTheme();
  const { members } = useMemberContext();
  const { labels } = useLabelContext();
  const { data: { milestones } = {} } = useMilestoneContext();

  return (
    <Squircle borderLineColor={theme.palette.borderColor} height="fit-content">
      <SideMenuItem
        type="ASSIGNEE"
        menus={members}
        state={menuState.assignees}
        menuDispatch={menuDispatch}
      />
      <Divider margin="" />
      <SideMenuItem
        type="LABEL"
        menus={labels}
        state={menuState.labels}
        menuDispatch={menuDispatch}
      />
      <Divider margin="" />
      <SideMenuItem
        type="MILESTONE"
        menus={milestones}
        state={menuState.milestone}
        menuDispatch={menuDispatch}
      />
    </Squircle>
  );
}