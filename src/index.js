export function cache(item) {
  return {
      get() {
          return JSON.parse(localStorage.getItem(item));
      },

      set(data) {
          localStorage.setItem(item, JSON.stringify(data));
      }
  };
}