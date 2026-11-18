export default function AddMovieForm({onAdd}){
    function handleSubmit(event){
        event.preventDefault();
        const form=event.currentTarget;
        const data=new FormData(form);
        onAdd({
            title:data.get("title").trim(),
            director:data.get("director").trim(),
            year:Number(data.get("year")),
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
            Release year<input name="year" type="number" required/>
        </label>
    </p>
    <button type="submit">Add Movie</button>
    </form>
    );
}