export const useHello = () => {
  const nuxtApp = useNuxtApp();
  return nuxtApp.$hello;
};
