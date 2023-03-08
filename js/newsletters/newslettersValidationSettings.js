// Regex email format
function validateEmail(inputText) {
    // Example of valid email id

    //     mysite@ourearth.com
    //     my.ownsite@ourearth.org
    //     mysite@you.me.net

    // Example of invalid email id

    //     mysite.ourearth.com [@ is not present]
    //     mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
    //     @you.me.net [ No character before @ ]
    //     mysite123@gmail.b [ ".b" is not a valid tld ]
    //     mysite@.org.org [ tld can not start with dot "." ]
    //     .mysite@mysite.org [ an email should not be start with "." ]
    //     mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
    //     mysite..1234@yahoo.com [double dots are not allowed]
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    // Correct match return 0, other wise, wrong emails format is -1
    return inputText.value.match(mailFormat) ? 0 : -1;
    
}

// Regex name format
function validateName(inputText) {
    // Validate only alphabetical characters [a-zA-Z]
    const nameFormat = /^[A-Za-z]+([A-Za-z\s]*)$/;

    // Correct match return 0, other wise, wrong names format is -2
    return inputText.value.match(nameFormat) ? 0 : -2;
}

// Validate both mail and name generating a different error message for each case
export function validateNewsletterInputs(email, name) {
    var validationIncomes = 0;
    var errorBox;

    // Verify mail and name and add their code values
    validationIncomes += validateEmail(email) + validateName(name);

    switch (validationIncomes) {
        // Mail and Name are correct
        case 0:
            return true;
        // Mail format is wrong
        case -1: 
            errorBox = new ErrorBox("Indrouce por favor una dirección de correo válida!",
                                    "Un correo válido debe tener un principio alfanumérico, debe contener una @, etc.");
            break;
        // Name format is wrong
        case -2: 
            errorBox = new ErrorBox("Indrouce por favor un nombre válido!",
                                    "Introduce por favor únicamente letras mayúsculas y minúsculas, sin números, carácteres especials o guiones.");
            break;
        // Both name and mail formats are wrong
        case -3:
            errorBox = new ErrorBox("Introduce por favor un nombre y dirección de correo válidos!" , 
                                    "Introduce por favor únicamente letras mayúsculas y minúsculas, sin números, carácteres especials o guiones " + 
                                    "y un correo electrónico con un principio alfanumérico, que contenga una @, un dominio, etc.");
            break;
    }
    
    // Call the render method on the error box instance, if it was created
    if (errorBox) {
        errorBox.render();
        return false;
    } else {
        return true;
    }
}