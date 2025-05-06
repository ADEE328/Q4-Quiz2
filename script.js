document.getElementById("toggleButton").addEventListener("click", function () {
  const section = document.getElementById("gradeSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
});

function calculateAverage() {
  const science = parseFloat(document.getElementById('science').value) || 0;
  const maths = parseFloat(document.getElementById('maths').value) || 0;
  const english = parseFloat(document.getElementById('english').value) || 0;

  const average = ((science + maths + english) / 3).toFixed(2);
  let comment = "";

  if (average >= 90) {
    comment = "Excellent";
  } else if (average >= 80) {
    comment = "Above Satisfactory";
  } else if (average >= 70) {
    comment = "Satisfactory";
  } else {
    comment = "Needs Improvement";
  }

  alert(`Your average is ${average} - ${comment}`);
}
