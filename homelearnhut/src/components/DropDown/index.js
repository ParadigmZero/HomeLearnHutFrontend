import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as UserIcon } from "./icons/users.svg";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ClickAwayListener } from "@material-ui/core";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import Upload from "../Upload";


function DropDown({ uploadClick }) {

  const [showModal, hideModal] = useModal(() => (
    <ReactModal style={{
      overlay: {
        // position: 'fixed',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // backgroundColor: 'white'
      },
      content: {
        position: 'absolute',
        backgroundColor:'#9692AF',
        top: '300px',
        left: '100px',
        right: '100px',
        bottom: '300px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        color:'white'
      }
    }} isOpen>
      <p><Upload uploadClick={uploadClick} /></p>
      <button onClick={hideModal}>X</button>
    </ReactModal>
  ));


  return (
    <Navbar>
      <NavLoad icon={<PlusIcon />} popupClick={showModal} />
      <NavItem icon={<BellIcon />}>
        <DropdownNotif />
      </NavItem>
      <NavItem icon={<MessengerIcon />}>
        <DropdownMsg />
      </NavItem>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
}

function NavLoad({ icon, popupClick }) {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={popupClick}
      >
        {icon}
      </a>
    </li>
  );
}

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {icon}
        </a>
        {open && children}
      </li>
    </ClickAwayListener>
  );
}

function DropdownNotif() {
  const [activeNotif, setActiveNotif] = useState("");
  const dropdownRef = useRef(null);

  function DropdownItem({ goToMenu, children }) {
    return (
      <div onClick={() => goToMenu && setActiveNotif(goToMenu)}>
        {" "}
        {children}
      </div>
    );
  }

  return (
    <div className="dropdownNotif" ref={dropdownRef}>
      <DropdownItem>
        <p style={{ color: "white" }}>No recent notifications</p>
      </DropdownItem>
    </div>
  );
}

function DropdownMsg() {
  const [activeMsg, setActiveMsg] = useState("");
  const dropdownRef = useRef(null);

  function DropdownItem({ goToMenu, children }) {
    return (
      <div onClick={() => goToMenu && setActiveMsg(goToMenu)}> {children}</div>
    );
  }

  return (
    <div className="dropdownMsg" ref={dropdownRef}>
      <DropdownItem>
        <p style={{ color: "white" }}>You have no messages</p>
      </DropdownItem>
    </div>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({ goToMenu, leftIcon, rightIcon, children }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<UserIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="profile"
          >
            My Profile
          </DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>

          <DropdownItem
            leftIcon="📙"
            rightIcon={<ChevronIcon />}
            goToMenu="work set"
          >
            Work Set
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>More Info</h2>
          </DropdownItem>
          <DropdownItem leftIcon="😎">Class Teacher</DropdownItem>
          <DropdownItem leftIcon="🌈">Class Assigned</DropdownItem>
          <DropdownItem leftIcon="✍">Pupil Profiles</DropdownItem>
          <DropdownItem leftIcon="🎉">Pupil Progress</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>More Info</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Account Details</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Privacy Details</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Helpdesk</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "work set"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2> School Term</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🍂">Autumn Pt I</DropdownItem>
          <DropdownItem leftIcon="🦔">Autumn Pt II</DropdownItem>
          <DropdownItem leftIcon="🌷">Spring Pt I</DropdownItem>
          <DropdownItem leftIcon="🐇">Spring Pt II</DropdownItem>
          <DropdownItem leftIcon="🌞">Summer Pt I</DropdownItem>
          <DropdownItem leftIcon="👙">Summer Pt II</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDown;
