import * as newsValid from '../newsletters/newslettersValidationSettings.js';

export function foldPaperPlane() {
    document.querySelectorAll('.flying-button').forEach(button => {

        let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
        
        // Get email and name from the contact form
        let getEmail = document.querySelector('#newsletter__email-input');
        let getName = document.querySelector('#newsletter__name-input');

        button.addEventListener('click', e => {
            
            // Prevent default behaviour of the button;
            e.preventDefault();

            // Validate email and name with regex
            if (!newsValid.validateNewsletterInputs(getEmail, getName)) 
                return;
                           
            // Add active class (create folding paper animation)
            if(!button.classList.contains('active')) {
                button.classList.add('active');
                    
                gsap.to(button, {
                    keyframes: [{
                        '--left-wing-first-x': 50,
                        '--left-wing-first-y': 100,
                        '--right-wing-second-x': 50,
                        '--right-wing-second-y': 100,
                        duration: .2,
                        onComplete() {
                            gsap.set(button, {
                                '--left-wing-first-y': 0,
                                '--left-wing-second-x': 40,
                                '--left-wing-second-y': 100,
                                '--left-wing-third-x': 0,
                                '--left-wing-third-y': 100,
                                '--left-body-third-x': 40,
                                '--right-wing-first-x': 50,
                                '--right-wing-first-y': 0,
                                '--right-wing-second-x': 60,
                                '--right-wing-second-y': 100,
                                '--right-wing-third-x': 100,
                                '--right-wing-third-y': 100,
                                '--right-body-third-x': 60
                            })
                        }
                    }, {
                        '--left-wing-third-x': 20,
                        '--left-wing-third-y': 90,
                        '--left-wing-second-y': 90,
                        '--left-body-third-y': 90,
                        '--right-wing-third-x': 80,
                        '--right-wing-third-y': 90,
                        '--right-body-third-y': 90,
                        '--right-wing-second-y': 90,
                        duration: .2
                    }, {
                        '--rotate': 50,
                        '--left-wing-third-y': 95,
                        '--left-wing-third-x': 27,
                        '--right-body-third-x': 45,
                        '--right-wing-second-x': 45,
                        '--right-wing-third-x': 60,
                        '--right-wing-third-y': 83,
                        duration: .25
                    }, {
                        '--rotate': 55,
                        '--plane-x': -8,
                        '--plane-y': 24,
                        duration: .35
                    }, {
                        '--rotate': 40,
                        '--plane-x': 105,
                        '--plane-y': -210,
                        '--plane-opacity': 0,
                        duration: .3,
                        onComplete() {
                            setTimeout(() => {
                                button.removeAttribute('style');
                                gsap.fromTo(button, {
                                    opacity: 0,
                                    y: -8
                                }, {
                                    opacity: 1,
                                    y: 0,
                                    clearProps: true,
                                    duration: .3,
                                    onComplete() {
                                        button.classList.remove('active');
                                    }
                                })
                            }, 2000)
                        }
                    }]
                })

                gsap.to(button, {
                    keyframes: [{
                        '--text-opacity': 0,
                        '--border-radius': 0,
                        '--left-wing-background': getVar('--primary-darkest'),
                        '--right-wing-background': getVar('--primary-darkest'),
                        duration: .1
                    }, {
                        '--left-wing-background': getVar('--primary'),
                        '--right-wing-background': getVar('--primary'),
                        duration: .1
                    }, {
                        '--left-body-background': getVar('--primary-dark'),
                        '--right-body-background': getVar('--primary-darkest'),
                        duration: .4
                    }, {
                        '--success-opacity': 1,
                        '--success-scale': 1,
                        duration: .25,
                        delay: .5
                    }]
                })

            }

        })

        // Get subscription request

    });
}



