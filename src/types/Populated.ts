import ID from './ID';
import Omit from './Omit';

type Populated<T extends {}, K extends keyof T = keyof T>
  = Omit<T, K> & {
    [k in K]: Exclude<T[k], ID>
  };

export default Populated;
