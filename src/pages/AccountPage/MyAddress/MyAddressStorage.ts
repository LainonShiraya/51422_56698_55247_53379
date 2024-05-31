export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("Saved to localStorage:", value); // Dodaj logowanie
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
  try {
    const storedData = localStorage.getItem(key);
    const parsedData = storedData ? (JSON.parse(storedData) as T) : null;
    console.log("Loaded from localStorage:", parsedData); // Dodaj logowanie
    return parsedData;
  } catch (e) {
    console.error("Error loading from localStorage", e);
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing from localStorage", e);
  }
};