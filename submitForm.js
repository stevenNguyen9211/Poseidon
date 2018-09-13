let listofCode = ["D10", "D20", "D30"];

function validateProduct() {
    let getProductId = document.getElementById('productID').value;
    let checkContent = getProductId.search(/['0-9']/i);
    if (getProductId == "") {
        return false;
    } else {
        if (parseInt(checkContent) == (-1)) {
            document.getElementById('checkId').innerHTML = "Incorrect product ID";
            document.getElementById('checkId').setAttribute("style", "color:red");
            return false;
        } else {
            if (parseInt(getProductId) > 4) {
                document.getElementById('checkId').innerHTML = "Not available product"
                document.getElementById('checkId').setAttribute("style", "color:red");
                return false;
            } else {
                return true;
            }
        }
    }
}
function calculate() {
    if (validateProduct()) {
        let getProductId = document.getElementById('dis_code').value;
        if (getProductId == "") {
            document.getElementById('msg_confirmation').innerHTML = "Cannot purchase"
        }
        else {
            switch (getProductId) {
                case "D10":
                    document.getElementById('msg_confirmation').innerHTML = "SATURDAY"
                    break;
                case "D20":
                    document.getElementById('msg_confirmation').innerHTML = "SUNDAY"
                    break;
                case "D30":
                    document.getElementById('msg_confirmation').innerHTML = "MONDAY"
                    break;
                default:
                    text = "You have no discount";
            }
        }
    }
}