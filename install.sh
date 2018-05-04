#!/usr/bin/env bash

# Install requirements

sudo apt update

# install node
sudo apt install -y nodejs

# install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt install -y yarn

# install npm libraries
yarn init
yarn add babel-cli babel-core babel-eslint babel-loader
yarn add prettier
yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
yarn add axios
