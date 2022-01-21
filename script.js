window.onload = function () {

        //Selectors
        const navbar = document.querySelector('.navbar')
        const burger = document.querySelector('.hamburger')
        const nav = document.querySelector('.nav')
        const home = document.querySelector('.nav-home')        
        const menu = document.querySelector('.nav-menu')        
        const about = document.querySelector('.nav-about')        
        const contact = document.querySelector('.nav-contact')        
        const body = document.querySelector('body')
        const submit = document.querySelector('.submit')
        const contactForm = document.querySelector('#contact-form')
        const name = document.querySelector('.name')
        const email = document.querySelector('.email')
        const subject = document.querySelector('.subject')
        const message = document.querySelector('.message')

        //Nav
        burger.addEventListener('click', () => {

                //toggle nav
                nav.classList.toggle('nav-active')       


                //animate in               
                function linkAnimation(element, index, element2, element3, element4) {

                        function outsideFunc() {                        
                                        if(element.style.animation) {
                                                element.style.removeProperty('animation')
                                        }else {
                                         element.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                                        }
                        }
                        outsideFunc()
                        
                                element.addEventListener('click', () => {
                                        nav.classList.remove('nav-active')       

                                        burger.classList.remove('toggle');

                                        element.style.removeProperty('animation')
                                        element2.style.removeProperty('animation')
                                        element3.style.removeProperty('animation')
                                        element4.style.removeProperty('animation')

                                        body.style.overflow =''
                                })
                }

                linkAnimation(home, 0, menu, about, contact);
                linkAnimation(menu, 1, about, contact, home);
                linkAnimation(about, 2, contact, home, menu);
                linkAnimation(contact, 3, home, menu, about);



                //burger animation
                burger.classList.toggle('toggle');
                
                //hiding scroll
                if (body.style.overflow == 'hidden'){
                        body.style.overflow =''
                        }else {
                                body.style.overflow ='hidden'
                        }

        })

        
        //Window scroll functions
        window.addEventListener('scroll', function() {

                function scroll(element, className, moreThan) {
                async function insideScroll() {
                        await element.classList.toggle(className, window.scrollY >= moreThan)
                }
                insideScroll();
                }
        
                scroll(navbar, 'back-color', 70);
        })

}