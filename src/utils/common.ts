export const capitalizeString = (str: string): string => {
    if (!str) return '';
  
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  };
  
  export const getMarkColor = (mark: number): string => {
    if (mark >= 8) return 'green';
    if (mark >= 4) return 'goldenrod';
    return 'red';
  };
  
  export const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  export const getAbbreviationName = (name: string) => {
    if (!name) {
      return '';
    }
  
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].slice(0, 1);
    } else {
      return words[0].slice(0, 1) + words[1].slice(0, 1);
    }
  };