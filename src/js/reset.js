document.getElementById('reset').onclick = () => {
  const email = document.getElementById('email').value

  firebase.auth().sendPasswordResetEmail(email).then(() => {

  }).catch((error) => {
    console.log(error.message)
  })
}