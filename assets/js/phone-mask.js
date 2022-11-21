// Telephone field fill-in mask
function phone_mask() {
    var phone = document.getElementById("phone").value;
    phone = phone.slice(0, 14);
    document.getElementById("phone").value = phone;
    phone = document.getElementById("phone").value.slice(0, 10);
           
    var formatted_phone = document.getElementById("phone").value;
    if(formatted_phone[0] != "(") {
        if(formatted_phone[0] != undefined) {
            document.getElementById("phone").value = "(" + formatted_phone[0];
        }
    }

    if(formatted_phone[3] != ")") {
        if(formatted_phone[3] != undefined) {
            document.getElementById("phone").value = formatted_phone.slice(0, 3) + ")" + formatted_phone[3];
        }
    }

    if(formatted_phone[9] != "-") {
        if(formatted_phone[9] != undefined) {
            document.getElementById("phone").value = formatted_phone.slice(0, 9) + "-" + formatted_phone[9];
        }
    }
}