/*=============== SHOW HIDDEN - PASSWORD ===============*/
const background = document.getElementById('background')
const passwordInput = document.getElementById('login-pass')
const showHiddenPass = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)
   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
   passwordInput.addEventListener('input', (e) => {
      const length = e.target.value.length
  
      const bgBlur = 20 - length*2
      background.style.filter = `blur(${bgBlur}px)`
   })  
}

showHiddenPass('login-pass','login-eye')