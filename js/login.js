function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    if(profile.getEmail == "/^\w+([\.-]?\w+)*@utvam.edu.mx"){
        window.location.href("https://angelvt.github.io/ViSAC/home.html");
    }
    else{
        window.location.href("https://angelvt.github.io/ViSAC/main.html");
    }
  }