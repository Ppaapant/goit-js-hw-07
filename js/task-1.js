const categoriesList = document.querySelector('#categories');

// Підраховуємо кількість категорій
const categories = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

// Проходимося по кожній категорії
categories.forEach(category => {
    // Отримуємо текст заголовка категорії
    const categoryName = category.querySelector('h2').textContent;
  
    // Отримуємо кількість елементів у категорії
    const elementsCount = category.querySelectorAll('ul li').length;
  
    // Виводимо дані в консоль
    console.log('Category:', categoryName);
    console.log('Elements:', elementsCount);
  });