import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

import FilterPoints from "./pages/FilterPoints";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

const pointStack = () => {
  return (
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <Screen name="FilterPoints" component={FilterPoints} />
        <Screen name="Points" component={Points} />
        <Screen name="Detail" component={Detail} />
      </Navigator>
  );
};

export default pointStack;