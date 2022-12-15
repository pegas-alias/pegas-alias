import { useSelector } from 'react-redux'
import { RootState } from '../store/reducer'

export const useAuth = (): boolean => {
  const user = useSelector((state: RootState) => state.user.user);
  return user !== undefined && user.id !== 0;
}
