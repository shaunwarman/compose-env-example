# compose-env-example
A docker compose env variable example

## Overview
Docker compose allows for a [.env](https://docs.docker.com/compose/environment-variables/#the-env-file) file which it will honor
during environment variable substitution within [Docker-compose.yml](https://github.com/shaunwarman/compose-env-example/blob/master/Docker-compose.yml#L8-L9) file.
This makes it easy to add defaults that may come from CI or unavailable in host shell environment.

## Install
```
git clone https://github.com/shaunwarman/compose-env-example
cd compose-env-example
```

## Use
```
docker-compose up
```
