angular.module('emailComposerApp')
  .config(['$translateProvider', function ($translateProvider) {

    $translateProvider.translations('en', {
      'title': 'Send E-mail',
      'to': 'To',
      'subject': 'Subject',
      'send': 'Send',
      'message': 'Message',
      'attached.files': 'Attached files',
      'attached.tooltip': 'Attach images'
    });

    $translateProvider.translations('es', {
      'title': 'Enviar E-mail',
      'to': 'Para',
      'subject': 'Asunto',
      'send': 'Enviar',
      'message': 'Mensaje',
      'attached.files': 'Ficheros adjuntos',
      'attached.tooltip': 'Adjuntar imágenes'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
  }]);
