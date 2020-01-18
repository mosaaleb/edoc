const Storage = (() => {
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      return localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
      return error;
    }
  };

  return { loadState, saveState };
})();

export default Storage;
