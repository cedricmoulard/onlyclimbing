module.exports = {
  name: 'onlyclimbing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/onlyclimbing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
