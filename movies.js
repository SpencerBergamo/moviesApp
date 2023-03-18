// Class to handle movie title and rating (append when retrieved)
class Movies {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
        this.movieListings();
    }
    
    // Append movie title and rating to the list
    movieListings() {
        // console.log(this.title + this.rating);
        $("#ratings").append($("<li>", {text: `${this.title} - ${this.rating}`}));
        $("#ratings").on("click", function(e) {e.target.parentElement.removeChild(e.target)});
        pageReset();
    }
}

// Reset the form input fields, to be user friendly
function pageReset() {
    document.getElementById("input-one").reset();
    document.getElementById("input-two").reset();
}

function invalidInfo(msg) {
    alert(msg);
}

// When the submit button is clicked, handle new Movie 
$("#submit-button").on("click", function(e) {
    // e.preventDefault();
    if($("#movietitle").val() === "" || $("#movierating").val() === ""){
        throw Error(invalidInfo("Please complete field"));
    }
    new Movies($("#movietitle").val(), $("#movierating").val());
})