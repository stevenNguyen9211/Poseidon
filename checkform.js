let listofCode = ["D10", "D20", "D30"];

function checkProductIDfield() {
    let getProductId = document.getElementById('productID').value;
    let checkContent = getProductId.search(/['0-9']/i);

    if (getProductId == "") {
        document.getElementById('checkId').innerHTML = "The product ID should not be empty";
        document.getElementById('checkId').setAttribute("style", "color:red");
        return false;
    } else {
        if (parseInt(checkContent) == (-1)) {
            document.getElementById('checkId').innerHTML = "Incorrect product ID";
            document.getElementById('checkId').setAttribute("style", "color:red");
            return false;
        } else {
            if (parseInt(getProductId) > 4 || parseInt(getProductId) <=0) {
                document.getElementById('checkId').innerHTML = "Not available product"
                document.getElementById('checkId').setAttribute("style", "color:red");
                return false;
            } else {
                return true;
            }
        }
    }
}

function validateForm() {
    let getCodeId = document.getElementById('dis_code').value;
    let getProductId = parseInt(document.getElementById('productID').value);
    if (checkProductIDfield()) {

        function getPrice() {
            let locationPrice = "//*[@id='product_list']/tbody/tr[" + (getProductId + 1) + "]/td[4]";
            let priceProduct = document.evaluate(locationPrice, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent;
            return parseInt(priceProduct);
        }

        function getAmountDiscount() {
            let locationDiscount = "//*[@id='product_list']/tbody/tr[" + (getProductId + 1) + "]/td[6]";
            let discountProduct = document.evaluate(locationDiscount, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent;
            discountProduct.replace("%", "");
            return parseInt(discountProduct);
        }

        function getTotalSummary() {
            let totalPrice = getPrice() * ((100 - getAmountDiscount()) / 100);
            totalPrice = Math.round(totalPrice);
            return totalPrice;
        }

        if (getCodeId == "") {
            document.getElementById('msg_confirmation').innerHTML = "You're not using the discount code:";
            let summaryPrice = getTotalSummary();
            document.getElementById('total_price').innerHTML = summaryPrice;
        } else {
            let summaryPriceAfterDiscount;
            switch (getCodeId) {
                case "D10":
                    summaryPriceAfterDiscount = getTotalSummary() * 0.05;
                    document.getElementById('msg_confirmation').innerHTML = "Your total price after useing offer code " + "D10" + " is: ";
                    document.getElementById('total_price_with_discount').innerHTML = summaryPriceAfterDiscount + " USD";
                    break;
                case "D20":
                    summaryPriceAfterDiscount = getTotalSummary() * 0.1;
                    document.getElementById('msg_confirmation').innerHTML = "Your total price after useing offer code " + "D20" + " is: ";
                    document.getElementById('total_price_with_discount').innerHTML = summaryPriceAfterDiscount + " USD";
                    break;
                case "D30":
                    summaryPriceAfterDiscount = getTotalSummary() * 0.2;
                    document.getElementById('msg_confirmation').innerHTML = "Your total price after useing offer code " + "D30" + " is: ";
                    document.getElementById('total_price_with_discount').innerHTML = summaryPriceAfterDiscount + " USD";
                    break;
                default:
                    summaryPriceAfterDiscount = getTotalSummary() * 1;
                    document.getElementById('msg_confirmation').innerHTML = "Your discount code is incorrect and your total price is:";
                    document.getElementById('total_price_with_discount').innerHTML = summaryPriceAfterDiscount + " USD";
            }
        }

    }
}