module.exports = {
  name: 'climbing-areas-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/climbing-areas/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
