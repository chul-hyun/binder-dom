define(['binder', 'binderDOM', 'text!template.html'],
  function (binder, binderDOM, template) {

    QUnit.module("change Object")

    QUnit.test("object -> html", function () {
      expect(3)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          id: 'hi',
          text: 'hello',
          val: 'value'
        }
      // When
      var bd = new binderDOM(obj, template, doc)
      
      // When
      bd.obj.id = 'nice2'
      bd.obj.text = 'hello binder2'
      bd.obj.val = 'value2'
      // Then
      check()
      
      function check(){
        equal(bd.dom.childNodes[0].textContent.trim(), obj.text)
        equal(bd.dom.childNodes[0].id, bd.obj.id)
        equal(bd.dom.childNodes[0].querySelector('input').value, bd.obj.val)
      }
    })

    QUnit.test("binder -> html", function () {
      expect(12)
      // Given
      var parser = new DOMParser()
        , doc = parser.parseFromString('', "text/html").querySelector('body')
        , obj = {
          id: 'hi',
          text: 'hello',
          val: 'value'
        }
      // When
      var BinderObj = binder(obj)
      var bObj = new BinderObj()
      bd = new binderDOM(bObj, template, doc)

      // When
      bd.obj.id = 'nice2'
      bd.obj.text = 'hello binder2'
      bd.obj.val = 'value2'
      // Then
      check()

      // When
      bObj.id = 'nice3'
      bObj.text = 'hello binder3'
      bd.obj.val = 'value3'
      // Then
      check()

      function check() {
        equal(bObj.id, bd.obj.id)
        equal(bObj.text, bd.obj.text)
        equal(bObj.val, bd.obj.val)

        equal(bd.dom.childNodes[0].textContent.trim(), bd.obj.text)
        equal(bd.dom.childNodes[0].id, bd.obj.id)
        equal(bd.dom.childNodes[0].querySelector('input').value, bd.obj.val)
      }
    })
  })