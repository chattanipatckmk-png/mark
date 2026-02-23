// 🔥 ฐานข้อมูลอาหาร (รูป + แคลอรี่)
const foods = [
    { name: "ข้าวผัด", calories: 650, img: "photo/ข้าวผัด.jpg" },
    { name: "กะเพราไก่", calories: 550, img: "photo/กะเพราไก่.jpg" },
    { name: "ส้มตำไทย", calories: 250, img: "photo/ส้มตำไทย.jpg" },
    { name: "ต้มยำกุ้ง", calories: 300, img: "photo/ต้มยำกุ้ง.jpg" },
    { name: "ผัดไทยกุ้ง", calories: 500, img: "photo/ผัดไทยกุ้ง.jpg" },
    { name: "สเต๊กไก่", calories: 800, img: "photo/สเต๊กไก่.jpg" },
    { name: "สลัดผัก", calories: 200, img: "photo/สลัดผัก.jpg" },
    { name: "ข้าวมันไก่", calories: 600, img: "photo/ข้าวมันไก่.jpg" },
    { name: "ข้าวไข่เจียว", calories: 450, img: "photo/ข้าวไข่เจียว.jpg" },
    { name: "บะหมี่เกี๊ยวหมูแดง", calories: 700, img: "photo/บะหมี่เกี๊ยวหมูแดง.jpg" }
];

// ช่วงแคลอรี่ตามอายุ
function getRange(age){
    if(age >=1 && age <=8) return {min:1000, max:1400};
    if(age >=9 && age <=18) return {min:1600, max:2200};
    if(age >=19 && age <=50) return {min:1800, max:2400};
    if(age >=51) return {min:1400, max:1800};
}

// สุ่มอาหารตามอายุ
function randomByAge(){

    let age = parseInt(document.getElementById("ageInput").value);
    let resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = "";

    if(isNaN(age) || age <=0){
        alert("กรุณากรอกอายุให้ถูกต้อง");
        return;
    }

    let range = getRange(age);

    let total = 0;
    let selected = [];
    let shuffled = [...foods].sort(() => 0.5 - Math.random());

    for(let food of shuffled){
        if(total + food.calories <= range.max){
            selected.push(food);
            total += food.calories;
        }
        if(total >= range.min) break;
    }

    if(total < range.min){
        resultBox.innerHTML = "<p style='color:red'>อาหารในฐานข้อมูลไม่พอ</p>";
        return;
    }

    let html = `<p>ช่วงที่ควรได้รับ: ${range.min}-${range.max} kcal</p>`;

    selected.forEach(f=>{
        html += `
            <div>
                <img src="${f.img}">
                <p>${f.name}</p>
                <p>${f.calories} kcal</p>
            </div>
        `;
    });

    html += `<p class="total">รวม ${total} kcal</p>`;

    resultBox.innerHTML = html;
}