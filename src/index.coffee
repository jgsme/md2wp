renderer = new marked.Renderer()
renderer.code = (code, lang)->
  """
  <pre class="lang:#{if lang? then lang else 'default'} decode:true">#{code}</pre>

  """

renderer.heading = (text, level)->
  """
  <h#{level}>#{text}</h#{level}>

  """

convert = (event)->
  marked.setOptions
    renderer: renderer

  document.getElementById('dummy').innerHTML = marked document.getElementById('md').value
  document.getElementById('wp').value = document.getElementById('dummy').innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')

document.getElementById('convert').addEventListener 'click', convert
document.getElementById('wp').addEventListener 'focus', (event)-> @select()
