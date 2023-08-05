export const firebaseAuthErrorCodes = [
  {
    code: 'auth/admin-restricted-operation',
    message: 'Esta operación solo está permitida para administradores.',
  },
  {
    code: 'auth/argument-error',
    message: 'Los argumentos proporcionados para esta función no son válidos.',
  },
  {
    code: 'auth/app-not-authorized',
    message: 'La aplicación no está autorizada para acceder a Firebase Authentication.',
  },
  {
    code: 'auth/app-not-installed',
    message: 'La aplicación no tiene Firebase Authentication instalado.',
  },
  {
    code: 'auth/captcha-check-failed',
    message: 'La verificación de captcha ha fallado.',
  },
  { code: 'auth/code-expired', message: 'El código de verificación ha expirado.' },
  { code: 'auth/cordova-not-ready', message: 'Cordova aún no está listo.' },
  {
    code: 'auth/cors-unsupported',
    message: 'La autenticación de Firebase no es compatible con CORS.',
  },
  {
    code: 'auth/credential-already-in-use',
    message: 'Ya hay un usuario con las credenciales proporcionadas.',
  },
  {
    code: 'auth/custom-token-mismatch',
    message:
      'El token personalizado que proporcionaste no coincide con la credencial correspondiente.',
  },
  {
    code: 'auth/requires-recent-login',
    message: 'Debes volver a autenticarte para realizar esta acción.',
  },
  {
    code: 'auth/dependent-sdk-initialized-before-auth',
    message: 'Se ha inicializado un SDK dependiente antes de la autenticación.',
  },
  {
    code: 'auth/dynamic-link-not-activated',
    message: 'El enlace dinámico de Firebase no está activado en el proyecto actual.',
  },
  {
    code: 'auth/email-change-needs-verification',
    message: 'Debe verificar su nueva dirección de correo electrónico antes de usarla.',
  },
  {
    code: 'auth/email-already-in-use',
    message: 'Ya hay una cuenta con la dirección de correo electrónico proporcionada.',
  },
  {
    code: 'auth/emulator-config-failed',
    message: 'La configuración del emulador ha fallado.',
  },
  { code: 'auth/expired-action-code', message: 'El código de acción ha expirado.' },
  {
    code: 'auth/cancelled-popup-request',
    message: 'La solicitud de ventana emergente se ha cancelado.',
  },
  {
    code: 'auth/internal-error',
    message: 'Ha ocurrido un error interno de Firebase Authentication.',
  },
  {
    code: 'auth/invalid-api-key',
    message: 'La clave de API proporcionada no es válida.',
  },
  {
    code: 'auth/invalid-app-credential',
    message: 'Las credenciales de la aplicación proporcionadas no son válidas.',
  },
  {
    code: 'auth/invalid-app-id',
    message: 'El ID de la aplicación proporcionado no es válido.',
  },
  {
    code: 'auth/invalid-user-token',
    message: 'El token de usuario proporcionado no es válido.',
  },
  {
    code: 'auth/invalid-auth-event',
    message: 'El evento de autenticación proporcionado no es válido.',
  },
  {
    code: 'auth/invalid-cert-hash',
    message: 'El hash de certificado proporcionado no es válido.',
  },
  {
    code: 'auth/invalid-verification-code',
    message: 'El código de verificación proporcionado no es válido.',
  },
  { code: 'auth/invalid-continue-uri', message: 'El URI es incorrecto' },
  { code: 'auth/invalid-custom-token', message: 'Custom Token invalido' },
  { code: 'auth/invalid-email', message: 'Correo Electrónico Invalido' },
  { code: 'auth/wrong-password', message: 'La contraseña es incorrecta' },
  { code: 'auth/unverified-email', message: 'El correo no está verificado' },
  { code: 'auth/user-cancelled', message: 'El usuario está cancelado' },
  { code: 'auth/user-not-found', message: 'Usuario no encontrado' },
  { code: 'auth/user-disabled', message: 'Usuario deshabilitado' },
  { code: 'auth/weak-password', message: 'La contraseña proporcionada es muy débil' },
  { code: 'auth/already-initialized', message: 'Already initialized' },
  {
    code: 'auth/too-many-requests',
    message: 'Demasiados intentos de inicio de sesión. Intenta más tarde por seguridad.',
  },
];

export const DEFAULT_ERROR_MESSAGE = 'Error interno, intente más tarde';
