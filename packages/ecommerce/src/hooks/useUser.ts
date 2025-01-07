import { useRedux } from './useRedux';

const useUser = () => {
  const { appSelector } = useRedux();
  const { jwt, user, isLoading } = appSelector((state) => state.auth);

  return {
    user,
    jwt,
    isLoading,
  };
};

export { useUser };
