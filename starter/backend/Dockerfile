FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /srv/app

RUN addgroup -S movie && adduser -S movie -G movie \
    && apk add --no-cache build-base libffi-dev linux-headers pcre-dev \
    && pip install --no-cache-dir pipenv

COPY Pipfile Pipfile.lock ./
RUN pipenv install --system --ignore-pipfile

COPY --chown=movie:movie . .
WORKDIR /srv
USER movie

EXPOSE 5000
CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "--module", "app:app"]
