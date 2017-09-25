## About
Application for send and display feedback.
There are two blocks: Form and comments list.
* Form:
There are three fields in form: name(required field), phone, message(required field).
If one of required fields is empty, submit button will be disabled.
Also, message field has limit on the number of characters to be entered. And under the field, you can see number of remaining characters.
* Comments list:
Displaying comments in reverse order (last submitted comment will be first displayed). You can delete comment or edit message. Comment display: name, phone, message and submitted date. If comment had been sent less 30 minutes ago, in date field will be displayed how many minutes had been past after sent.

All information kept in local storage.

## Technologies
* react
* redux
* react-router
* webpack

## How to start
* git clone https://github.com/nickmat95/feedback.git
* cd feedback
* npm install
* webpack-dev-server --hot