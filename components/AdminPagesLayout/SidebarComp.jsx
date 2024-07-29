import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  //menuClasses,
  //useProSidebar,
} from "react-pro-sidebar";

import { ImCircleLeft } from "react-icons/im";
import { TbLayoutGrid } from "react-icons/tb";
import { BiBox } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiBarChartSquare } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { BsMegaphone } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Link from "next/link";

//const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

const SidebarComp = (/* { showSideBar, isMerchant } */) => {
  return (
    <ProSidebarProvider>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#FAFAFA",
          },
        }}
      >
        <div className="flex justify-between p-5">
          <h1 className=" text-4xl font-bold text-orange-600">Marketbox</h1>
          <ImCircleLeft size={20} />
        </div>
        <Menu>
          <MenuItem icon={<TbLayoutGrid />}> Dashboard</MenuItem>
          <SubMenu label="Products" icon={<BiBox />}>
          <Link href="/admin/addproduct">
            <MenuItem> Add a new Products </MenuItem>
            </Link>
            <Link href="/admin/productlist">
            <MenuItem> Product list </MenuItem>
            </Link>
            <Link href="/admin/category">
            <MenuItem> Categories </MenuItem>
            </Link>
            <MenuItem> Edit a Product </MenuItem>
            <MenuItem> Remove a Product </MenuItem>
            <MenuItem> Brands </MenuItem>
          </SubMenu>
          <SubMenu label="Orders" icon={<GiShoppingCart />}>
            <MenuItem> Successfull </MenuItem>
            <MenuItem> Pending </MenuItem>
            <MenuItem> Cancelled </MenuItem>
          </SubMenu>
          <MenuItem icon={<HiOutlineUserGroup />}> Customers </MenuItem>
          <MenuItem icon={<BiBarChartSquare />}> Statistics </MenuItem>
          <MenuItem icon={<MdOutlineMessage />}> Reviews</MenuItem>
          <SubMenu label="Transactions" icon={<BsCreditCard2Front />}>
            <MenuItem> Successfull </MenuItem>
            <MenuItem> Pending </MenuItem>
            <MenuItem> Failed </MenuItem>
            <MenuItem> Invoice </MenuItem>
          </SubMenu>
          <SubMenu label="Merchants" icon={<BsPeople />}>
            <MenuItem> All Merchants </MenuItem>
            <MenuItem> Payouts </MenuItem>
            <MenuItem> Payout Request </MenuItem>
            <MenuItem> Varification </MenuItem>
          </SubMenu>
          <MenuItem icon={<TbDiscount2 />}> Discounts </MenuItem>
          <SubMenu label="Marketing" icon={<BsMegaphone />}>
            <MenuItem> Flash Sales </MenuItem>
            <MenuItem> Newsletters </MenuItem>
            <MenuItem> Subscribers </MenuItem>
            <MenuItem> Promotions </MenuItem>
            <MenuItem> Coupons </MenuItem>
          </SubMenu>
          <SubMenu label="Blog System" icon={<MdEditNote />}>
            <MenuItem> All Posts </MenuItem>
            <MenuItem> Categories </MenuItem>
          </SubMenu>
          <SubMenu label="OTP System" icon={<FiPhone />}>
            <MenuItem> Configurations </MenuItem>
            <MenuItem> Credentials </MenuItem>
          </SubMenu>
          <SubMenu label="Admin" icon={<AiOutlineUserAdd />}>
            <MenuItem> All Staffs </MenuItem>
            <MenuItem> Staff Permission </MenuItem>
            <MenuItem> Uploaded Files </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default SidebarComp;
