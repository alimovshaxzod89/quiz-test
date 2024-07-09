const questions = [
    {
        id: 1,
        img: 'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg',
        question: "Qishloq xo`jalik ishlari olib boriladigan dalada yuk avtomobili va traktorning harakat trayektoriyasi kesishsa. Kim yo`l berishi kerak?",
        options: [
            { text: 'O`ng tomondagi haydovchi', isCorrect: false },
            { text: 'O`ng tomonidan transport vositasi yaqinlashayotgan haydovchi', isCorrect: true },
            { text: 'Traktor haydovchisi yuk avtomobili haydovchisiga', isCorrect: false },
            { text: 'Yuk avtomobili haydovchisi traktor haydovchisiga', isCorrect: false },
        ],
    },
    {
        id: 2,
        img: 'https://e-avtoshkola.uz/uploads/tests/questions/92/88-50.jpg',
        question: "Ushbu tik chiziq nimani bildiradi?",
        options: [
            { text: 'Xavfli chorrahaga yaqinlashganlik haqida', isCorrect: false },
            { text: 'Temir yo‘l kesishmasiga yaqinlashganlik haqida', isCorrect: false },
            { text: 'Yo‘lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo‘l to‘siqlarining yon yuzalarini bildiradi', isCorrect: true },
        ],
    },
    {
        id: 3,
        img: 'https://e-avtomaktab.uz/storage/tests/70,3.png',
        question: "Belgi ostidagi ko`rsatkich nimani ko`rsatadi?",
        options: [
            { text: 'Tor qismni aylanib o`tish joyigacha masofani', isCorrect: false },
            { text: 'Belgidan yo`lning tor qismigacha bo`lgan masofani', isCorrect: true },
            { text: 'Yo`lning tor qismi uzunligini', isCorrect: false },
        ],
    },
    {
        id: 4,
        img: 'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg',
        question: "M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig‘indisiga yo‘l qo‘yiladi:",
        options: [
            { text: '25 <sup>0</sup>', isCorrect: false },
            { text: '10<sup>0</sup>', isCorrect: false },
            { text: '20<sup>0</sup>', isCorrect: true },
        ],
    },
    {
        id: 5,
        img: 'https://e-avtoshkola.uz/uploads/tests/questions/74/5.jpg',
        question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
        options: [
            { text: 'Traktor haydovchisi', isCorrect: true },
            { text: 'Yuk avtomobil haydovchisi', isCorrect: false },
        ],
    },
    {
        id: 6,
        img: 'https://e-avtoshkola.uz/uploads/tests/questions/74/2.jpg',
        question: "Qaysi transport vositasining haydovchisi quvib o`tishni to`g`ri bajarmoqda?",
        options: [
            { text: 'Ikkala haydovchi to`g`ri bajarmoqda', isCorrect: false },
            { text: 'Ko`k(yengil) avtomobil haydovchisi', isCorrect: false },
            { text: 'Yashil(yuk) avtomobil haydovchisi', isCorrect: true },
        ],
    },
    {
        id: 7,
        img: 'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg',
        question: "Haydovchining o‘rtacha reaksiya vaqti deb qabul qilingan:",
        options: [
            { text: 'Taxminan 1 sekund', isCorrect: false },
            { text: 'Taxminan 5 sekund', isCorrect: false },
            { text: 'Taxminan 0.2 sekund', isCorrect: true },
        ],
    },
    {
        id: 8,
        img: 'https://e-avtomaktab.uz/storage/tests/mix17.4.jpg',
        question: "Mazkur tik chiziqlar nimani anglatadi?",
        options: [
            { text: 'Yo`lnig kichik radiusli burilishlarini yo`l chetiga o`rnatilgan to`siqlarning yon yuzalarini bildiradi.', isCorrect: false },
            { text: 'Boshqa joylardagi to`siqlarning yon yuzalarini bildiradi', isCorrect: true },
        ],
    },
    {
        id: 9,
        img: 'https://e-avtoshkola.uz/uploads/tests/questions/92/88-8.jpg',
        question: "Ushbu yo‘l belgisi nimani bildiradi?",
        options: [
            { text: 'Xavfli yuk tashiyotgan transport vositalari harakatini taqiqlaydi', isCorrect: true },
            { text: 'Portlovchi va tez alangalanadigan yuk tashiyotgan transport vositalari harakatini taqiqlaydi', isCorrect: false },
        ],
    },
    {
        id: 10,
        img: 'https://e-avtoshkola.uz/uploads/tests/questions/92/88-4.jpg',
        question: "Qaysi yo‘l belgilari yo‘lning tor qismida haydovchiga ustunlik beradi?",
        options: [
            { text: 'Faqat d', isCorrect: true },
            { text: 'Faqat b', isCorrect: false },
            { text: 'Faqat c', isCorrect: false },
            { text: 'a va b', isCorrect: false },
        ],
    },
]