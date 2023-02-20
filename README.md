# cucumber-js-cypress-browserstack

## Introduction

Cypress is a next generation front end testing tool built for the modern web. Cucumber is a software tool that supports behavior-driven development (BDD).

This BrowserStack Example repository demonstrates a Cypress framework with parallel testing capabilities. The Cypress test scripts are written for the open source [BrowserStack Demo web application](https://bstackdemo.com) ([Github](https://github.com/browserstack/browserstack-demo-app)). This BrowserStack Demo App is an e-commerce web application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The Cypress tests are run on different platforms like on-prem and BrowserStack using various run configurations and test capabilities.

## Pre-requisites

You need BrowserStack credentials to be able to run Cypress tests. You have to replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in the sample scripts in this repository with your BrowserStack credentials which can be found in your [Account Settings](https://www.browserstack.com/accounts/settings) page.

**Alternatively, you can set the environment variables `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` with your credentials and all the scripts in this repository should work fine**

## Run Cypress test on BrowserStack

1. Clone this repository
2. Install the dependencies using `npm install`
3. Run the sample script using `npm run bstack`

## Run sample test on privately hosted websites

1. Clone the [BrowserStack demo application](https://github.com/browserstack/browserstack-demo-app) repository.

```sh
git clone https://github.com/browserstack/browserstack-demo-app
```

2. Please follow the README.md on the BrowserStack demo application repository to install and start the dev server on localhost.
3. You can then run the sample Local test using `npm run bstack-local`

## Additional Resources

- View your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- Documentation for writing [Automate test scripts in Cypress](https://www.browserstack.com/docs/automate/cypress)
- [List of Browsers & mobile devices](https://www.browserstack.com/list-of-browsers-and-platforms/cypress_testing) for automation testing on BrowserStack
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering
