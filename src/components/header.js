import React from "react";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLogout } from "../pages/logout"; // Adjust the path as necessary

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "Profile", href: "/profile", current: false },
  { name: "Logout", href: "/logout", current: false, logout: true },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const handleLogout = useLogout(); // Use the custom logout function

  return (
    <Disclosure as="nav" className="bg-white fixed top-0 inset-x-0 shadow-md z-50">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <p className="text-black font-bold text-xl">Websitesy</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.submenu ? (
                    <Menu as="div" className="relative" key={item.name}>
                      <div>
                        <MenuButton
                          className={classNames(
                            item.current ? "text-black" : "text-black hover:bg-gray-200",
                            "flex items-center rounded-md px-3 py-2 text-base font-medium"
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {item.submenu.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-base font-medium text-black hover:bg-gray-200"
                            >
                              {subItem.name}
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : item.logout ? (
                    <button
                      key={item.name}
                      onClick={handleLogout} // Use the logout handler
                      className="rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-200"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current ? "bg-gray-200 text-black" : "text-black hover:bg-gray-200",
                        "rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) =>
            item.submenu ? (
              <Disclosure as="div" className="relative" key={item.name}>
                <DisclosureButton className="flex items-center block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200">
                  {item.name}
                  <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel className="space-y-1 px-2 pb-3 pt-2">
                  {item.submenu.map((subItem) => (
                    <DisclosureButton
                      key={subItem.name}
                      as={Link}
                      to={subItem.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
                    >
                      {subItem.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ) : item.logout ? (
              <button
                key={item.name}
                onClick={handleLogout} // Use the logout handler
                className="block rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-200"
              >
                {item.name}
              </button>
            ) : (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current ? "bg-gray-200 text-black" : "text-black hover:bg-gray-200",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
