//Iteración #1: Mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesList=[];
for (const iterator of movies) {
    for (let i = 0; i < iterator.categories.length; i++) {
        
        if (!categoriesList.includes(iterator.categories[i])) {
            categoriesList.push(iterator.categories[i]);
        }
    }
}
console.log(categoriesList);