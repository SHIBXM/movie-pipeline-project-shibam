import os

from flask import Flask
from flask_cors import CORS

from .movies import movies_api


def create_app():
    """Create the Movie Picture API application."""
    application = Flask(__name__)
    CORS(application)
    application.register_blueprint(movies_api)
    return application


app = create_app()

# Start app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("FLASK_RUN_PORT", "5000")), debug=True)
