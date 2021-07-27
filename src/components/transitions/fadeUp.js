import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';


export const LinkFadeUp = ({ children, url }) => {
  const exitTransition = {
    length: 0.8,
    zIndex: 2,
    trigger: ({ node }) => {
      exitTransition.exitTrigger(node);
      if (node) (node).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: fadeUpOut 0.8s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: fadeUpIn 0.8s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink to={url} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
    </>
  );
};

export default LinkFadeUp;