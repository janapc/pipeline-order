<div align="center">
  <h1>Pipeline Order📦</h1>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/janapc/pipeline-order"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/janapc/pipeline-order"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/janapc/pipeline-order"/>

  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirement">Requirement</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>
</div>

## 💎 Project

This project is a pipeline of orders from the received to the sent product.

Used the service of AWS SNS to create a pipeline:
- receive-order: receive the order and valid it
- process-payment: verify if the payment is correctly
- send-order: send an email to the user with information that the order go sended

## 📜 Requirement
To run this project your need to have:
 - account in [AWS](https://aws.amazon.com/)
 - command line AWS [AWS CLI](https://aws.amazon.com/pt/cli/)
 - command line Serverless Framework [Serverless Framework](https://www.serverless.com/framework/docs/getting-started)

Your should create a file in root of project ``config.dev.yml`` with the configurations:
  - MAIL_HOST: your mail host
  - MAIL_PORT: your mail port
  - MAIL_USER: your mail user
  - MAIL_PASS: your mail password

## 📌 Install

```sh
## install dependences
❯ npm i

## run local
❯ npm run start

## deploy in environment dev AWS
❯ npm run deploy:dev

```

This application run in port **3000**.


## 🚀 Technologies

- nodejs
- javascript
- AWS
- AWS SNS
- serverless framework

<div align="center">

Made by Janapc 🤘 [Get in touch!](https://www.linkedin.com/in/janaina-pedrina/)

</div>