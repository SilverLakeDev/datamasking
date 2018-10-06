var content = context.getVariable("response.content");
var jsonObject = JSON.parse(content);
jsonObject.funding.creditCard.number = "****";
jsonObject.funding.creditCard.securityCode = "****";
var newContent = JSON.stringify(jsonObject);
context.setVariable("response.content", newContent);

//Swap Lines 3 and 4 with the lines below if you'd rather delete the fields.
//delete jsonObject.funding.creditCard.number;
//delete jsonObject.funding.creditCard.securityCode;
