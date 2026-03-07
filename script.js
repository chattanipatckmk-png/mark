
// ข้อมูลอาหาร (ผมใส่ให้เยอะๆ ครบทุกประเภทเลยครับ)
const foodData = [
    // --- โซนอาหารเหนือ / ไทใหญ่ (ตามที่เคยขอไว้) ---
    { name: "ข้าวซอยไก่", cal: 500, type: "noodle", img: "ข้าวซอยไก่.JPG" },
    { name: "ขนมจีนน้ำเงี้ยว", cal: 350, type: "noodle", img: "ขนมจีนน้ำเงี้ยว.JPG" },
    { name: "แกงฮังเลหมู + ข้าวเหนียว", cal: 600, type: "rice", img: "เเกงฮังเลหมู.JPG" },
    { name: "ไส้อั่ว + ข้าวเหนียว", cal: 550, type: "rice", img: "ไส้อั่ว.JPG" },
    { name: "ลาบหมูคั่ว", cal: 250, type: "rice", img: "ลาบหมูคั่ว.jpg" },
    { name: "น้ำพริกหนุ่ม + แคบหมู", cal: 350, type: "clean", img: "น้ำพริกหนุ่ม.JPG" },
    { name: "แกงโฮะ", cal: 400, type: "rice", img: "เเกงโฮะ.JPG" },
    { name: "จอผักกาด", cal: 150, type: "clean", img: "จอผักกาด.JPG" },

    // --- เมนูเส้น / ก๋วยเตี๋ยว ---
    { name: "ก๋วยเตี๋ยวเรือหมูน้ำตก", cal: 450, type: "noodle", img: "ก๋วยเตี๋ยวเรือหมูน้ำตก.png" },
    { name: "บะหมี่เกี๊ยวหมูแดง", cal: 400, type: "noodle", img: "บะหมี่เกี๊ยวหมูแดง.JPG" },
    { name: "ผัดไทยกุ้งสด", cal: 550, type: "noodle", img: "ผัดไทยกุ้งสด.JPG" },
    { name: "ราดหน้าหมูหมัก", cal: 450, type: "noodle", img: "ราดหน้าหมูหมัก.JPG" },
    { name: "ผัดซีอิ๊วหมู", cal: 600, type: "noodle", img: "ผัดซีอิ๊วหมู.JPG" },
    { name: "สุกี้น้ำรวมมิตร", cal: 350, type: "noodle", img: "สุกี้น้ำรวมมิตร.JPG" },
    { name: "สุกี้แห้งไก่", cal: 400, type: "noodle", img: "สุกี้แห้งไก่.JPG" },
    { name: "ก๋วยจั๊บน้ำข้น", cal: 500, type: "noodle", img: "ก๋วยจั๊บน้ำข้น.JPG" },
    { name: "เย็นตาโฟต้มยำ", cal: 450, type: "noodle", img: "เย็นตาโฟต้มยำ.JPG" },
    { name: "บะหมี่เป็ดตุ๋น", cal: 450, type: "noodle", img: "บะหมี่เป็ดตุ๋น.JPG" },
    { name: "มาม่าต้มยำกุ้งหม้อไฟ", cal: 600, type: "noodle", img: "มาม่าต้มยำกุ้งหม้อไฟ.JPG" },
    { name: "สปาเก็ตตี้คาโบนาร่า", cal: 750, type: "noodle", img: "สปาเก็ตตี้คาโบนาร่า.JPG" },
    { name: "สปาเก็ตตี้ผัดขี้เมาทะเล", cal: 500, type: "noodle", img: "สปาเก็ตตี้ผัดขี้เมาทะเล.JPG" },
    { name: "ยำวุ้นเส้นหมูสับ", cal: 150, type: "noodle", img: "ยำวุ้นเส้นหมูสับ.JPG" },
    { name: "วุ้นเส้นผัดไข่", cal: 400, type: "noodle", img: "วุ้นเส้นผัดไข่.JPG" },

    // --- อาหารจานเดียว (ข้าว) ---
    { name: "ข้าวมันไก่ต้ม", cal: 600, type: "rice", img: "ข้าวมันไก่ต้ม.JPG" },
    { name: "ข้าวมันไก่ทอด", cal: 700, type: "rice", img: "ข้าวมันไก่ทอด.JPG" },
    { name: "ข้าวผัดกะเพราหมูสับไข่ดาว", cal: 650, type: "rice", img: "ข้าวผัดกระเพราไข่ดาว.JPG" },
    { name: "ข้าวผัดกะเพราหมูกรอบ", cal: 750, type: "rice", img: "ข้าวผัดกระเพราหมูกรอบ.JPG" },
    { name: "ข้าวผัดหมู", cal: 550, type: "rice", img: "ข้าวผัดหมู.JPG" },
    { name: "ข้าวผัดปู", cal: 600, type: "rice", img: "ข้าวผัดปู.JPG" },
    { name: "ข้าวหมูแดงหมูกรอบ", cal: 650, type: "rice", img: "ข้าวหมูเเดงหมูกรอบ.JPG" },
    { name: "ข้าวขาหมู", cal: 690, type: "rice", img: "ข้าวขาหมู.JPG" },
    { name: "ข้าวไข่เจียวหมูสับ", cal: 480, type: "rice", img: "ข้าวไข่เจียวหมูสับ.JPG" },
    { name: "ข้าวคลุกกะปิ", cal: 600, type: "rice", img: "ข้าวคลุกกะปิ.JPG" },
    { name: "ข้าวหมูทอดกระเทียม", cal: 550, type: "rice", img: "ข้าวหมูทอดกระเทียม.JPG" },
    { name: "ข้าวแกงกะหรี่ญี่ปุ่น", cal: 750, type: "rice", img: "ข้าวเเกงกระหรี่ญี่ปุ่น.JPG" },
    { name: "ข้าวหมกไก่", cal: 550, type: "rice", img: "ข้าวหมกไก่.JPG" },
    { name: "ข้าวยำไก่แซ่บ", cal: 600, type: "rice", img: "ข้าวยำไก่เเซ่บ.JPG" },
    { name: "ข้าวพะแนงหมู", cal: 550, type: "rice", img: "ข้าวพะเเนงหมู.JPG" },
    { name: "ข้าวหน้าเป็ด", cal: 500, type: "rice", img: "ข้าวหน้าเป็ด.JPG" },
    { name: "ข้าวผัดสับปะรด", cal: 600, type: "rice", img: "ข้าวผัดสับปะรด.JPG" },
    { name: "โจ๊กหมูใส่ไข่", cal: 250, type: "rice", img: "โจ๊กหมูใส่ไข่.JPG" },
    { name: "ข้าวต้มกุ้ง", cal: 200, type: "rice", img: "ข้าวต้มกุ้ง.JPG" },
    { name: "ข้าวราดผัดผักบุ้งหมูกรอบ", cal: 600, type: "rice", img: "ข้าวราดผัดผักบุ้งหมูกรอบ.JPG" },
    { name: "ข้าวราดผัดพริกแกงหมู", cal: 550, type: "rice", img: "ข้าวราดผัดพริกเเกงหมู.JPG" },

    // --- อาหารอีสาน / ยำ / ส้มตำ ---
    { name: "ส้มตำไทย", cal: 120, type: "clean", img: "ส้มตำไทย.jpg" },
    { name: "ส้มตำปูปลาร้า", cal: 100, type: "clean", img: "ส้มตำปูปลาร้า.jpg" },
    { name: "ตำข้าวโพดไข่เค็ม", cal: 350, type: "clean", img: "ตำข้าวโพดไข่เค็ม.jpg" },
    { name: "น้ำตกหมู", cal: 200, type: "clean", img: "น้ำตกหมู.jpg" },
    { name: "ไก่ย่างข้าวเหนียว", cal: 400, type: "rice", img: "ไก่ย่างข้าวเหนียว.jpg" },
    { name: "คอหมูย่าง", cal: 400, type: "rice", img: "คอหมูย่าง.png" },
    { name: "ต้มแซ่บกระดูกอ่อน", cal: 180, type: "clean", img: "ต้มแซ่บกระดูกอ่อน.png" },
    { name: "ซุปหน่อไม้", cal: 100, type: "clean", img: "ซุปหน่อไม้.jpg" },
    { name: "ยำมาม่ารวมมิตร", cal: 300, type: "noodle", img: "ยำมาม่ารวมมิตร.jpg" },
    { name: "ยำไข่ดาว", cal: 250, type: "clean", img: "ยำไข่ดาว.png" },
    { name: "จิ้มจุ่มรวมมิตร", cal: 400, type: "clean", img: "จิ้มจุ่มรวมมิตร.jpg" },

    // --- อาหารคลีน / สุขภาพ ---
    { name: "สลัดอกไก่", cal: 300, type: "clean", img: "สลัดอกไก่.JPG" },
    { name: "สลัดทูน่า", cal: 350, type: "clean", img: "สลัดทูน่า.JPG" },
    { name: "ข้าวไรซ์เบอร์รี่ + ปลานึ่งมะนาว", cal: 350, type: "clean", img: "ข้าวไรซ์เบอร์รี่ปลานึ่งมะนาว.JPG" },
    { name: "อกไก่ปั่น", cal: 180, type: "clean", img: "อกไก่ปั่น.JPG" },
    { name: "ก๋วยเตี๋ยวลุยสวน", cal: 200, type: "clean", img: "ก๋วยเตี๋ยวลุยสวน.JPG" },
    { name: "แกงจืดเต้าหู้หมูสับ + ข้าวกล้อง", cal: 300, type: "clean", img: "เเกงจืดเต้าหู้หมูสับ.JPG" },
    { name: "ไข่ต้ม (2 ฟอง)", cal: 160, type: "clean", img: "ไข่ต้ม2ฟอง.JPG" },
    { name: "แซนวิชอกไก่", cal: 250, type: "clean", img: "เเซนวิชอกไก่.JPG" },
    { name: "โยเกิร์ต + กราโนล่า", cal: 250, type: "clean", img: "โยเกิร์ต.JPG" },
    { name: "น้ำพริกผักต้ม + ไข่ต้ม", cal: 250, type: "clean", img: "น้ำพริกผักต้ม.JPG" },
    { name: "เมี่ยงปลาเผา", cal: 300, type: "clean", img: "เมี่ยงปลาเผา.JPG" },

    // --- อาหารตะวันตก / Fast Food ---
    { name: "แฮมเบอร์เกอร์หมู", cal: 500, type: "rice", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&w=800" },
    { name: "ชีสเบอร์เกอร์", cal: 600, type: "rice", img: "ชีสเบอร์เกอร์.JPG" },
    { name: "พิซซ่าฮาวายเอี้ยน (2 ชิ้น)", cal: 600, type: "rice", img: "พิซซ่าฮาวายเอี้ยน.JPG" },
    { name: "เฟรนช์ฟรายส์", cal: 400, type: "rice", img: "เฟรนซ์ฟรายส์.JPG" },
    { name: "ไก่ทอด (1 ชิ้น)", cal: 300, type: "rice", img: "ไก่ทอด.JPG" },
    { name: "สเต็กหมูพริกไทยดำ", cal: 600, type: "rice", img: "สเต็กหมูพริกไทยดำ.JPG" },
    { name: "สเต็กปลาแซลมอน", cal: 500, type: "clean", img: "สเต็กปลาแซลมอน.JPG" },
    { name: "ซุปเห็ดทรัฟเฟิล", cal: 300, type: "rice", img: "ซุปเห็ดทรัฟเฟิล.JPG" },
    { name: "ซีซาร์สลัด", cal: 400, type: "clean", img: "ซีซาร์สลัด.JPG" },

    // --- อาหารใต้ / รสจัด ---
    { name: "คั่วกลิ้งหมู + ข้าว", cal: 500, type: "rice", img: "คั่วกลิ้งหมู.JPG" },
    { name: "แกงไตปลา + ขนมจีน", cal: 400, type: "noodle", img: "เเกงไตปลา.JPG" },
    { name: "แกงเหลืองหน่อไม้ดอง", cal: 350, type: "clean", img: "เเกงเหลืองหน่อไม้.JPG" },
    { name: "ไก่ทอดหาดใหญ่ + ข้าวเหนียว", cal: 600, type: "rice", img: "ไก่ทอดหาดใหญ่.JPG" },
    { name: "ผัดสะตอกะปิกุ้ง", cal: 500, type: "rice", img: "ผัดสะตอกะปิกุ้ง.JPG" },
    
    // --- อื่นๆ เพิ่มเติม ---
    { name: "ต้มยำกุ้งน้ำข้น + ข้าว", cal: 500, type: "rice", img: "ต้มยำกุ้งน้ำข้น.JPG" },
    { name: "ต้มข่าไก่ + ข้าว", cal: 550, type: "rice", img: "ต้มข่าไก่.JPG" },
    { name: "หมูสามชั้นทอดน้ำปลา + ข้าว", cal: 700, type: "rice", img: "หมูสามชั้นทอดน้ำปลา.JPG" },
    { name: "ไข่เจียวปู", cal: 400, type: "rice", img: "ไข่เจียวปู.JPG" },
    { name: "ปลาหมึกผัดไข่เค็ม", cal: 550, type: "rice", img: "ปลาหมึกผัดไข่เค็ม.JPG" },
    { name: "กุ้งอบวุ้นเส้น", cal: 400, type: "noodle", img: "กุ้งอบวุ้นเส้น.JPG" },
    { name: "ปลากะพงทอดน้ำปลา", cal: 450, type: "rice", img: "ปลากระพงทอดน้ำปลา.JPG" },
    { name: "ทอดมันปลากราย", cal: 350, type: "rice", img: "ทอดมันปลากราย.JPG" }
];

let isAnimating = false;

function formatType(type) {
    switch(type) {
        case 'rice': return 'เมนูข้าว';
        case 'noodle': return 'เมนูเส้น';
        case 'clean': return 'อาหารคลีน';
        default: return 'ทั่วไป';
    }
}

function showMainPage() {
    const user = localStorage.getItem("currentUser");

    if (user) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("welcomeUser").innerText = "สวัสดี, " + user;
    }
}

