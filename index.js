(function() {
  var convert, renderer;

  renderer = new marked.Renderer();

  renderer.code = function(code, lang) {
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return "<pre class=\"lang:" + (lang != null ? lang : 'default') + " decode:true\">\n" + code + "\n</pre>\n";
  };

  renderer.heading = function(text, level) {
    return "<h" + level + ">" + text + "</h" + level + ">\n";
  };

  renderer.codespan = function(code) {
    return "<span class=\"lang:default decode:true crayon-inline \">" + code + "</span>";
  };

  convert = function(event) {
    marked.setOptions({
      renderer: renderer
    });
    return document.getElementById('wp').value = marked(document.getElementById('md').value);
  };

  document.getElementById('convert').addEventListener('click', convert);

  document.getElementById('wp').addEventListener('focus', function(event) {
    return this.select();
  });

}).call(this);
