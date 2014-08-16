define(['binder', 'module/tmpl', 'watchDOM', 'loop'],
  function (binder, tmpl, watchDOM, loop) {

    /*
    obj가 binder객체일경우.
    this.$regist({
        obj:{
          value: obj,
          applys: function (dom, template) {
            console.log('obj apply')
            decoding(template, this.obj, dom)
            return this.obj
          }
        }
      })
      가 잘 작동되도록 binder.js를 수정 필요.
  
    */

    var binderDOM = binder(function (obj, template, dom) {
      this.$regist({
        obj: {
          value: obj,
          applys: function (dom, template) {
            
          }
        },
        template: {
          value: template
        },
        dom: {
          value: dom,
          applys: function (obj, template) {
            encoding(template, obj, this.dom)
          }
        }
      })

      watchDOM(dom).start().register(function () {
        console.log('obj apply')
        decoding(this.obj, this.dom)
      }.bind(this))
    })

    function encoding(template, obj, dom) {
      var html = tmpl(template, obj)
        , doc = document.createElement('div')

      doc.innerHTML = html

      //value 적용
      var bindDoms = doc.querySelectorAll('[bind-value]')
      for (var i = 0, len = bindDoms.length; i < len; i++) {
        var bindDom = bindDoms[i]
          , propName = bindDom.getAttribute('bind-value')
          , value = obj[propName]

        bindDom.value = value
        bindDom.setAttribute('value', value)
      }

      diffMerge(doc, dom)
      /*
      loop(dom.querySelectorAll('[bind-value]'), function (dom) {
        var propName = dom.getAttribute('bind-value')
          , value = obj[propName]
  
        dom.value = value
        dom.setAttribute('value', value)
      })*/
    }

    function diffMerge(doc, dom) {
      dom.innerHTML = ''
      loop(doc.childNodes, function (childNode) {
        dom.appendChild(childNode)
      })
      //if (dom.parentNode){
      //  dom.parentNode.replaceChild(doc, dom) //diff로 수정 필요.
      //}
    }

    function decoding(obj, dom) {
      //value 적용
      var bindDoms = dom.querySelectorAll('[bind-value]')
      for (var i = 0, len = bindDoms.length; i < len; i++) {
        var bindDom = bindDoms[i]
          , propName = bindDom.getAttribute('bind-value')
          , value = bindDom.value

        obj[propName] = value
      }
    }

    return binderDOM
  })

/*
노드 추가
노드 삭제
속성 변경
속성 추가
속성 삭제
자식노드 추가
자식노드 변경
자식노드 삭제
*/