let isLoginMode = true;

function toggleForm() {
    const title = document.getElementById("formTitle");
    const btn = document.getElementById("mainBtn");
    const toggleText = document.getElementById("toggleText");
    const toggleBtn = document.getElementById("toggleBtn");
    const error = document.getElementById("loginError");

    error.textContent = "";

    if (isLoginMode) {
        title.textContent = "สมัครสมาชิก";
        btn.textContent = "สมัครสมาชิก";
        toggleText.textContent = "มีบัญชีอยู่แล้ว?";
        toggleBtn.textContent = "เข้าสู่ระบบ";
        isLoginMode = false;
    } else {
        title.textContent = "เข้าสู่ระบบ";
        btn.textContent = "เข้าสู่ระบบ";
        toggleText.textContent = "ยังไม่มีบัญชี?";
        toggleBtn.textContent = "สมัครสมาชิก";
        isLoginMode = true;
    }
}

function handleAuth() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    if (username === "" || password === "") {
        error.textContent = "กรอกข้อมูลให้ครบ";
        return;
    }

    if (isLoginMode) {
        // LOGIN
        const savedUser = localStorage.getItem("username");
        const savedPass = localStorage.getItem("password");

        if (username === savedUser && password === savedPass) {
    
    // บันทึกสถานะว่า login แล้ว
    localStorage.setItem("loggedIn", "true");

    // เปลี่ยนหน้าไป main.html
    window.location.href = "main.html";

} else {
    error.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
}

    } else {
        // REGISTER
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("สมัครสมาชิกสำเร็จ!");

        toggleForm(); // กลับไปหน้า login
    }
}

