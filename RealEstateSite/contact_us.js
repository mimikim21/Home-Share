const dbRef=firebase.database().ref();
const detailsRef=dbRef.child('contactdetail');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost=snapshot.val();
});

function send(){
    var firstName =document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var subject=document.getElementById("subject").value;
    var comments=document.getElementById("comments").value;
    
    detailsRef.push().set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        subject: subject,
        comments: comments,
    });
}

function sign_up(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("The email and/or password does not exist. Please close out of this window and sign up for an account or try again.");
  });
}