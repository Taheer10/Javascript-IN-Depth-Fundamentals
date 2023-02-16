const endDate = "Sept 1 2024";

function countDown() {
  const total = Date.parse(endDate) - new Date();
  const days = Math.floor(total / (1000 * 24 * 60 * 60));
  const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
  const mins = Math.floor(((total / 1000) * 60) % 60);
  const secs = Math.floor((total / 1000) % 60);

  return {
    days,
    hrs,
    mins,
    secs,
  };
}

function update() {
  const temp = countDown();
  let output = "";
  for (const property in temp) {
    output += `${property} ${temp[property]}`;
  }
  console.log(output);
  setTimeout(update, 1000);
}

update();
