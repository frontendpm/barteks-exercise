/*
JS:
1. you may use jQuery, but you don't have to
2. {{socialNetworkName}} should be replaced with chosen social network name
3. hash (#) should never be added to page's url
4. bonus: clicking on the translucent background closes the dialog
5. bonus: use Class
*/
let str = "{{socialNetworkName}}";
let socialNetworkName = '';

function toggleDialog() {
  $('.dialog').toggleClass('is-hidden');
}

function replaceNetworkName(name) {
  const regex = new RegExp(`${str}`, 'g')
  const newhtml = $('.question').html().replace(regex, name);
  $('.question').html(newhtml);
  str = name;
}

$('.social-link').on('click', function() {
  socialNetworkName = $(this).attr('data-url');
  toggleDialog();
  replaceNetworkName(socialNetworkName);
});

$('.button--ok').on('click', function() {
	//seems that redirection doesn't work on jsfiddle, but the function works correctly
  window.location.href = 'http://' + socialNetworkName;
});

$('.button--cancel').on('click', function() {
  toggleDialog();
});

$('.dialog').on('click', function(e) {
  if (e.target !== this)
    return;
  toggleDialog();
})
