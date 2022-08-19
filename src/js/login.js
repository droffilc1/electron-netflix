document.getElementById('login').onclick = () => {
  const email = document.getElementById('email1').value
  const password = document.getElementById('password1').value

  firebase.auth().signInUserWithEmailAndPassword(email, password).then((userCred) => {
    const userId = userCred.user.uid

    alert('user signed in')

    window.location.href = 'home.html'

  }).catch((error) => {
    console.log(error.message)
  })
}