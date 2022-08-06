
let Movies = 
[
    {
        id: 1, 
        title: "Terminator", 
        genre: {id: 1.1 , name: "Action"}, 
        numberInStock : 7, 
        dailyRentalRate : 2.4 

    },
    {
        id: 2, 
        title: "The dictator", 
        genre: {id: 1.2 , name: "Comedy"}, 
        numberInStock : 4, 
        dailyRentalRate : 2.4 

    },
    {
        id: 3, 
        title: "When the bough breaks", 
        genre: {id: 1.3 , name: "Romance"}, 
        numberInStock : 6, 
        dailyRentalRate : 2.4 

    },
    {
        id: 4, 
        title: "The matrix", 
        genre: {id: 1.1 , name: "Action"}, 
        numberInStock : 9, 
        dailyRentalRate : 2.4 

    },
    {
        id: 5, 
        title: "Avengers: End game", 
        genre: {id: 1.1 , name: "Action"}, 
        numberInStock : 2, 
        dailyRentalRate : 2.4 

    },
    {
        id: 6, 
        title: "The philosopher", 
        genre: {id: 1.4 , name: "Thriller"}, 
        numberInStock : 11, 
        dailyRentalRate : 2.4 
    } 

]

export function getMovies() 
{ 
    return Movies
}  

export function getMovie(id)
{ 
    return Movies.find( m => m.id === id)
} 
