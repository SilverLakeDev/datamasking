#Data Masking

Tip: If it doesn’t work, make sure you are at the right level of a nested JSON payload.

Option A:
curl -i https://api.enterprise.apigee.com/v1/o/myORG/maskconfigs -u user@example.com:$PASSWORD

curl -i -H "Content-type:text/xml" -X POST -d '<MaskDataConfiguration>
    <XPathsRequest>
        <XPathRequest>/root/funding/creditCard/number</XPathRequest>
    </XPathsRequest>
    <XPathsResponse>
        <XPathResponse>/root/funding/creditCard/number</XPathResponse>
    </XPathsResponse>
</MaskDataConfiguration>’

This URL may also work if you only want to apply it to a specific API.
https://api.enterprise.apigee.com/v1/organizations/myOrg/apis/{api_name}/maskconfigs

Option B:

Use this Javascript in the Target Response to obscure sensitive data from being returned. The downside of this option is someone may be able to see the data in the trace before the javascript is executed.

The javascript example would result in something like this where a credit card number and security code are replaced with ****

{
    "correlationId": "1234",
    "transactionStatus": "approved",
    "validationStatus": "success",
    "fdTransactionId": "1234",
    "approvedAmount": {
        "value": "1234",
        "currencyCode": "USD"
    },
    "funding": {
        "method": "creditCard",
        "splitTenderId": "1874265",
        "splitShipment": "01/02",
        "creditCard": {
            "number": "********",
            "cardholderName": "John Smith",
            "alias": "1111",
            "type": "American Express",
            "expiryDate": {
                "month": "09",
                "year": "20"
            },
            "securityCode": "********",
            "sequenceNumber": "01",
            "token": {
                "tokenId": "292bb6b886fc4446894f878b7e32bd5e",
                "tokenProvider": "TRANS_ARMOR",
                "expiryDate": {
                    "month": "09",
                    "year": "20"
                }
            },
            "specialPayment": ""
        },
        "billingAddress": {
            "type": "work",
            "streetAddress": "100 Universal City Plaza",
            "locality": "Hollywood",
            "region": "CA",
            "postalCode": "91608",
            "country": "USA",
            "formatted": "100 Universal City Plaza\nHollywood, CA 91608 USA",
            "primary": true
        }
    },
    "gatewayResponseCode": "00",
    "gatewayMessage": "Transaction Normal"
}
