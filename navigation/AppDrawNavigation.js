import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./AppTabNavigation";
import DrawerContent from "../screens/DrawerContent";
import StackNavigator from "./AppStackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
      <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
