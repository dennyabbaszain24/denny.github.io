// rumus pengacakan
function getPilihanComputer() {
    const computer = Math.random();
    if (computer < 0.35) return 'gajah';
    if (computer >= 0.35 && computer < 0.67) return 'orang';
    return 'semut';

}

//hasil suwit

function getHasil(computer, player) {
    if (player == computer) return ('SERI');
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (computer == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (computer == 'orang') ? 'KALAH' : 'MENANG'; //versi IF ELSE ternary atau singkats

}

// fungsi transisi putar

function putarImg() {
    const imgComputer = document.querySelector('.img-komputer');
    const semuaGambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + semuaGambar[i++] + '.png')
        if (i == semuaGambar.length) i = 0
    }, 100);
}

//event click mouse

const pilihan = document.querySelectorAll('ul li img')
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        const imgComputer = document.querySelector('.img-komputer')
        putarImg();
        setTimeout(function () {
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
            const info = document.querySelector('.info')
            info.innerHTML = hasil;

        }, 1000)


        console.log('comp  ' + pilihanComputer)
        console.log('hasil ' + hasil)


    })
})





// penggabungan file js dengan html

// function putarImg() {
//     const imgComputer = document.querySelector('.img-komputer');
//     const semuaGambar = ['gajah', 'semut', 'orang'];
//     let i = 0;
//     const waktuMulai = new Date().getTime();
//     setInterval(function () {
//         if (new Date().getTime() - waktuMulai > 1000) {
//             clearInterval;
//             return;
//         }
//         imgComputer.setAttribute('src', 'img/' + semuaGambar[i++] + '.png')
//         if (i == semuaGambar.length) {
//             i = 0
//         }
//     }, 100);
// }


// const gajah1 = document.querySelector('.gajah');
// gajah1.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = gajah1.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     putarImg()

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;

// })


// const orang1 = document.querySelector('.orang');
// orang1.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = orang1.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     const imgComputer = document.querySelector('.img-komputer')
//     putarImg();

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;

//     console.log('comp:' + pilihanComputer)
//     console.log('player:' + pilihanPlayer)
//     console.log(hasil)
//     console.log(imgComputer)
// })

// const semut1 = document.querySelector('.semut');
// semut1.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = semut1.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     const imgComputer = document.querySelector('.img-komputer')
//     putarImg();

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;

//     console.log('comp:' + pilihanComputer)

//     console.log('player:' + pilihanPlayer)
//     console.log(hasil)
//     console.log(imgComputer)
// })

// function putaram maut





// //perubahan gambar komputer

// // // const imgComputer = document.querySelector('.img-komputer')
// // // imgComputer.addEventListener('mouseover', alert('berhasil'))