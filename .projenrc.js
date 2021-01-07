const { AwsCdkTypeScriptApp, CdkApprovalLevel } = require('projen');

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.83.0',
  cdkVersionPinning: true,
  jest: false,
  deps: ['cdk-simplewebsite-deploy'],
  requireApproval: CdkApprovalLevel.NEVER,
  name: 'BeckerGamesWeb',
});

project.synth();
