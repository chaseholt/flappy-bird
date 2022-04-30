import React from "react";
import { findDomNode } from "react-dom";
import { View } from "react-native";

class DisableBodyScrollingView extends React.PureComponent {
  componentWillUnmount() {
    if (this.view) {
      this.view.removeEventListener("touchstart", freezeBody, false);
      this.view.removeEventListener("touchmove", freezeBody, false);
    }
  }

  render() {
    const { style, ...props } = this.props;

    return (
      <View
        style={[{ flex: 1 }, style]}
        tabIndex='0'
        ref={(view) => {
          const nextView = getElement(view);
          if (nextView && nextView.addEventListener) {
            nextView.addEventListener("touchstart", freezeBody, false);
            nextView.addEventListener("touchmove", freezeBody, false);
          }
        }}
        {...props}
      />
    );
  }
}

export default DisableBodyScrollingView;
