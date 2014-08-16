//requireJS 기본 설정 부분
requirejs.config({

  baseUrl: './', 
  map: {
    // '*' means all modules will get 'jquery-private'
    // for their 'jquery' dependency.
    '*': {
      'css': '../bower_components/require-css/css.min'
    }
  },
  paths: {
    'QUnit': '../bower_components/qunit/qunit/qunit',
    'text': '../bower_components/requirejs-text/text',
    'binder': '../bower_components/binder/dist/binder',
    'binderDOM': '../dist/binderDOM',
    'watchDOM': '../bower_components/watchDOM/dist/watchDOM'
  },

  shim: {
    'QUnit': {
      deps: ['css!../bower_components/qunit/qunit/qunit'], 
      exports: 'QUnit'
    }
  }
});

//requireJS를 활용하여 모듈 로드
require(
  ['QUnit'],
  function (QUnit) {
    QUnit.config.autostart = false;

    var testFiles = ['convert', 'change Object', 'change HTML'];
    
    require(testFiles, function () {
     
      QUnit.start();
      QUnit.load();
    });
  });