function logout() {
    window.location.href = "index.html"; 
}

function startRandom() {

    const input = document.getElementById("calInput");
    const maxCal = parseInt(input.value);
    const errorMsg = document.getElementById("errorMsg");

    const foodName = document.getElementById("foodName");
    const foodCal = document.getElementById("foodCal");
    const foodType = document.getElementById("foodType");
    const foodImg = document.getElementById("foodImg");

    // 🔴 ถ้าไม่ใส่เลข
    if (!maxCal || maxCal <= 0) {
        errorMsg.innerText = "กรุณาใส่แคลอรี่";
        return;
    }

    errorMsg.innerText = "";

    const filtered = foodData.filter(food => food.cal <= maxCal);

    if (filtered.length === 0) {
        foodName.textContent = "ไม่มีเมนูที่ตรงเงื่อนไข";
        foodCal.textContent = "";
        foodType.textContent = "";
        foodImg.src = "";
        return;
    }

    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];

    // แสดงผล
    foodName.textContent = randomItem.name;
    foodCal.textContent = "🔥 แคลอรี่: " + randomItem.cal + " kcal";
    foodType.textContent = "🍽 ประเภท: " + randomItem.type;
    foodImg.src = randomItem.img;

    // ⭐ บันทึกประวัติ (รวมรูป)
    saveToHistory(randomItem);
 
    // ===== บันทึกสถิติสำหรับ Dashboard =====
