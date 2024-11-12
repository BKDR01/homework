        let surname = prompt("Введите фамилию:");
        let name = prompt("Введите имя:");
        let isUpperCase = confirm("Использовать ли большие буквы в фамилии и имени?");
        if (isUpperCase) {
            surname = surname.toUpperCase();
            name = name.toUpperCase();
        }
        let output = document.getElementById("output");
        output.innerHTML = `<p>Фамилия: ${surname}</p><p>Имя: ${name}</p><p>Использованы большие буквы: ${isUpperCase ? 'Да' : 'Нет'}</p>`;

