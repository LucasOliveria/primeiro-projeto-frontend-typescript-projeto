export function setToken(key: string, value: string) {
  localStorage.setItem(key, value);
}
export function getToken(key: string): string {
  return localStorage.getItem(key) as string;
}
export function removeToken(key: string) {
  localStorage.removeItem(key);
}