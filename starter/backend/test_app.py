import os

import pytest

from . import create_app


@pytest.fixture()
def client():
    application = create_app()
    application.config.update(TESTING=True)
    return application.test_client()


def test_movies_endpoint_returns_200(client):
    expected_status = int(os.getenv("FAIL_TEST", "200"))
    assert client.get("/movies/").status_code == expected_status


def test_movies_endpoint_returns_json(client):
    assert client.get("/movies/").is_json


def test_movies_endpoint_returns_valid_data(client):
    payload = client.get("/movies/").get_json()
    assert isinstance(payload["movies"], list)
    assert payload["movies"]
    assert {"id", "title"}.issubset(payload["movies"][0])
