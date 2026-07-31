function calc() {
  let name = document.getElementById("sName").value;

  let tamil = Number(document.getElementById("tamil").value);
  let english = Number(document.getElementById("english").value);
  let maths = Number(document.getElementById("maths").value);
  let science = Number(document.getElementById("science").value);
  let social = Number(document.getElementById("social").value);

  if (name === "") {
    alert("Please Enter The Student Name ");
    return;
  }

  if (
    tamil == "" ||
    english == "" ||
    maths == "" ||
    science == "" ||
    social == ""
  ) {
    alert("Please Enter All Subject Marks");
    return;
  }

  if (
    tamil < 0 ||
    tamil > 100 ||
    english < 0 ||
    english > 100 ||
    maths < 0 ||
    maths > 100 ||
    science < 0 ||
    science > 100 ||
    social < 0 ||
    social > 100
  ) {
    alert("Please Enter The Value Between 0 And 100");
    return;
  }

  let sum = tamil + english + maths + science + social;

  let avg = sum / 5;

  let percent = (sum / 500) * 5;

  let grade;

  if (avg > 90) {
    grade = "A";
  } else if (avg > 75) {
    grade = "B";
  } else if (avg > 60) {
    grade = "C";
  } else if (avg > 40) {
    grade = "D";
  } else {
    grade = "fail";
  }
  // let res_cont = document.getElementById("result");
  // res_cont.innerHTML =
  //   "Student Name : " +
  //   name +
  //   // "<br> Tamil : " +
  //   // tamil +
  //   // "<br> English : " +
  //   // english +
  //   // "<br> Maths : " +
  //   // maths +
  //   // "<br> Science : " +
  //   // science +
  //   // "<br> social : " +
  //   // social +
  //   "<br> Total : " +
  //   sum +
  //   "<br> Average : " +
  //   avg +
  //   "<br> Percent : " +
  //   percent +
  //   "<br> GRADE : " +
  //   grade;
  // // res_cont.style.color = "green";
  // res_cont.style.color = "#669CFF";
  // res_cont.style.textAlign = "center";

  document.getElementById("res-total").innerHTML = "Total : " + sum;
  document.getElementById("res-avg").innerHTML = "Average : " + avg;
  document.getElementById("res-percent").innerHTML = "Percentage : " + percent + "% ";
  document.getElementById("res-grade").innerHTML = "Grade : " + grade;

  
}
