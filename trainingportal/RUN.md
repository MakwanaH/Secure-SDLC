Changes to training portal

To setup admin user, the server will try to retrieve the admin username 
and password from environment variables
ADMIN\_USERNAME and ADMIN\_PASSWORD


TO generate self signed keys for deployment, run
`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt`
