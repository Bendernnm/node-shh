module.exports = {
  REQUEST_METHODS: {
    GET : 'GET',
    HEAD: 'HEAD',
  },
  EVENTS         : {
    SERVER_STOP   : 'serverStop',
    SERVER_START  : 'serverStart',
    STREAM_ERROR  : 'streamError',
    SERVER_ERROR  : 'serverError',
    SERVER_RESTART: 'serverRestart',
    SERVER_REQUEST: 'serverRequest',
    SERVER_WARNING: 'serverWarning',
  },
  EVENT_CODES    : {
    SERVER_REQUEST   : 1022,
    SERVER_START     : 1031,
    SERVER_STOP      : 1032,
    SERVER_RESTART   : 1032,
    SERVER_ERROR     : 1034,
    WRONG_MESSAGE    : 1041,
    WRONG_FILE_FORMAT: 1042,
    STREAM_ERROR     : 1043,
    FILE_NOT_FOUND   : 1044,
  },
  MESSAGES       : {
    WRONG_MESSAGE         : 'Wrong message',
    FILE_NOT_FOUND        : 'File not found',
    SERVER_ALREADY_RUNNING: 'Server already running',
    WRONG_FILE_FORMAT     : 'Not allowed file\'s format',
  },
};
