import React from 'react';
import { BsCalendar2Date, BsCalendar3, BsGrid, BsInbox } from 'react-icons/bs';
import styled from 'styled-components';

const SideNavContainer = styled.div`
  width: 20%;
  min-height: 95vh;
  background: #fafafa;
  padding: 30px 5px 30px 50px;
`;

const SideNavItem = styled.div<{ active?: boolean }>`
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#ececec' : 'inherit')};
  &:hover {
    background: #ececec;
    border-radius: 5px;
  }
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavItem>
        <BsInbox size={22} color="#236EE1" />
        <div>Inbox</div>
      </SideNavItem>
      <SideNavItem active>
        <BsCalendar2Date size={22} color="#038527" />
        <div>Today</div>
      </SideNavItem>
      <SideNavItem>
        <BsCalendar3 size={22} color="#692EC2" />
        <div>Upcoming</div>
      </SideNavItem>
      <SideNavItem>
        <BsGrid size={22} color="#EB8907" />
        <div>Filters and Labels</div>
      </SideNavItem>
    </SideNavContainer>
  );
};

export default SideNav;
