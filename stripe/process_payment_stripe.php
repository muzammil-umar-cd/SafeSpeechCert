<?php
require_once('vendor/autoload.php');
require_once('db.php');

$get_merchants = $conn->query("SELECT * FROM merchants where merchant_name = 'Stripe' AND status = 'Active'");
$merchants = $get_merchants->fetch_assoc();

\Stripe\Stripe::setApiKey($merchants['private_key']); // Replace with your secret key

function proccess_transaction($token, $amount, $fname, $lname, $phone, $email, $address, $country, $state, $city, $zipcode)
{
    try {
        $customer = \Stripe\Customer::create([
            'email' => $email,
            'source' => $token,
            'phone' => $phone,
            'address' => [
                'line1' => $address,
                'city' => $city,
                'state' => $state,
                'country' => $country,
                'postal_code' => $zipcode,
            ],
            'metadata' => [
                'first_name' => $fname,
                'last_name' => $lname,
            ],
        ]);

        $charge = \Stripe\Charge::create([
            'amount' => $amount * 100, // amount in cents
            'currency' => 'usd',
            'customer' => $customer->id,
            'description' => 'Payment for purchase',
        ]);

        // Payment success message
        return json_encode([
            'success' => true,
            "transactionId" => $charge->id,
        ]);
    } catch (\Stripe\Exception\CardException $e) {
        // Card declined error message
        return json_encode([
            'success' => false,
            "error" => 'Transaction Failed',
            "errorMessages" => 'Your payment could not be processed because your card was declined. Please try again with a different card or contact your bank.',
        ]);
    } catch (\Exception $e) {
        // General error message
        return json_encode([
            'success' => false,
            "error" => 'Transaction Failed',
            "errorMessages" => 'Your payment could not be processed. Please try again later or contact support.',
        ]);
    }
}
?>