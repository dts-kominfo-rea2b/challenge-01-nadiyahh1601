// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: ['Yellow', 'Pink', 'White', 'Purple'],
    isHavePet: "Yes",
    education: [ {
        name: 'SD 01',
        city: 'jakarta',
        graduate: 2016
    },{
         name: 'SMp 02',
        city: 'jakarta',
        graduate: 2019
    },{
        name: 'SMA 03',
        city: 'jakarta',
        graduate: 2016
    }],
    favoriteRestaurant: ['Bento','Sushi','Pancake','Eggy','Padang','Tteok']	
};
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: ['Blue', 'Black', 'Grey'],
    isHavePet: "No",
    education: [ {
        name: 'SD 02',
        city: 'jakarta',
        graduate: 2010
    },{
         name: 'SMP 03',
        city: 'Bogor',
        graduate: 2013
    },{
        name: 'SMA 01',
        city: 'Surabaya',
        graduate: 2016
    },{
        name: 'Universitas Maju',
        city: 'Tanggerang',
        graduate: 0
    }],
    favoriteRestaurant: ['Bento','Tempura','Pancake','Sushi','Padang','Katsu','Geprek','eggy']	
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [ firstUser , secondUser ];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
