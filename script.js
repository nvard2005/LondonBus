function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function submitRequest() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const account = document.getElementById("account").value;
    const email = document.getElementById("email").value;

    if (name && surname && account && email) {
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head><title>Հայտնագիրը Ուղարկված է</title></head>
            <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2>Հայտնագիրը Ուղարկված է</h2>
                <p>Անուն: ${name}</p>
                <p>Ազգանուն: ${surname}</p>
                <p>Հաշիվ: ${account}</p>
                <p>Էլ. փոստի հասցե: ${email}</p>
                <button onclick="window.close()">Փակել</button>
            </body>
            </html>
        `);

        closeModal();
    } else {
        alert("Խնդրում ենք լրացնել բոլոր դաշտերը։");
    }
}


window.addEventListener("click", (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item img");
const imageModal = document.getElementById("imageModal");
const galleryModalImage = document.getElementById("modalImage");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openImageModal(img.src);
  });
});

function openImageModal(src) {
  galleryModalImage.src = src;
  imageModal.style.display = "flex";
}

function closeImageModal() {
  imageModal.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  galleryModalImage.src = images[currentIndex].src;
}


imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    closeImageModal();
  }
});


document.addEventListener("keydown", (e) => {
  if (imageModal.style.display === "flex") {
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "Escape") closeImageModal();
  }
});



const groupModal = document.getElementById("groupModal");
const groupModalImage = document.getElementById("groupModalImage");
const groupModalTitle = document.getElementById("groupModalTitle");
const groupModalDescription = document.getElementById("groupModalDescription");


const groupData = {
  "2-3 Բացահայտողներ Հետազոտողներ": "Երեխաները սիրում են իմանալ, որոնում են հետաքրքիր պատմություններ... (կարճ նկարագրություն այստեղ)",
  "3-4 Հեքիաթասացներ": "Այս խմբում երեխաները լսում ու պատմում են հեքիաթներ...",
  "4-5 Ստեղծարարներ": "Ստեղծարար խաղեր, նկարում են, պատրաստում են փոքր աշխատանքներ...",
  "5-6 Գիտունիկներ": "Ավելի խորացված ուսումնական խաղեր, մաթեմատիկա և գիտություն..."
};


document.querySelectorAll("#groups .group-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const text = item.querySelector(".group-text").innerText;

    groupModalImage.src = img.src;
    groupModalTitle.innerText = text;
    groupModalDescription.innerText = groupData[text] || "Ավելին շուտով:";

    groupModal.style.display = "flex";
  });
});


function closeGroupModal() {
  groupModal.style.display = "none";
}


window.addEventListener("click", (e) => {
  if (e.target === groupModal) {
    closeGroupModal();
  }
});
function openRequestFromGroup() {
    closeGroupModal(); 
    openModal();       }