import { KeyValue } from 'types/common';
import { TOKEN } from './constants';

const setToken = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

const setMultipleToken = (tokens: KeyValue<string, string>[]) => {
  if (tokens && tokens.length > 0) {
    for (const token of tokens) {
      localStorage.setItem(token.key, token.value);
    }
  }
};

const getToken = (name: string) => {
  if (!name) {
    return null;
  }
  return localStorage.getItem(name);
};

const removeAllTokens = () => {
  localStorage.removeItem(TOKEN.ACCESS_TOKEN);
  localStorage.removeItem(TOKEN.REFRESH_TOKEN);
};

export const tokenHelper = {
  setToken,
  getToken,
  removeAllTokens,
  setMultipleToken
};
