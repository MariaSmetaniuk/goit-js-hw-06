const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (category) {
    const categoryName = category.firstElementChild.textContent;
    const elementsOfCategory = category.querySelectorAll('li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsOfCategory.length}`);
})
