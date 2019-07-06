import ID from './ID';
import Omit from './Omit';

type WithoutId<T extends ID> = Exclude<T, ID>;

export type Populated<T extends {}, K extends keyof T = keyof T>
  = Omit<T, K> & {
    [k in K]: WithoutId<T[k]>
  };
