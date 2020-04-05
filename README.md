#  Password Generator
## Russell Morgan

This weeks challenge was to create a password generator for an user that needs a secure password. The visual interface was supplied and we were to write the javascript code to actually generate the password.

Two acceptance criteria were specified in the requirements; length of password (8-128) and the character types to use to build the password. The types were uppercase letters, lowercase letters, numbers and special characters.

Coded the length input to validate if the number was greater than or equal to 8 and less than or equal to 128. If it was not valid an alert message was displayed to let them know. The validation also caught any non-numeric entries.

Coded the character types using one prompt. The four types were listed and the user was required to enter a four character string of 'y' or 'n', ie. yyny. The input was validated to make sure only four characters were entered, that it contained only y or n and at least one y was entered.

Based on the character types selected, the selector string was created by concating the different types together to form one long string. Then a random number between 0 and the selector length was retrieved. That number was used to retrieve the single character at that position in the selector. This process continued for the number of characters desired, the length entered.



URL to code in github: https://github.com/rhmorganjr/password-generator
URL to application:    https://rhmorganjr.github.io/password-generator/

