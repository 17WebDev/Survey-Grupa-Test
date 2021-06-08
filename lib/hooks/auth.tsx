export const clearAuth = (): void => {
  localStorage.removeItem('access');
};

export const setAuth = (access: string, type: string): void => {
  localStorage.setItem('access', access);
  localStorage.setItem('type', type);
};
