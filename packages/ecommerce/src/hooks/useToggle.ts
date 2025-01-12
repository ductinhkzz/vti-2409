import React, { useCallback, useMemo } from 'react';

/**
 * Custom hook to toggle state
 * @param defaultState
 * @returns open, toggle, setOpen, show, hide
 */
const useToggle = (defaultState = false): [boolean, () => void, (val: boolean) => void, () => void, () => void] => {
  const [open, setOpen] = React.useState(defaultState);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  const show = useCallback(() => setOpen(true), []);

  const hide = useCallback(() => setOpen(false), []);

  return useMemo(() => [open, toggle, setOpen, show, hide], [open, toggle, setOpen, show, hide]);
};

export { useToggle };
