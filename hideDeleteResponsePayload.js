var content = context.getVariable("response.content");
var jsonObject = JSON.parse(content);
jsonObject.funding.creditCard.number = "****";
jsonObject.funding.creditCard.securityCode = "****";
var newContent = JSON.stringify(jsonObject);
context.setVariable("response.content", newContent);

//delete jsonObject.funding.creditCard.number; 