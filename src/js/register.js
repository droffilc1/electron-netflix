document.getElementById('signup').onclick = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCred) => {
    const userId = userCred.user.uid

    firebase.firestore().collection('users').doc(userId).set({
      userEmail: email,
      userId: userId
    }).then(() => {
      window.location.href = 'home.html'
    })
  }).catch((error) => {
    console.log(error.message)
  })

}