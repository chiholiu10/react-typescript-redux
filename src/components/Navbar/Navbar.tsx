import { FC, memo, useState } from "react";
import {
  Nav,
  NavHamburgerButton,
  NavSpan,
  NavbarUnorderedList,
  NavbarListItem,
  NavbarAnchor,
  NavbarLogo
} from './Navbar.styles';
import { connect, ConnectedProps } from "react-redux";

export const Navbar: FC<NavbarProps> = ({ navbarData }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const listItemIndex = (index: number) => setActiveIndex(index);

  const navbarTabs = navbarData.map((tab: { anchor: string; name: string; }, index: number) => (
    <NavbarListItem key={index} onClick={() => listItemIndex(index)} className={activeIndex === index ? "active" : ""}>
      <NavbarAnchor href={tab.anchor}>{tab.name}</NavbarAnchor>
    </NavbarListItem>
  ));

  const toggle = () => setOpen(!open);

  return (
    <Nav>
      <NavHamburgerButton open={open} onClick={toggle}>
        <NavSpan />
        <NavSpan />
        <NavSpan />
      </NavHamburgerButton>
      <NavbarLogo src={"https://www.npostart.nl/images/npo-start.svg"} alt="nos-logo" />
      <NavbarUnorderedList open={open} >
        {navbarTabs}
      </NavbarUnorderedList>
    </Nav>
  );
};

const mapStateToProps = (state: any) => ({
  navbarData: state.media.navbarList
});

const connector = connect(mapStateToProps);
type NavbarProps = ConnectedProps<typeof connector>;
export default connector((memo(Navbar)));