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

            scroll(menuNav, 'sticky', 350);
            scroll(menuItems, 'spacing', 350);
    
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
    
            })
            //Click Fuctions
            function allClick(element) {
            element.addEventListener('click', () => {
                    element.classList.remove('menu-nav-items')
                    element.classList.add('top-hat')
            })
            }
    
            allClick(sides);
            allClick(entrees);
            allClick(baked);