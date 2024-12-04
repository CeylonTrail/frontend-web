import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo circle.png";
import { useEffect, useState } from "react";
import button from "./Button";
import LogOut from "../assets/img/logout.svg";

const Traveller_navigation = [

  { name: 'Community', href: '/community', current: true },
  { name: 'Trips', href: '/trip', current: false },
  { name: 'Market Place', href: '/market', current: false },
  { name: 'Places', href: '/places', current: false },

];

const SP_navigation = [
  { name: "Community", href: "/community", current: false },
  { name: "Shop", href: "/hotel-sp-view", current: true },
  { name: "Market Place", href: "/market", current: false },
];

const publicNav = [
  { name: 'Community', href: '/community_public', current: true },
  { name: 'Market Place', href: '/market_public', current: false },
  { name: 'Places', href: '/places', current: false },

];

const Admin_Navigation = [
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function handleLogoNavigate() {
  window.location.href = "/";
}

export default function Example({ type, profilePic, funtion }) {
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {

    let navItems = [];
    if (type === 'traveller') {
      navItems = Traveller_navigation;
    } else if (type === "serviceprovider") {
      navItems = SP_navigation;
    } else if (type === "public") {
      navItems = publicNav;
          } else if (type === "admin") {
      navItems = Admin_Navigation;
    } else {
      navItems = SP_navigation;
    }

    const currentPath = window.location.pathname;
    const updatedNavItems = navItems.map((item) => ({
      ...item,
      current: item.href === currentPath,
    }));

    setNavigation(updatedNavItems);
  }, [type]);


  const handleNavClick = (index) => {
    const newNavigation = navigation.map((item, idx) => ({
      ...item,
      current: idx === index, // Set current to true for the clicked item, false for others
    }));
    setNavigation(newNavigation);
    localStorage.setItem('navigationState', JSON.stringify(newNavigation));
    window.location.href = navigation[index].href;
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white m-1.5 rounded shadow fixed top-0 left-0 right-0 z-100"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <button
                  className="flex items-center"
                  onClick={handleLogoNavigate}
                >
                  <img className="h-16 w-auto" src={logo} alt="CeylonTrail" />
                  <span className="ml-3 text-4xl font-extrabold text-primary">
                    CeylonTrail
                  </span>
                </button>
                <div className="items-center sm:ml-6 sm:flex">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-primaryDark1 font-extrabold text-xl"
                            : "text-secondary hover:text-teal-700",
                          "px-3 py-2 text-sm font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(index);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {type === "public" ? (
                  <a className="text-primary" href="/login">Log in</a>
                ) : (<button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>)}
                
                
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      onClick={funtion}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={profilePic} alt="" />
                    </MenuButton>
                  </div>
                </Menu>
                {type!='public' && 
                 <button
                 type="button"
                 className="ml-3 text-sm px-4 py-2 bg-red-500 text-primary font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                 onClick={() => {
                   localStorage.clear(); 
                   window.location.href = "/login"; 
                 }}
                 >
                 <img src={LogOut}/>
                 </button>
                 }
               
              </div>
              </div>
            </div>
          
          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-teal-700 text-white"
                      : "text-gray-500 hover:bg-teal-500 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(index);
                  }}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
