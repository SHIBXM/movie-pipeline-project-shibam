from flask import abort, jsonify


MOVIES = {
    "123": {"title": "Top Gun: Maverick", "description": "Fighter planes"},
    "456": {"title": "Sonic the Hedgehog", "description": "Blue Sega character"},
    "789": {"title": "A Quiet Place", "description": "Scary monsters"},
}


def list_movies():
    """Return the lightweight data needed by the movie list."""
    return jsonify(
        {
            "movies": [
                {"id": movie_id, "title": movie["title"]}
                for movie_id, movie in MOVIES.items()
            ]
        }
    )


def get_movie(movie_id):
    """Return one movie or a conventional JSON 404 response."""
    movie = MOVIES.get(str(movie_id))
    if movie is None:
        abort(404)
    return jsonify({"movie": movie})
