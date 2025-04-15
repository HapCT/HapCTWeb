const images = [
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_YhRW87uJbx.jpeg",
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_4I5RfBZ2H6.jpeg",
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_954ZFCd0KY.jpeg",
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_YhRW87uJbx.jpeg",
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_CIbnVBBrQK.jpeg",
    "https://pos.nvncdn.com/f2fe44-24897/ps/20250414_wHMF35C1n9.jpeg"
];

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  document.getElementById('mainImage').src = images[index];
  

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}
//Chuyển rate
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});