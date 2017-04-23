# EmailComposer
A component for composing emails.
It contains fields for entering the recipients, the subject and the body of the email.
It also has to be possible to attach images to the email.

## Used technologies
* HTML5, CSS3 and JavaScript.
* JS framework: AngularJS.
* CSS framework: Bootstrap 4.
* CSS pre-processor: LESS.
* Testing tool: Karma.

## Behaviour specifications
### Recipients
* There are three fields for entering the recipients: TO, CC and BCC.
* If an invalid email is entered in any of them, it will be highlighted in red.
* Multiple emails can be entered separated by a comma.
* Infinite emails are allowed to be entered.
* If no valid email is entered in any of them, the ‘Send’ button will be disabled.
### Subject
* There is one field for entering the subject.
* Any character is allowed.
* The max length of the subject is 100 characters.
* If no subject is entered, the ‘Send’ button will be disabled.
### Body
* There is one field for entering the email message.
* Any character is allowed.
* There is no max length.
* If no message is entered, the ‘Send’ button will be disabled.
### Attachments
* There is one button for uploading images.
* Multiple images can be attached.
* When an image is attached, a thumbnail of that image is displayed.
* Infinite images are allowed to be attached.
* Any attached image can be removed from the composer by clicking on it.
### Send
* There is one button for sending the email.
* When clicking on the button, the composer does nothing.
* The button is disabled if there is no subject, body and at least one recipient.
* When a subject with at least one character, a message with at least one character and at least one valid recipient have been entered, the button will change to an ‘enabled’ status.

## Improvements
* Two buttons on the top-right corner allow us to change the language of the application.
* The recipients inputs are textarea instead of inputs actually, so user could click and drag the bottom-right corner of the area and resize it in order to can see infinite emails.
* Thumbnails and attaching button have tooltips, in order to can see their information clearly.

## How to run the project
### Local mode
You can download the project on ZIP file by clicking on the 'Clone or download' button. Then, you just unzip it and run the 'index.html' file.
### Online mode
The application is deployed on Heroku, so you can watch it by clicking on the link:
```
[HerokuApp](https://email-composer.herokuapp.com/)
```
