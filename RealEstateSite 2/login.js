const dbRef=firebase.database().ref();
const detailsRef=dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost=snapshot.val();
});

function login(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    
    detailsRef.push().set({
        username: username,
        password: password,
    });
}