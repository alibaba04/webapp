importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCmTZroIbWCnevV3O3vz-VMDWJaYY-hexs",
    authDomain: "sikubah-ce3f1.firebaseapp.com",
    projectId: "sikubah-ce3f1",
    storageBucket: "sikubah-ce3f1.appspot.com",
    messagingSenderId: "1073118020070",
    appId: "1:1073118020070:web:3fe92396be45a17ca11627",
    measurementId: "G-7251WCMR99"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});