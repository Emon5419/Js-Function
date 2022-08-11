//  Problem:1 radianToDegree: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত   ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// Awnser:
function radianToDegree(radian) {
   const degree = Math.PI;
   return radian * (180 / degree);
}
const radians = parseFloat(radianToDegree(10).toFixed(2));
const radians2 = parseFloat(radianToDegree(25).toFixed(2));
const radians3 = parseFloat(radianToDegree(199).toFixed(2));

console.log('Output= 1:', radians, 'Output= 2:', radians2, 'Output= 3:', radians3);



// Problem: 2 isJavaScriptFile: ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম(যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

// Awnser:
function isJavaScript(fileName) {
   const fileCommonName = 'index.js';

   if (fileCommonName === fileName) {
      return true;
   }
   else {
      return false
   }
}
const find = isJavaScript("index.js");
console.log(find);










// Problem 3: oilPrice: ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল, পেট্রোল, অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

// Awnser:
function oilPrice(oil1, oil2, oil3) {

   const diesel = 114 * oil1;
   const petrol = 130 * oil2;
   const octane = 135 * oil3;

   return quantity = diesel + petrol + octane;

}
const result = oilPrice(10, 5, 2);
console.log(result)




// Problem 4: publicBusFare: একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা(কতজন যাবে) নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

// Awnser:
function totalPepoles(people) {

   const busPeople = 50;
   const microbusPeople = 11;
   const publicBusPeople = people - busPeople - microbusPeople;

   //People who going in public bus
   console.log('publicBusPeople:', publicBusPeople)

   const ticketPrice = 250; // Ticket Price: 250Taka.
   const publicBusTicketPrice = publicBusPeople * ticketPrice;
   console.log('Total People Ticket Price:', publicBusTicketPrice);
}
totalPepoles(110);
