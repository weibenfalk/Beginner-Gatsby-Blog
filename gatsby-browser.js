/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import ModeProvider from './src/context/ModeProvider';

// TODO: NEED TO FIX BELOW TS STUFF!!!
export const wrapRootElement = ({ element }) => {
  return <ModeProvider>{element}</ModeProvider>;
};
