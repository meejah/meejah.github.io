function moar(text, target, index) {
  meejah = document.getElementById(target);
  if (index < text.length) {
    if (index == 0 && text[0] == '$') {
      text_so_far += text.slice(0, 2);
      meejah.innerHTML = text_so_far;
      window.setTimeout(moar, 25 + (Math.random()*50), text, target, index+2);
      return;
    }

    if (text[index] == '<') {
      while (text[index] != '>') {
	text_so_far += text[index];
	index++;
      }
      text_so_far += '>';
    } else {
      text_so_far += text[index];
    }
    meejah.innerHTML = text_so_far;
    if (text[0] == '$')
      window.setTimeout(moar, 10 + (Math.random()*30), text, target, index+1);
    else
      window.setTimeout(moar, 5, text, target, index+1);
  } else {
    text_so_far += '<br/>'
    meejah.innerHTML = text_so_far;// + '<span class="cursor">&nbsp;</span>';

    if (typing.length > 0) {
      if (typing[0].length == 0 || typing[0][0] != '$')
        window.setTimeout(type_one_line, 2, target);
      else
        window.setTimeout(type_one_line, 1250, target);
    }
  }
}

var ip = 'unknown';
var tor = '';

var text_so_far = ''
var typing = ['<span class="dim">Last login ' + (new Date()) + ' from ' + ip + tor + '</span>']

function type_one_line(target) {
  line = typing[0];
  typing = typing.slice(1);
  meejah = document.getElementById(target);
  meejah.innerHTML = text_so_far + '<span class="cursor">&nbsp;</span>';
  window.setTimeout(moar, 75, line, target, 0);
}

function loaded() {
  meejah = document.getElementById("meejah");
  lines = meejah.innerHTML.split('\n');
  for (var i=0; i < lines.length; i = i + 1) {
    line = lines[i];
    typing.push(line.split('<br')[0]);
  }
  meejah.innerHTML = '<span class="cursor">&nbsp;</span>';
  window.setTimeout(type_one_line, 900, 'meejah');
}
