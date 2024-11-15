//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bò Cạp tái chế',
            img: './assets/img/products/bocap.jfif',
            category: 'Món mặn',
            price: 250000,
            desc: ''
        },
        {
            id: 2,
            status: 1,
            title: 'Chim Bói Cá tái chế',
            img: './assets/img/products/chimboica.jfif',
            category: 'Món mặn',
            price: 120000,
            desc: ''
        },
        {
            id: 3,
            status: 1,
            title: 'Chó tái chế bằng ốc',
            img: './assets/img/products/cho.jfif',
            category: 'Món mặn',
            price: 111000,
            desc: ''
        },
        {
            id: 4,
            status: 1, title: 'Ốc Sên tái chế',
            img: './assets/img/products/ocsen.jfif',
            category: 'Món mặn',
            price: 90000,
            desc: ''
        },
        {
            id: 5,
            status: 1,
            title: 'Lợn Rừng tái chế',
            img: './assets/img/products/lonrung.jfif',
            category: 'Món mặn',
            price: 500000,
            desc: ''
        },

        {
            id: 6,
            status: 1,
            title: 'Rồng tái chế bằng sắt vụn',
            img: './assets/img/products/rong.jfif',
            category: 'Món mặn',
            price: 390000,
            desc: ''
        },

        {
            id: 7,
            status: 1,
            title: 'Chậu đựng hoa bằng lốp xe',
            category: 'Món mặn',
            img: './assets/img/products/chau.jfif',
            price: 50000,
            desc: ''
        },

        {
            id: 8,
            status: 1,
            title: 'Chổi quét tái chế bằng chai nhựa',
            img: './assets/img/products/choi.jfif',
            category: 'Món mặn',
            price: 50000,
            desc: ''
        },

        {
            id: 9,
            status: 1,
            title: 'Ghế ngồi tái chế từ sắt vụn bã,lốp xe',
            category: "Nước uống",
            img: './assets/img/products/ghe.jfif',
            price: 1500000,
            desc: ''
        },
        {
            id: 10,
            status: 1,
            title: 'Đồng cáp',
            category: "Nước uống",
            img: './assets/img/products/dongcap.jfif',
            price: 180000,
            desc: ''
        },
        {
            id: 11,
            status: 1,
            title: 'Bã sắt',
            category: 'Món tráng miệng',
            img: './assets/img/products/basat.jfif',
            price: 6500,
            desc: ''
        },
        {
            id: 12,
            status: 1,
            title: 'Đồng cháy',
            img: './assets/img/products/dongchay.jfif',
            category: 'Món mặn',
            price: 115000,
            desc: ''
        },
        {
            id: 13,
            status: 1,
            title: 'Đồng đỏ',
            img: './assets/img/products/dongdo.jpg',
            category: 'Món mặn',
            price: 145000,
            desc: ''
        },
        {
            id: 14,
            status: 1,
            title: 'Inox 316',
            img: './assets/img/products/inox316.jfif',
            category: 'Món mặn',
            price: 39000,
            desc: ''
        },
        {
            id: 15,
            status: 1,
            title: 'Linh kiện điện tử',
            img: './assets/img/products/linhkien.jfif',
            category: 'Món mặn',
            price: 347000,
            desc: ''
        },
        {
            id: 16,
            status: 1,
            title: 'Nhựa ABS',
            img: './assets/img/products/nhuaabs.jfif',
            category: 'Món mặn',
            price: 30000,
            desc: ''
        },
        {
            id: 17,
            status: 1,
            title: 'Sắt gỉ sét',
            img: './assets/img/products/satriset.jfif',
            category: 'Món mặn',
            price: 9500,
            desc: ''
        },
        {
            id: 18,
            status: 1,
            title: 'Sắt vụn',
            img: './assets/img/products/satvun.jfif',
            category: 'Món mặn',
            price: 8500,
            desc: ''
        },
        {
            id: 19,
            status: 1,
            title: 'Vỏ lon Redbull',
            img: './assets/img/products/Redbull.jpg',
            category: 'Món mặn',
            price: 36000,
            desc: ''
        },
        {
            id: 20,
            status: 1,
            title: 'Vỏ lon Pepsi',
            img: './assets/img/products/pessi.jpg',
            category: 'Món mặn',
            price: 36500,
            desc: ''
        },
        {
            id: 21,
            status: 1,
            title: 'Nhựa HI',
            category: 'Món mặn',
            img: './assets/img/products/nhuaHI.jpg',
            price: 43000,
            desc: ''
        },
        {
            id: 22,
            status: 1,
            title: 'Nhôm loại 1 (Nhôm đặc nguyên chất)',
            category: 'Món mặn',
            img: './assets/img/products/nhom1.jpg',
            price: 55000,
            desc: ''
        },

        {
            id: 23,
            status: 1,
            title: 'Máy bơm cũ',
            category: 'Món mặn',
            img: './assets/img/products/bomcu.jpg',
            price: 1900000,
            desc: ''
        },

        {
            id: 24,
            status: 1,
            title: 'Sắt',
            img: './assets/img/products/sat.jpg',
            category: 'Món mặn',
            price: 13000,
            desc: ''
        },
        {
            id: 25,
            status: 1,
            title: 'Đồng phế liệu',
            img: './assets/img/products/dong.jpg',
            category: 'Món mặn',
            price: 145000,
            desc: ''
        },

        {
            id: 26,
            status: 1,
            title: 'Sắt phế liệu',
            category: 'Món mặn',
            img: './assets/img/products/satpl.jpg',
            price: 9500,
            desc: ''
        },

        {
            id: 27,
            status: 1,
            title: 'Nhựa PVC, PET',
            category: 'Món mặn',
            img: './assets/img/products/nhuapvc.jpg',
            price: 12000,
            desc: ''
        },

        {
            id: 28,
            status: 1,
            title: 'Đồng đỏ phế liệu',
            category: 'Món mặn',
            img: './assets/img/products/dongdo.jfif',
            price: 235000,
            desc: ''
        },

        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Nguyễn Dương Hân",
            phone: "0389518722",
            password: "123456",
            address: 'https://duonghan.click',
            email: 'hacknasa202@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Nguyễn Quốc Cường",
            phone: "0943566081",
            password: "123456",
            address: 'Cuongml',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
