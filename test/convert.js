define(['binder', 'binderDOM', 'text!template.html'],
  function (binder, binderDOM, template) {

    QUnit.module("convert")

    QUnit.test("object", function () {
      expect(4)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          id: 'hi',
          text: 'hello'
        }
      // When
      var bd = new binderDOM(obj, template, doc)
      // Then
      equal(bd.obj.id, obj.id)
      equal(bd.obj.text, obj.text)

      equal(bd.dom.childNodes[0].textContent.trim(), obj.text)
      equal(bd.dom.childNodes[0].id, obj.id)
    })

    QUnit.test("binder", function () {
      expect(6)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          id: 'hi',
          text: 'hello'
        }
      // When
      var BinderObj = binder(obj)
      var bObj = new BinderObj()
      bd = new binderDOM(bObj, template, doc)
      // Then
      equal(bObj.id, obj.id)
      equal(bObj.text, obj.text)
      equal(bd.obj.id, obj.id)
      equal(bd.obj.text, obj.text)

      equal(bd.dom.childNodes[0].textContent.trim(), obj.text)
      equal(bd.dom.childNodes[0].id, obj.id)
    })
  })