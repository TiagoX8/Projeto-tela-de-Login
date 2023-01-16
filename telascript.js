console.log(email);
console.log('Seu email é: ' + email);
console.log(`Seu email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O Botão foi clicado')
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O Mouse está sobre o formulário');
})

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O Mouse está fora do formuário');
})

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email, password);


    let json = {
        email,
        password
    };

    if (!json.email) {
        console.error('O Campo não foi preechido')
    } else if (!json.password) {
        console.error('O campo deve ser preenchido')
    } else {
        console.info('Dados validados com sucesso')
    }


})