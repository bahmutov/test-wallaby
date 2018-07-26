module.exports = () => {
  return {
    files: [
      'src/*.ts',
      { pattern: 'src/*-spec.ts', ignore: true }
    ],
    tests: [
      'src/*-spec.ts'
    ],
    debug: true,
    testFramework: 'jest',
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
