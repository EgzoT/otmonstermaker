## OT Monster Maker for TFS 1.3

## Application link

[https://egzot.github.io/otmonstermaker/](https://egzot.github.io/otmonstermaker/)

# Compose

## Start compose

```sh
sudo docker compose up
```

## Stop compose

```sh
sudo docker compose down
```

## Install new npm package

```sh
sudo docker exec -it passwords-generator-web-passwords-generator-web-1 bash
cd passwords-generator-web
npm i <package_name>
```

## Uninstall npm package

```sh
sudo docker exec -it passwords-generator-web-passwords-generator-web-1 bash
cd passwords-generator-web
npm uninstall <package_name>
```

## Restart compose

```sh
sudo docker compose restart
```