let stats = JSON.parse(localStorage.getItem("stats")) || {
    totalRandom: 0,
    totalCalories: 0
};

stats.totalRandom += 1;
stats.totalCalories += randomItem.cal;

localStorage.setItem("stats", JSON.stringify(stats));
// ===== บันทึกประวัติการสุ่ม =====
let history = JSON.parse(localStorage.getItem(getUserKey("history"))) || [];

history.push({
    name: randomFood.name,
    cal: randomFood.cal,
    type: randomFood.type,
    img: randomFood.img,
    date: new Date().toLocaleString()
});

localStorage.setItem(getUserKey("history"), JSON.stringify(history));
}
saveToHistory({
    name: randomFood.name,
    cal: randomFood.cal
});

function saveToHistory(food) {

    let history = JSON.parse(localStorage.getItem("foodHistory")) || [];

    history.push({
        name: food.name,
        cal: food.cal,
        img: food.img
    });

    localStorage.setItem("foodHistory", JSON.stringify(history));
}

function clearHistory() {
    localStorage.removeItem("foodHistory");
    loadHistory();
}
function goHistory() {
    window.location.href = "history.html";
}

function clearHistory() {
    localStorage.removeItem("foodHistory");
    loadHistory();
}

function goBack() {
    window.location.href = "main.html";
}

