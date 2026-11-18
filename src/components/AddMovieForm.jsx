export default function AddMovieForm({onAdd}){
    function handleSubmit(event){
        event.preventDefault();
        const form=event.currentTarget;
        const data=new FormData(form);
        const title=data.get("title").trim();
        const director=data.get("director").trim();
        const year=Number(data.get("year"));
        if(!title||!director){
            alert("Enter a movie title and director");
            return;
        }
        onAdd({title,director,year
        });
        form.reset();
    }
    return(
<form onSubmit={handleSubmit}>
    <h2>Add a movie</h2>
    <p>
        <label>
            Title<input name="title" required/>
        </label>
    </p>
    <p>
        <label>
            Director<input name="director" required/>
        </label>
    </p>
    <p>
        <label>
            Release year<input name="year" type="number" min="1888" step="1" required/>
        </label>
    </p>
    <button type="submit">Add Movie</button>
    </form>
    );
}