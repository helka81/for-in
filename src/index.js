export default function orderByProps(obj, order) {
    const sortedProps = [];
    const unsortedProps = [];
  
    // Сортируем свойства по порядку указанному в массиве order
    order.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        sortedProps.push({ key: key, value: obj[key] });
        delete obj[key];
      }
    });
  
    // Сортируем оставшиеся свойства в алфавитном порядке
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        unsortedProps.push({ key: prop, value: obj[prop] });
      }
    }
    unsortedProps.sort((a, b) => a.key.localeCompare(b.key));
  
    // Объединяем отсортированные и неотсортированные свойства
    return sortedProps.concat(unsortedProps);
  }
  
