/* eslint-disable @next/next/no-img-element */

import React, { useContext, useEffect, useState } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';
import { MenuItemService } from '@/service/MenuItemService';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@/redux/action/action';

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState<AppMenuItem[]>([]);
  const rerenderMenu = useSelector((state: any) => state.RerenderMenu);

  useEffect(() => {
    MenuItemService.getAllAssets().then((res) => {
      setMenuItems(res);
      dispatch(MenuItem(res[0]));
    });
  }, [rerenderMenu]);

  return (
    <MenuProvider>
      <h5 className="m-3">Assets Register</h5>
      {/* <ul className="layout-menu"> */}
      {menuItems.map((item, i) => {
        return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
      })}
      {/* </ul> */}
    </MenuProvider>
  );
};

export default AppMenu;
