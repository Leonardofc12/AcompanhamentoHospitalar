import Toast from 'react-native-toast-message';
import React from 'react';
 
const RootToast = () => {
  return <Toast ref={(ref) => Toast.setRef(ref)} />;
};
 
export default RootToast;