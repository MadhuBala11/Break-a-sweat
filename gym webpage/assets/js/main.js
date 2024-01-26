/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=====MENU SHOW ====*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===MENU HIDDEN===*/
/*Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
    this.scroll >= 50 ? header.classList.add('bg-header'): header.classList.remove('bg-header')
}
window.addEventListener('scroll',header)
/*=============== CALCULATE JS ===============*/
const calculateFrom =document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    //to check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        //TO add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //to show message
        calculateMessage.textContent = 'Fill the height and weight'

        //TO remove the message after 3 secs
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 3000)
    } 
    else{
        //BMI FORMULA
        const cm = (calculateCm.value )/ 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))
        //Show the health status
        if(bmi < 18.5){
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
        }
        else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }
        else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent =`Your BMI is ${bmi} and you are overweight`
        }
       //To clear the input
       calculateCm.value =''
       calculateKg.value =''

       // Remove message four seconds
       setTimer(() =>{
        calculateMessage.textContent = ''
       }, 4000)   
    }
}

calculateFrom.addEventListener('submit',calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //to check if the field is having a value
    if(contactUser.value === ''){
        //add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = `You must enter your email`,
       
       // Remove message three seconds
        setTimeout(()=>{
        contactMessage.textContent = ''
       }, 3000)
    }
    else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_8ii265v','template_guf0dsp','#contact-form','VQaq6RG_bxgUd7BNm')
        .then(()=>{
          //show message and add color
          contactMessage.classList.add('color-green')
          contactMessage.textContent = `You registered successfully`,

          // Remove message after three seconds
          setTimer(()=>{
            contactMessage.textContent = ''
          }, 3000)
        },(error)=>{
            // Mail sending error
            alert('OOPS! SOMETHING HAS FAILED..',error)
        })

        // To clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit',sendEmail)