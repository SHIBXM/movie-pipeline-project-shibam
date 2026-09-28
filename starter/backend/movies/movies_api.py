from flask import Blueprint

from .resources import get_movie, list_movies

movies_api = Blueprint("movies_api", __name__)

movies_api.add_url_rule(
    "/movies", view_func=list_movies, methods=["GET"], strict_slashes=False
)
movies_api.add_url_rule("/movies/<int:movie_id>", view_func=get_movie, methods=["GET"])
