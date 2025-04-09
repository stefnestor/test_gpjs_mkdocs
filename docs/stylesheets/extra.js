
// triage
hash = null
if(window.location.hash){
   hash = window.location.hash;
} else if (document.location.hash){
   hash = document.location.hash;
} else if (location.hash){
   hash = location.hash;
}
if(hash == '#pink'){
	document.getElementById('page_content').innerHTML = ' <object type=\'text/html\' data=\'pages/'+hash.substring(1)+'.html\' ></object>';
}
elif {
	document.getElementById('page_content').innerHTML = 'build-out TODO on initial page load';
}