const list = document.querySelector(".list");
const total_pay = document.getElementById('total-pay');
const service_pay = document.getElementById('service-pay');
const pay = document.getElementById('pay');
const modal_body = document.querySelector('.modal-body');
const reduction_pay = document.getElementById("reduction");
const setReduction = document.getElementById('addon-wrapping');
const reduction_name = document.getElementById('reduction_name');
reduction_name
let sumMoney = 0;
let ser = 0;
let reduction = 0;
const reductionValue = .1;

const foods = [
    {
        id: 1,
        name: 'فست فود 1',
        price: 100000,
        total: 0,
        number: 0,
        img: 'img/1.png',
        increas() {
            this.number++;
            console.log(this.total);
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 2,
        name: 'فست فود 2',
        price: 80000,
        number: 0,
        total: 0,
        img: 'img/2.png',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 3,
        name: 'فست فود 3',
        price: 30000,
        number: 0,
        total: 0,
        img: 'img/3.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 4,
        name: 'فست فود 4',
        price: 80000,
        number: 0,
        total: 0,
        img: 'img/4.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 5,
        name: 'فست فود 5',
        price: 50000,
        number: 0,
        total: 0,
        img: 'img/5.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 6,
        name: 'فست فود 6',
        price: 90000,
        number: 0,
        total: 0,
        img: 'img/6.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 5,
        name: 'فست فود 5',
        price: 50000,
        number: 0,
        total: 0,
        img: 'img/5.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
    {
        id: 6,
        name: 'فست فود 6',
        price: 90000,
        number: 0,
        total: 0,
        img: 'img/6.jpg',
        increas() {
            this.number++;
        },
        decrease() {
            if (this.number > 0)
                this.number--;
        },
        sum() {
            this.total = this.price * this.number;
        }
    },
];


const initFoods = (foods) => {
    const list = foods.map(item => {
        const section = document.createElement('section');
        section.classList = "item row align-items-center col-11 col-lg-6 bg-white rounded-2 shadow-sm mt-3";
        section.innerHTML = `
       
       <div class="col-8 ">
           <div class="d-flex flex-column ">
               <span class="text-end fw-bold">${item.name}</span>
               <div class=" d-flex text-end align-items-center ms-auto fw-light">
                   <span class="me-1"> تومان </span>
                   <span> ${item.price} </span>
               </div>
               <div class="d-flex align-items-center justify-content-between mt-4">
                   <div class=" d-flex text-end align-items-center">
                       <span class="me-1"> تومان </span>
                       <span> ${item.total} </span>
                   </div>
                   <div class="number-box">
                       <span onClick="decrease(${item.id})"><i class="bi bi-dash"></i></span>
                       <span id="item_number" class="bg-white-50">${item.number}</span>
                       <span onClick="increas(${item.id})"><i class="bi bi-plus-lg"></i></span>
                   </div>

               </div>
           </div>
       </div>
       <div class="col-4 h-100">
           <div class="h-100 w-100">
               <img src="${item.img}" class="img-fluid h-100 w-100" alt="">
           </div>
       </div> `;
        return section;
    });
    return list;
}
list.append(...initFoods(foods));

function increas(id) {
    const item = foods.find(x => x.id === id);
    item.increas();
    list.innerHTML = "";
    item.sum();
    sum();
    list.append(...initFoods(foods));
}
function decrease(id) {
    const item = foods.find(x => x.id === id);
    item.decrease();
    list.innerHTML = "";
    item.sum();
    sum();
    list.append(...initFoods(foods));
}

function sum() {
    sumMoney = foods.reduce((total, current) => total + current.total, 0);
    total_pay.innerHTML = sumMoney;
    service();
}

function service() { 
    ser = sumMoney * .05;
    service_pay.innerHTML = ser;
    if (reduction_name.value === "red") {
        getReduction();
    }
    pay.innerHTML = ser + sumMoney - reduction;
    modal_body.innerHTML = ser + sumMoney - reduction + " تومان  ";
}
function getReduction() {
    reduction =  ((ser + sumMoney) * reductionValue)
    reduction_pay.innerHTML = reduction;
    pay.innerHTML = ser + sumMoney - reduction;
}

setReduction.addEventListener('click', () => {
    if (reduction_name.value === "red") {
        getReduction();
    }
})