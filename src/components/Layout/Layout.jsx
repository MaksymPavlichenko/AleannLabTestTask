import { Outlet } from 'react-router-dom';
import { LayoutWrap } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrap>
      <Outlet />
    </LayoutWrap>
  );
};

export default Layout;