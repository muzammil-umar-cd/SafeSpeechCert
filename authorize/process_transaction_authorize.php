<?php
require 'vendor/autoload.php';

use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;

function proccess_transaction($card, $expiration, $cvc, $amount, $fname, $lname, $phone, $email, $address, $country, $state, $city, $zipcode)
{
    include 'db.php';

    $get_merchants = $conn->query("SELECT * FROM merchants where merchant_name = 'Authorize' AND status = 'Active'");
    $merchants = $get_merchants->fetch_assoc();

    // Replace these values with your actual Authorize.Net API credentials
    $apiLoginId = $merchants['login_id'];
    $transactionKey = $merchants['transaction_id'];

    // Set up API credentials
    $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();
    $merchantAuthentication->setName($apiLoginId);
    $merchantAuthentication->setTransactionKey($transactionKey);

    // Set up credit card details
    $creditCard = new AnetAPI\CreditCardType();
    $creditCard->setCardNumber($card);
    $creditCard->setExpirationDate(stripslashes($expiration));
    $creditCard->setCardCode($cvc);

    // Set up payment
    $paymentType = new AnetAPI\PaymentType();
    $paymentType->setCreditCard($creditCard);

    // Set up transaction request
    $transactionRequestType = new AnetAPI\TransactionRequestType();
    $transactionRequestType->setTransactionType("authCaptureTransaction");
    $transactionRequestType->setAmount($amount);
    $transactionRequestType->setPayment($paymentType);
    $transactionRequestType->setOrder(new AnetAPI\OrderType());
    $transactionRequestType->getOrder()->setInvoiceNumber(rand(1, 100000)); // Random invoice number

    // Set up customer information (Optional)
    $customerAddress = new AnetAPI\CustomerAddressType();
    $customerAddress->setFirstName($fname);
    $customerAddress->setLastName($lname);
    $customerAddress->setPhoneNumber($phone);
    $customerAddress->setEmail($email);
    $customerAddress->setAddress($address);
    $customerAddress->setCountry($country);
    $customerAddress->setState($state);
    $customerAddress->setCity($city);
    $customerAddress->setZip($zipcode);
    $transactionRequestType->setBillTo($customerAddress);

    // Create transaction request
    $request = new AnetAPI\CreateTransactionRequest();
    $request->setMerchantAuthentication($merchantAuthentication);
    $request->setTransactionRequest($transactionRequestType);

    // Execute API request
    $controller = new AnetController\CreateTransactionController($request);
    $response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::SANDBOX);



    // Process response
    if ($response != null) {
        $tresponse = $response->getTransactionResponse();
        if ($tresponse != null && $tresponse->getMessages() != null) {
            // Check the response code
            $responseCode = $tresponse->getResponseCode();
            $authCode = $tresponse->getAuthCode();
            $transId = $tresponse->getTransId();
            echo json_encode([
                'success' => true,
                "transactionId"=> $transId,
            ]);
        } else {
            $errorMessages = [];
            if ($tresponse != null && $tresponse->getErrors() != null) {
                foreach ($tresponse->getErrors() as $error) {
                    $errorMessages[] = $error->getErrorText();
                }
            } else if ($response->getMessages() != null) {
                foreach ($response->getMessages()->getMessage() as $message) {
                    $errorMessages[] = $message->getText();
                }
            }
            echo json_encode([
                'success' => false,
                "error"=> 'Transaction Failed',
                "errorMessages" => $errorMessages,
            ]);
        }
    } else {
        echo json_encode([
            'success' => false,
            "error"=> 'Transaction Failed',
            "errorMessages" => ['No response from payment gateway'],
        ]);
    }
}