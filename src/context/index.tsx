import detail, { DetailProvider } from './detailContext';
import { Children } from '../components/Common/types';

export const EntireContextProvider = ({ children }: Children) => <DetailProvider>{children}</DetailProvider>;

export default { detail };
