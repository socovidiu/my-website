(function() {
  var input = document.getElementById('search');
  var grid = document.getElementById('projects-grid');
  if (!input || !grid) return;
  input.addEventListener('input', function(e){
    var q = e.target.value.toLowerCase();
    Array.prototype.forEach.call(grid.children, function(card){
      var text = card.textContent.toLowerCase();
      card.style.display = text.indexOf(q) > -1 ? '' : 'none';
    });
  });
})();