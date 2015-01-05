renderer = new marked.Renderer()
renderer.code = (code, lang)->
  code = code.replace /&/g, '&amp;'
    .replace /</g, '&lt;'
    .replace />/g, '&gt;'
    .replace /"/g, '&quot;'
    .replace /'/g, '&#39;'

  """
  <pre class="lang:#{if lang? then lang else 'default'} decode:true">
  #{code}
  </pre>

  """

renderer.heading = (text, level)->
  """
  <h#{level}>#{text}</h#{level}>

  """

renderer.codespan = (code)-> "<span class=\"lang:default decode:true crayon-inline \">#{code}</span>"

convert = (event)->
  marked.setOptions
    renderer: renderer
  document.getElementById('wp').value = marked document.getElementById('md').value

document.getElementById('convert').addEventListener 'click', convert
document.getElementById('wp').addEventListener 'focus', (event)-> @select()
