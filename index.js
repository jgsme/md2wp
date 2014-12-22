(function() {
  var convert, renderer;

  renderer = new marked.Renderer();

  renderer.code = function(code, lang) {
    return "<pre class=\"lang:" + (lang != null ? lang : 'default') + " decode:true\">" + code + "</pre>\n";
  };

  renderer.heading = function(text, level) {
    return "<h" + level + ">" + text + "</h" + level + ">\n";
  };

  convert = function(event) {
    marked.setOptions({
      renderer: renderer
    });
    document.getElementById('dummy').innerHTML = marked(document.getElementById('md').value);
    return document.getElementById('wp').value = document.getElementById('dummy').innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  };

  document.getElementById('convert').addEventListener('click', convert);

  document.getElementById('wp').addEventListener('focus', function(event) {
    return this.select();
  });

}).call(this);
