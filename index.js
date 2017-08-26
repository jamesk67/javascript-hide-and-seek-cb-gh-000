function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n).toString();
  }
}

function deepestChild() {
  var div = document.getElementById('grand-node');
  var current = div.querySelector('div');
  while(current != null) {
    div = current;
    current = current.querySelector('div');
  }
  return div;
}
