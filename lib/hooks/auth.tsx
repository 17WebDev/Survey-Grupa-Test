export const clearAuth = (): void => {
  localStorage.removeItem('access');
};

export const setAuth = (access: string): void => {
  localStorage.setItem('access', access);
};
