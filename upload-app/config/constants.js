module.exports = {
  ENV_VARS: {
    BROWSERSTACK_USERNAME: 'BROWSERSTACK_USERNAME',
    BROWSERSTACK_ACCESS_KEY: 'BROWSERSTACK_ACCESS_KEY',
    BROWSERSTACK_BUILD_NAME: 'BROWSERSTACK_BUILD_NAME',
    BROWSERSTACK_PROJECT_NAME: 'BROWSERSTACK_PROJECT_NAME',
    FRAMEWORK: 'BROWSERSTACK_FRAMEWORK',
    APP_HASHED_ID: 'BROWSERSTACK_APP_HASHED_ID',
    TEST_SUITE_ID: 'BROWSERSTACK_TEST_SUITE_ID',
  },
  URLS: {
    BASE_URL: 'api-cloud.browserstack.com/app-automate',
    APP_UPLOAD_ENDPOINT: 'upload',
    APP_FRAMEWORKS: {
      espresso: 'espresso/v2/app',
      xcuitest: 'xcuitest/v2/app',
    },
    TESTSUITE_FRAMEWORKS: {
      espresso: 'espresso/v2/test-suite',
      xcuitest: 'xcuitest/v2/test-suite',
    },
  },
  INPUT: {
    APP_PATH: 'app-path',
    FRAMEWORK: 'framework',
    TEST_SUITE: 'test-suite-path',
    APP_URL: 'app-url',
    TEST_SUITE_URL: 'test-suite-url',
    APP_CUSTOM_ID: 'app-custom-id',
    TEST_SUITE_CUSTOM_ID: 'test-suite-custom-id',
  },
};
