var a
define(['binder', 'binderDOM', 'text!template.html'],
  function (binder, binderDOM, template) {

    QUnit.module("change HTML")

    QUnit.asyncTest("html -> object", function (assert) {
      expect(1)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          val: 'value'
        }
      // When
      var bd = new binderDOM(obj, template, doc)
      a =bd
      // When
      bd.dom.querySelector('input').value = 'value2'
      // Then
      setTimeout(function(){
        assert.equal(bd.dom.childNodes[0].querySelector('input').value, bd.obj.val)
        QUnit.start()
      }, 50)
    })

    QUnit.asyncTest("html -> binder", function (assert) {
      expect(2)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          val: 'value'
        }
      // When
      var BinderObj = binder(obj)
      var bObj = new BinderObj()
      bd = new binderDOM(bObj, template, doc)

      // When
      bd.dom.querySelector('input').value = 'value2'
      // Then
      setTimeout(function () {
        assert.equal(bObj.val, bd.obj.val)
        assert.equal(bd.dom.childNodes[0].querySelector('input').value, bd.obj.val)
        QUnit.start()
      },50)
      
    })
  })