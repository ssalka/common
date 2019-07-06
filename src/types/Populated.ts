import ID from './ID';
import Omit from './Omit';

export type Populated<T extends {}, K extends keyof T = keyof T>
  = Omit<T, K> & {
    [k in K]: Exclude<T[k], ID>
  };
