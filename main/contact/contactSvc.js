angular.module('myApp')

.service('contactSvc', function($http) {

  let sendUrl = 'https://formspree.io/laarni.astrid@gmail.com';
  let sendData = {
    name: '',
    email: '',
    message: ''
  };
  let sendSuccess = 'Your message was sent!';

  // ---------- setters ---------- //
  this.setData = (name, email, message) => {
    sendData.name = name;
    sendData.email = email;
    sendData.message = message;
  }

  // ---------- getters ---------- //
  this.getUrl = () => {
    return sendUrl;
  }

  // ---------- manipulators ---------- //
  this.sendMessage = (name, email, message) => {
    $.ajax({
      url: sendUrl,
      method: 'POST',
      data: sendData,
      dataType: 'json',
      error: (response) => {
        return response;
      },
      success: () => {
        return sendSuccess;
      }
    })
  }

})  // end contactSvc
