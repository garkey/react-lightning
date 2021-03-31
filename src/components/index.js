/* @flow */
import React from 'react';
export * from './lightning';
export * from './chatter';

/**
 *
 */
export const CustomComponent = (props) => {
  const { componentName: CustomComp, ...rprops } = props;
  return <CustomComp { ...rprops } />;
};
