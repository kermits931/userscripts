name = 
version = 
# "repository"
type = 
# "repository"
url = 
# "devDependencies"
bluebird = 
# "devDependencies"
eslint-plugin-google-camelcase = 
# "devDependencies"
google-closure-compiler = 
# "devDependencies"
grunt = 
# "devDependencies"
grunt-bump = 
# "devDependencies"
grunt-cli = 
# "devDependencies"
grunt-contrib-clean = 
# "devDependencies"
grunt-contrib-coffee = 
# "devDependencies"
grunt-contrib-copy = 
# "devDependencies"
grunt-contrib-qunit = 
# "devDependencies"
grunt-eslint = 
# "devDependencies"
grunt-prompt = 
# "devDependencies"
load-grunt-tasks = 
# "devDependencies"
superagent = 
# "scripts"
test = 
description = 
# "bugs"
url = 
homepage = 
main = 
# "directories"
test = 
# .list
keywords = 
author = 
license = 
// = \=/UserScript\=\=
//\ @name\ GoEar\ HotLink\ 2015 = 
//\ @author\ laurenceHR = 
//\ @include\ *goear.com/listen/* = 
//\ @include\ *goear.com/listen/*/* = 
//\ @version\ 1.5 = 
//\ @description\ Goear\ HotLink\ for\ download = 
//\ Script\ by\ laurenceHR\ -\ www.daxes.net = 
//////\ Get\ Song\ ID = 
var\ url = document.URL;
var\ urls = url.split('/');
var\ id = urls[4];
///////\ Get\ HotLink = 
var\ hotlink = "http\://www.goear.com/action/sound/get/" + id;
//////\ Add\ HotLink = 
addHotLink(hotlink); = 
////// = 
/******\ \ Function\ For\ Add\ Link\ *****/ = 
function\ addHotLink(link){ = 
//var\ style = document.createElement('style');
//var\ css = "\#main.listen .actions .down {background-position-y\: 8px;}" + "\n";
//\ \ \ \ style.textContent = css;
//var\ head = document.getElementsByTagName('head')[0];
//\ \ \ \ head.appendChild(style); = 
var\ a = document.createElement('a');
a.href = link;
a.target = "_blank";
a.innerHTML = '<span class\="glyphicons download"></span>';
a.title = 'Get HotLink';
a.className = '';
a.id = 'hotlink';
var\ li = document.createElement('li');
li.className = 'action_item';
li.appendChild(a); = 
var\ ul_actions = document.getElementsByClassName('actions')[0];
ul_actions.appendChild(li); = 
} = 