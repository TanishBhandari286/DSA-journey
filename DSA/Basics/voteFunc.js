function voteEligibilityChecker(age) {
  if (age >= 18) {
    console.log("Go vote pls");
  } else if (age <= 0) {
    console.log("Invalid Input");
  } else {
    console.log("Wait till u turn 18 buddy !!");
  }
}

voteEligibilityChecker(18);
voteEligibilityChecker(2);
voteEligibilityChecker(-1);