function getCaloriesByAge(age) {
    if (age >= 1 && age <= 8) return 1200;
    if (age >= 9 && age <= 18) return 2000;
    if (age >= 19 && age <= 50) return 2400;
    if (age >= 51) return 1800;
    return 2000;
}


function getRangeByAge(age){
    if(age >=1 && age <=8) return {min:1000, max:1400};
    if(age >=9 && age <=18) return {min:1600, max:2200};
    if(age >=19 && age <=50){
        let gender = prompt("พิมพ์ ชาย หรือ หญิง");
        if(gender === "ชาย") return {min:2200, max:3000};
        return {min:1800, max:2400};
    }
    if(age >=51) return {min:1400, max:1800};
}


function getCalRange(age, gender=null) {
    if(age >= 1 && age <= 8) return {min:1000, max:1400};
    if(age >= 9 && age <= 18) return {min:1600, max:2200};
    if(age >= 19 && age <= 50) {
        if(gender === "ชาย") return {min:2200, max:3000};
        return {min:1800, max:2400};
    }
    if(age >= 51) return {min:1400, max:1800};
    return {min:1800, max:2400};
}

function randomByAge() {
    let age = parseInt(document.getElementById("ageInput").value);
    if(isNaN(age) || age <= 0) {
        alert("กรุณากรอกอายุให้ถูกต้อง");
        return;
    }

    let gender = null;
    if(age >= 19 && age <= 50) {
        gender = prompt("พิมพ์เพศของคุณ (ชาย/หญิง):");
        gender = gender.toLowerCase();
    }

    let range = getCalRange(age, gender);

    let shuffled = [...foods].sort(() => Math.random() - 0.5);

    let selectedMenu = [];
    let total = 0;

    for(let food of shuffled) {
        if(total + food.calories <= range.max) {
            selectedMenu.push(food);
            total += food.calories;
        }
        if(total >= range.min) break;
    }

    if(selectedMenu.length === 0) {
        alert("ไม่สามารถสุ่มอาหารให้ครบช่วงแคลอรี่ได้");
        return;
    }

    let display = "";
    display += `<h2 style="color:white">ช่วงพลังงานที่เหมาะ: ${range.min} - ${range.max} kcal</h2>`;
    selectedMenu.forEach(item => {
        display += `
            <div style="margin:15px 0; color:white;">
                <img src="${item.img}" width="120" style="border-radius:8px;">
                <p>${item.name}</p>
                <p>🔥 ${item.calories} kcal</p>
            </div>
        `;
    });
    display += `<p style="color:#00ff88; font-size:18px;">รวม ${total} kcal</p>`;

    document.getElementById("resultBox").innerHTML = display;
}
