


const circle = document.querySelectorAll(".circle");

const animate = [];

let grade = 0;

animate[0] = circle[0].addEventListener("click", () => {


    circle[0].style.backgroundColor = "orange";

    circle[1].style.backgroundColor = "#434851";
    circle[2].style.backgroundColor = "#434851";
    circle[3].style.backgroundColor = "#434851";
    circle[4].style.backgroundColor = "#434851";


    grade = 1;


});



animate[1] = circle[1].addEventListener("click", () => {

    circle[1].style.backgroundColor = "orange";

    circle[0].style.backgroundColor = "#434851";
    circle[2].style.backgroundColor = "#434851";
    circle[3].style.backgroundColor = "#434851";
    circle[4].style.backgroundColor = "#434851";

    grade = 2;
});


animate[2] = circle[2].addEventListener("click", () => {

    circle[2].style.backgroundColor = "orange";

    circle[0].style.backgroundColor = "#434851";
    circle[1].style.backgroundColor = "#434851";
    circle[3].style.backgroundColor = "#434851";
    circle[4].style.backgroundColor = "#434851";

    grade = 3;
});


animate[3] = circle[3].addEventListener("click", () => {

    circle[3].style.backgroundColor = "orange";

    circle[0].style.backgroundColor = "#434851";
    circle[1].style.backgroundColor = "#434851";
    circle[2].style.backgroundColor = "#434851";
    circle[4].style.backgroundColor = "#434851";

    grade = 4;
});


animate[4] = circle[4].addEventListener("click", () => {

    circle[4].style.backgroundColor = "orange";

    circle[0].style.backgroundColor = "#434851";
    circle[1].style.backgroundColor = "#434851";
    circle[2].style.backgroundColor = "#434851";
    circle[3].style.backgroundColor = "#434851";

    grade = 5;
});


const submit = document.querySelector(".submit");


const newPage = submit.addEventListener("click", () => {

    const div = document.querySelector(".content");

    const newPage = document.createElement("div");
    newPage.classList.add("content");
    newPage.style.setProperty('text-align', 'center');

    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", "images/illustration-thank-you.svg");
    mainImg.setAttribute("alt", "Thank you!");

    newPage.appendChild(mainImg);




    const gradeViewer = document.createElement("div");
    gradeViewer.classList.add("gradeViewer");

    gradeViewer.innerHTML += `You selected ${grade} out of 5`;

    newPage.appendChild(gradeViewer);






    newPage.innerHTML += "<h1>Thank you!</h1>";
    newPage.innerHTML += "<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>";








    div.replaceWith(newPage);

});


