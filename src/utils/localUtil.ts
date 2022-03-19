export const localUtil = {
  saveLocal(key: string, value: string) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  },
  setLocal(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  },
};
