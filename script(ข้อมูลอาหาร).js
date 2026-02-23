// ข้อมูลอาหาร (ผมใส่ให้เยอะๆ ครบทุกประเภทเลยครับ)
const foodData = [
   /* ===== PART 1 ===== */

{ name:"ข้าวซอยไก่", calories:500, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวซอยไก่.JPG" },

{ name:"ขนมจีนน้ำเงี้ยว", calories:350, protein:20, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ขนมจีนน้ำเงี้ยว.JPG" },

{ name:"แกงฮังเลหมู + ข้าวเหนียว", calories:600, protein:35, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวเหนียวหมูฮังเล.JPG" },

{ name:"ไส้อั่ว + ข้าวเหนียว", calories:550, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"ไส้อั่วข้าวเหนียว.JPG" },

{ name:"ลาบหมูคั่ว", calories:250, protein:20, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน"], image:"ลาบหมูคั่ว.jpg" },

{ name:"น้ำพริกหนุ่ม + แคบหมู", calories:350, protein:15, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["ผัก","โปรตีน"], image:"น้ำพริกหนุ่ม.JPG" },

{ name:"แกงโฮะ", calories:400, protein:25, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","ผัก"], image:"เเกงโฮะ.JPG" },

{ name:"จอผักกาด", calories:150, protein:5, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["ผัก"], image:"จอผักกาด.JPG" },

{ name:"ก๋วยเตี๋ยวเรือหมูน้ำตก", calories:450, protein:25, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ก๋วยเตี๋ยวเรือหมูน้ำตก.png" },

{ name:"บะหมี่เกี๊ยวหมูแดง", calories:400, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"บะหมี่เกี๊ยวหมูแดง.JPG" },

{ name:"ผัดไทยกุ้งสด", calories:550, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ผัดไทยกุ้งสด.JPG" },

{ name:"ราดหน้าหมูหมัก", calories:450, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ราดหน้าหมูหมัก.JPG" },

{ name:"ผัดซีอิ๊วหมู", calories:600, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ผัดซีอิ๊วหมู.JPG" },

{ name:"สุกี้น้ำรวมมิตร", calories:350, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน","ผัก"], image:"สุกี้น้ำรวมมิตร.JPG" },

{ name:"สุกี้แห้งไก่", calories:400, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","ผัก"], image:"สุกี้แห้งไก่.JPG" },

{ name:"ก๋วยจั๊บน้ำข้น", calories:500, protein:25, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ก๋วยจั๊บน้ำข้น.JPG" },

{ name:"เย็นตาโฟต้มยำ", calories:450, protein:20, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"เย็นตาโฟต้มยำ.JPG" },

{ name:"บะหมี่เป็ดตุ๋น", calories:450, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"บะหมี่เป็ดตุ๋น.JPG" },

{ name:"มาม่าต้มยำกุ้งหม้อไฟ", calories:600, protein:25, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"มาม่าต้มยำกุ้งหม้อไฟ.JPG" },

{ name:"สปาเก็ตตี้คาโบนาร่า", calories:750, protein:25, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน","นม"], image:"สปาเก็ตตี้คาโบนาร่า.JPG" },

{ name:"สปาเก็ตตี้ผัดขี้เมาทะเล", calories:500, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"สปาเก็ตตี้ผัดขี้เมาทะเล.JPG" },

{ name:"ยำวุ้นเส้นหมูสับ", calories:150, protein:15, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["โปรตีน"], image:"ยำวุ้นเส้นหมูสับ.JPG" },

{ name:"วุ้นเส้นผัดไข่", calories:400, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"วุ้นเส้นผัดไข่.JPG" },

    /* ===== PART 2 ===== */

{ name:"ข้าวมันไก่ต้ม", calories:600, protein:35, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวมันไก่ต้ม.JPG" },

{ name:"ข้าวมันไก่ทอด", calories:700, protein:35, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวมันไก่ทอด.JPG" },

{ name:"ข้าวผัดกะเพราหมูสับไข่ดาว", calories:650, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวผัดกระเพราไข่ดาว.JPG" },

{ name:"ข้าวผัดกะเพราหมูกรอบ", calories:750, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวผัดกระเพราหมูกรอบ.JPG" },

{ name:"ข้าวผัดหมู", calories:550, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวผัดหมู.JPG" },

{ name:"ข้าวผัดปู", calories:600, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวผัดปู.JPG" },

{ name:"ข้าวหมูแดงหมูกรอบ", calories:650, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวหมูเเดงหมูกรอบ.JPG" },

{ name:"ข้าวขาหมู", calories:690, protein:35, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวขาหมู.JPG" },

{ name:"ข้าวไข่เจียวหมูสับ", calories:480, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวไข่เจียวหมูสับ.JPG" },

{ name:"ข้าวคลุกกะปิ", calories:600, protein:25, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวคลุกกะปิ.JPG" },

{ name:"ข้าวหมูทอดกระเทียม", calories:550, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวหมูทอดกระเทียม.JPG" },

{ name:"ข้าวแกงกะหรี่ญี่ปุ่น", calories:750, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวเเกงกระหรี่ญี่ปุ่น.JPG" },

{ name:"ข้าวหมกไก่", calories:550, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวหมกไก่.JPG" },

{ name:"ข้าวยำไก่แซ่บ", calories:600, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวยำไก่เเซ่บ.JPG" },

{ name:"ข้าวพะแนงหมู", calories:550, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวพะเเนงหมู.JPG" },

{ name:"ข้าวหน้าเป็ด", calories:500, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวหน้าเป็ด.JPG" },

{ name:"ข้าวผัดสับปะรด", calories:600, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน","ผลไม้"], image:"ข้าวผัดสับปะรด.JPG" },

{ name:"โจ๊กหมูใส่ไข่", calories:250, protein:15, spicy:false, ageGroup:["เด็ก","ผู้สูงอายุ"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"โจ๊กหมูใส่ไข่.JPG" },

{ name:"ข้าวต้มกุ้ง", calories:200, protein:20, spicy:false, ageGroup:["เด็ก","ผู้สูงอายุ"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวต้มกุ้ง.JPG" },

{ name:"ข้าวราดผัดผักบุ้งหมูกรอบ", calories:600, protein:25, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน","ผัก"], image:"ข้าวราดผัดผักบุ้งหมูกรอบ.JPG" },

{ name:"ข้าวราดผัดพริกแกงหมู", calories:550, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวราดผัดพริกเเกงหมู.JPG" },

   /* ===== PART 3 ===== */

{ name:"ส้มตำไทย", calories:120, protein:3, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["ผัก"], image:"ส้มตำไทย.jpg" },

{ name:"ส้มตำปูปลาร้า", calories:100, protein:5, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["ผัก","โปรตีน"], image:"ส้มตำปูปลาร้า.jpg" },

{ name:"ตำข้าวโพดไข่เค็ม", calories:350, protein:10, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["ผัก","โปรตีน"], image:"ตำข้าวโพดไข่เค็ม.jpg" },

{ name:"น้ำตกหมู", calories:200, protein:20, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน"], image:"น้ำตกหมู.jpg" },

{ name:"ไก่ย่างข้าวเหนียว", calories:400, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"ไก่ย่างข้าวเหนียว.jpg" },

{ name:"คอหมูย่าง", calories:400, protein:25, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน"], image:"คอหมูย่าง.png" },

{ name:"ต้มแซ่บกระดูกอ่อน", calories:180, protein:18, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["โปรตีน"], image:"ต้มแซ่บกระดูกอ่อน.png" },

{ name:"ซุปหน่อไม้", calories:100, protein:3, spicy:true, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["ผัก"], image:"ซุปหน่อไม้.jpg" },

{ name:"ยำมาม่ารวมมิตร", calories:300, protein:15, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ยำมาม่ารวมมิตร.jpg" },

{ name:"ยำไข่ดาว", calories:250, protein:12, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["โปรตีน"], image:"ยำไข่ดาว.png" },

{ name:"จิ้มจุ่มรวมมิตร", calories:400, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน","ผัก"], image:"จิ้มจุ่มรวมมิตร.jpg" },

/* ===== อาหารคลีน / สุขภาพ ===== */

{ name:"สลัดอกไก่", calories:300, protein:35, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน","ผัก"], image:"สลัดอกไก่.JPG" },

{ name:"สลัดทูน่า", calories:350, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน","ผัก"], image:"สลัดทูน่า.JPG" },

{ name:"ข้าวไรซ์เบอร์รี่ + ปลานึ่งมะนาว", calories:350, protein:30, spicy:true, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"ข้าวไรซ์เบอร์รี่ปลานึ่งมะนาว.JPG" },

{ name:"อกไก่ปั่น", calories:180, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน"], image:"อกไก่ปั่น.JPG" },

{ name:"ก๋วยเตี๋ยวลุยสวน", calories:200, protein:10, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","ผัก"], image:"ก๋วยเตี๋ยวลุยสวน.JPG" },

{ name:"แกงจืดเต้าหู้หมูสับ + ข้าวกล้อง", calories:300, protein:25, spicy:false, ageGroup:["เด็ก","ผู้ใหญ่","ผู้สูงอายุ"], chewEasy:true, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"เเกงจืดเต้าหู้หมูสับ.JPG" },

{ name:"ไข่ต้ม (2 ฟอง)", calories:160, protein:12, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน"], image:"ไข่ต้ม2ฟอง.JPG" },

{ name:"แซนวิชอกไก่", calories:250, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"เเซนวิชอกไก่.JPG" },

{ name:"โยเกิร์ต + กราโนล่า", calories:250, protein:10, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["นม","คาร์โบไฮเดรต"], image:"โยเกิร์ต.JPG" },

{ name:"น้ำพริกผักต้ม + ไข่ต้ม", calories:250, protein:15, spicy:true, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["ผัก","โปรตีน"], image:"น้ำพริกผักต้ม.JPG" },

{ name:"เมี่ยงปลาเผา", calories:300, protein:35, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน","ผัก"], image:"เมี่ยงปลาเผา.JPG" },
/* ===== PART 4 ===== */

{ name:"แฮมเบอร์เกอร์หมู", calories:500, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน"], image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&w=800" },

{ name:"ชีสเบอร์เกอร์", calories:600, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน","นม"], image:"ชีสเบอร์เกอร์.JPG" },

{ name:"พิซซ่าฮาวายเอี้ยน (2 ชิ้น)", calories:600, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต","โปรตีน","นม"], image:"พิซซ่าฮาวายเอี้ยน.JPG" },

{ name:"เฟรนช์ฟรายส์", calories:400, protein:5, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["คาร์โบไฮเดรต"], image:"เฟรนซ์ฟรายส์.JPG" },

{ name:"ไก่ทอด (1 ชิ้น)", calories:300, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน"], image:"ไก่ทอด.JPG" },

{ name:"สเต็กหมูพริกไทยดำ", calories:600, protein:40, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน"], image:"สเต็กหมูพริกไทยดำ.JPG" },

{ name:"สเต็กปลาแซลมอน", calories:500, protein:40, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน"], image:"สเต็กปลาแซลมอน.JPG" },

{ name:"ซุปเห็ดทรัฟเฟิล", calories:300, protein:8, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["ผัก","นม"], image:"ซุปเห็ดทรัฟเฟิล.JPG" },

{ name:"ซีซาร์สลัด", calories:400, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["ผัก","โปรตีน","นม"], image:"ซีซาร์สลัด.JPG" },

/* ===== อาหารใต้ ===== */

{ name:"คั่วกลิ้งหมู + ข้าว", calories:500, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"คั่วกลิ้งหมู.JPG" },

{ name:"แกงไตปลา + ขนมจีน", calories:400, protein:25, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"เเกงไตปลา.JPG" },

{ name:"แกงเหลืองหน่อไม้ดอง", calories:350, protein:15, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["โปรตีน","ผัก"], image:"เเกงเหลืองหน่อไม้.JPG" },

{ name:"ไก่ทอดหาดใหญ่ + ข้าวเหนียว", calories:600, protein:35, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"ไก่ทอดหาดใหญ่.JPG" },

{ name:"ผัดสะตอกะปิกุ้ง", calories:500, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","ผัก"], image:"ผัดสะตอกะปิกุ้ง.JPG" },

/* ===== อื่น ๆ ===== */

{ name:"ต้มยำกุ้งน้ำข้น + ข้าว", calories:500, protein:30, spicy:true, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:true, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"ต้มยำกุ้งน้ำข้น.JPG" },

{ name:"ต้มข่าไก่ + ข้าว", calories:550, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"ต้มข่าไก่.JPG" },

{ name:"หมูสามชั้นทอดน้ำปลา + ข้าว", calories:700, protein:30, spicy:false, ageGroup:["วัยรุ่น","ผู้ใหญ่"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"หมูสามชั้นทอดน้ำปลา.JPG" },

{ name:"ไข่เจียวปู", calories:400, protein:25, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน"], image:"ไข่เจียวปู.JPG" },

{ name:"ปลาหมึกผัดไข่เค็ม", calories:550, protein:35, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน"], image:"ปลาหมึกผัดไข่เค็ม.JPG" },

{ name:"กุ้งอบวุ้นเส้น", calories:400, protein:30, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน","คาร์โบไฮเดรต"], image:"กุ้งอบวุ้นเส้น.JPG" },

{ name:"ปลากะพงทอดน้ำปลา", calories:450, protein:40, spicy:false, ageGroup:["ทุกวัย"], chewEasy:false, foodGroup:["โปรตีน"], image:"ปลากระพงทอดน้ำปลา.JPG" },

{ name:"ทอดมันปลากราย", calories:350, protein:20, spicy:false, ageGroup:["ทุกวัย"], chewEasy:true, foodGroup:["โปรตีน"], image:"ทอดมันปลากราย.JPG" }

];