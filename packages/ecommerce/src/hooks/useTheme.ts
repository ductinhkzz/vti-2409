import { Theme, toggleTheme } from '@/redux/global';
import { useRedux } from './useRedux';

export const useTheme = (): [Theme, () => void] => {
  const { appSelector, dispatch } = useRedux();
  const { theme } = appSelector((state) => state.global);

  const toggle = () => dispatch(toggleTheme());

  return [theme, toggle];
};
