//part 1
function divideNumbers() {
try {

}catch(error){
  console.log(error.message)
}finally {
  console.log("Execution complete.")
}
}

//part 2
async function fetchData() {
  try {
    const response = await fetch("https://httpstat.us/500");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error)
  } finally {
    console.log("Fetch attempt finished.")
  }
}

//part 3