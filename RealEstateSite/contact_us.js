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