function mainEvent() {

    with (window.document.forms.home) {


        if (event.value == 1) {


        }

        if (event.value == 2) {

            subevent[0].value = 1;
            subevent[0].text = 'Press Meeting';
            subevent[1].value = 2;
            subevent[1].text = 'Culturals';
            subevent[2].value = 3;
            subevent[2].text = 'Book Publish';
            subevent[3].value = 4;
            subevent[3].text = 'New Year Events';
            subevent[4].value = 5;
            subevent[4].text = 'Official Parties';
        }

        if (event.value == 3) {

            subevent[0].value = 1;
            subevent[0].text = 'Marriage';
            subevent[1].value = 2;
            subevent[1].text = 'Reception';
            subevent[2].value = 3;
            subevent[2].text = 'Birthday Parties';
            subevent[3].value = 4;
            subevent[3].text = 'Get Together';
            subevent[4].value = 5;
            subevent[4].text = 'Surprise Event';
        }
    }
}


function validate() {

    with (window.document.forms.home) {

        var emailid = email.value;
        regex = /[@gmail]/;
        if (regex.test(emailid)) {

        }
        else {
            alert('Enter valid email id');
        }

    }
}