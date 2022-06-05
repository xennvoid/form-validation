import formValidation from '../modules/form_validation.js'

const email = document.querySelector("[name='email']");
const url = 'https://webhook.site/86d8ac44-f718-4097-b6b8-3bba1edc8504';

form.onsubmit = async(e) => {
    
    e.preventDefault();

    const response = await fetch(url, {
        method: "POST",
        body: new FormData(form)
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    form.reset();

};


const languages = ['English','Ukrainian','German','Russian','Japanese','Hindi','French','Spanish','Mandarin Chinese','Italian'];
const selectLanguage = addSelectLanguage(languages);

function addSelectLanguage(languages) {
    const select = document.createElement('select');
    select.id = 'form__language';
    select.name = 'language';

    for(let i = 0; i < languages.length; i++) {
        const option = document.createElement('option')
        option.value = languages[i];
        option.textContent = languages[i];
        select.append(option);
    }

    return select;
}

form.querySelector('.form__email').after(selectLanguage);