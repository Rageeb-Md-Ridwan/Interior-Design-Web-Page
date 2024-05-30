var basic_count = 1;
var pro_count = 1;
function double_b_amount() {
  basic_count++;
  const current_value = parseFloat(
    document.getElementById("basic-val").innerText.replace("$", " ").trim()
  );
  const new_value = current_value + 199;
  const room_text = document.getElementsByClassName("room-text")[0];
  document.getElementById("basic-val").innerText = `$${new_value}`;
  room_text.innerText = `${basic_count} rooms`;
}
function lower_b_amount() {
  if (basic_count > 1) basic_count--;
  const current_value = parseFloat(
    document.getElementById("basic-val").innerText.replace("$", " ").trim()
  );
  if (current_value > 199) {
    const new_value = current_value - 199;
    document.getElementById("basic-val").innerText = `$${new_value}`;
    const room_text = document.getElementsByClassName("room-text")[0];
    if (basic_count > 1) room_text.innerText = `${basic_count} rooms`;
    else room_text.innerText = `${basic_count} room`;
  } else {
    document.getElementById("basic-val").innerText = `$${current_value}`;
  }
}
function double_p_amount() {
  pro_count++;
  const current_value = parseFloat(
    document.getElementById("pro-val").innerText.replace("$", " ").trim()
  );
  const new_value = current_value + 249;
  const room_text = document.getElementsByClassName("room-text")[1];
  document.getElementById("pro-val").innerText = `$${new_value}`;
  room_text.innerText = `${pro_count} rooms`;
}
function lower_p_amount() {
  if (pro_count > 1) pro_count--;
  const current_value = parseFloat(
    document.getElementById("pro-val").innerText.replace("$", " ").trim()
  );
  if (current_value > 249) {
    const new_value = current_value - 249;
    document.getElementById("pro-val").innerText = `$${new_value}`;
    const room_text = document.getElementsByClassName("room-text")[1];
    if (pro_count > 1) room_text.innerText = `${pro_count} rooms`;
    else room_text.innerText = `${pro_count} room`;
  } else {
    document.getElementById("pro-val").innerText = `$${current_value}`;
  }
}
function basic_thanks() {
  var message = document.getElementById("basic-thanks");
  message.innerHTML = `Thank you for choosing ${basic_count} room${
    basic_count > 1 ? "s" : ""
  }.`;
}
function pro_thanks() {
  var message = document.getElementById("pro-thanks");
  message.innerHTML = `Thank you for choosing ${pro_count} room${
    pro_count > 1 ? "s" : ""
  }.`;
}
