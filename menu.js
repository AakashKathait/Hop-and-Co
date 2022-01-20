        //selectors
        const menuNav = document.querySelector('.menu-nav')
        const menuItems = document.querySelector('.menu-items')
        const sides = document.querySelector('#side')
        const entrees = document.querySelector('#entree')
        const baked = document.querySelector('#baked')

        //Window scroll functions
        window.addEventListener('scroll', function() {

            function scroll(element, className, moreThan) {
                async function insideScroll() {
                        await element.classList.toggle(className, window.scrollY >= moreThan)
                }
                insideScroll();
                }

            scroll(menuNav, 'sticky', 300);
            scroll(menuItems, 'spacing', 300);
    
            function allscroll(element, delayTime, moreThan, lessThan) {
                    setTimeout(async function() {
                            await element.classList.toggle('top-hat', window.scrollY > moreThan && window.scrollY < lessThan)
                            if (window.scrollY > moreThan && window.scrollY < lessThan) {
                                    element.classList.remove('menu-nav-items')    
                            }else {
                                    element.classList.add('menu-nav-items')
                            }
                    }, delayTime);
            }
    
            allscroll(sides, 500, 620, 1200);
            allscroll(entrees, 500, 1200, 2100);
            allscroll(baked, 500, 2100, 4000)
    
            //Click Fuctions
            function allClick(element, moreThan, lessThan) {
            element.addEventListener('click', async function() {
                    await element.classList.remove('menu-nav-items')
                    await element.classList.add('top-hat') 
                setTimeout(() => {
                        await element.classList.remove('top-hat', window.scrollY < moreThan && window.scrollY > lessThan)
                }, 500);
            })
            }
    
            allClick(sides, 620, 1200);
            allClick(entrees, 1200, 2100);
            allClick(baked, 2100, 4000);
        })