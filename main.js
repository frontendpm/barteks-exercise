/*
JS:
1. you may use jQuery, but you don't have to
2. {{socialNetworkName}} should be replaced with chosen social network name
3. hash (#) should never be added to page's url
4. bonus: clicking on the translucent background closes the dialog
5. bonus: use Class
*/
function dialogBox($component) {
  const questionContainer = $component.find('.question');
  const questionContainerHtml = questionContainer.html();
  const socialItem = $('.social-link');
  const buttonOk = $component.find('.button--ok');
  const buttonCancel = $component.find('.button--cancel');
  const dialogContainer = $('.dialog');
  let socialLink = socialItem.attr('data-url');

  function init() {
    attachDialogBox();
    closeDialog();
  }

  init();

  function attachDialogBox() {
    socialItem.on('click', function() {

      const socialText = $(this).text();
      socialLink = $(this).attr('data-url');

      questionContainer.html(questionContainerHtml.replace('{{socialNetworkName}}', socialText));
      questionContainer.html(questionContainer.html().replace('{{socialNetworkName}}', socialText));
      dialogContainer.removeClass('is-hidden');

      buttonOk.on('click', function() {

        window.open(`https://${socialLink}`);

      });

      buttonCancel.on('click', function() {

        dialogContainer.addClass('is-hidden');

      });

    });
  }

  function closeDialog() {
    $(document).on('click', function(event) {

      if (!$(event.target).closest('.container,.question,.social-link').length) {

        $('body').find(dialogContainer).addClass('is-hidden');

      }
    });
  }

}

$(document).ready(function() {

  const $dialogWindow = $('.dialog');

  dialogBox($dialogWindow);

});
