import { atom } from 'recoil';

export const dayState = atom<string[]>({
  key: 'dayState',
  default: [''],
});

export const dateState = atom<string[]>({
  key: 'dateState',
  default: [''],
});
