import { DeployableAwsCdkTypeScriptApp } from 'deployable-awscdk-app-ts';
const project = new DeployableAwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['deployable-awscdk-app-ts', 'aws-sdk'],
  name: 'ottofeller-home-assignment',
  projenrcTs: true,
  buildCommand: 'tsc -p tsconfig.json',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();