$(function () {

    // Fake data for countries and cities from 2003 to 2013
    var data = {
        "Military Deaths": {
            "areas": {
                "AF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br /> Military Deaths : 0"
                    }
                },
                "ZA": {
                    "value": 11900,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Military Deaths : 11900"
                    }
                },
                "AL": {
                    "value": 30000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Military Deaths : 30000"
                    }
                },
                "DZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Military Deaths : 0"
                    }
                },
                "DE": {
                    "value": 4879000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Military Deaths : 4879000"
                    }
                },
                "AD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Military Deaths : 0"
                    }
                },
                "AO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Military Deaths : 0"
                    }
                },
                "AG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Military Deaths : 0"
                    }
                },
                "SA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Military Deaths : 0"
                    }
                },
                "AR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Military Deaths : 0"
                    }
                },
                "AM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Military Deaths : 0"
                    }
                },
                "AU": {
                    "value": 39700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Military Deaths : 39700"
                    }
                },
                "AT": {
                    "value": 4879000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Military Deaths : 4879000"
                    }
                },
                "AZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Military Deaths : 0"
                    }
                },
                "BS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Military Deaths : 0"
                    }
                },
                "BH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Military Deaths : 0"
                    }
                },
                "BD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Military Deaths : 0"
                    }
                },
                "BB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Military Deaths : 0"
                    }
                },
                "BE": {
                    "value": 12000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Military Deaths : 12000"
                    }
                },
                "BZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Military Deaths : 0"
                    }
                },
                "BJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Military Deaths : 0"
                    }
                },
                "BT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Military Deaths : 0"
                    }
                },
                "BY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Military Deaths : 0"
                    }
                },
                "MM": {
                    "value": 2600,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Military Deaths : 2600"
                    }
                },
                "BO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Military Deaths : 0"
                    }
                },
                "BA": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Military Deaths : 373000"
                    }
                },
                "BW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Military Deaths : 0"
                    }
                },
                "BR": {
                    "value": 1000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Military Deaths : 1000"
                    }
                },
                "BN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Military Deaths : 0"
                    }
                },
                "BG": {
                    "value": 18500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Military Deaths : 18500"
                    }
                },
                "BF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Military Deaths : 0"
                    }
                },
                "BI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Military Deaths : 0"
                    }
                },
                "KH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Military Deaths : 0"
                    }
                },
                "CM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Military Deaths : 0"
                    }
                },
                "CA": {
                    "value": 43100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Military Deaths : 43100"
                    }
                },
                "CV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Military Deaths : 0"
                    }
                },
                "CF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Military Deaths : 0"
                    }
                },
                "CL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Military Deaths : 0"
                    }
                },
                "CN": {
                    "value": 3375000,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Military Deaths : 3375000"
                    }
                },
                "CY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Military Deaths : 0"
                    }
                },
                "CO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Military Deaths : 0"
                    }
                },
                "KM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Military Deaths : 0"
                    }
                },
                "CG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Military Deaths : 0"
                    }
                },
                "CD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Military Deaths : 0"
                    }
                },
                "KP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Military Deaths : 0"
                    }
                },
                "KR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Military Deaths : 0"
                    }
                },
                "CR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Military Deaths : 0"
                    }
                },
                "CI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Military Deaths : 0"
                    }
                },
                "HR": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Military Deaths : 373000"
                    }
                },
                "CU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Military Deaths : 0"
                    }
                },
                "DK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Military Deaths : 0"
                    }
                },
                "DJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Military Deaths : 0"
                    }
                },
                "DM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Military Deaths : 0"
                    }
                },
                "EG": {
                    "value": 1100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Military Deaths : 1100"
                    }
                },
                "AE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Military Deaths : 0"
                    }
                },
                "EC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Military Deaths : 0"
                    }
                },
                "ER": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Military Deaths : 0"
                    }
                },
                "ES": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Military Deaths : 0"
                    }
                },
                "EE": {
                    "value": 34000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Military Deaths : 34000"
                    }
                },
                "US": {
                    "value": 407300,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Military Deaths : 407300"
                    }
                },
                "ET": {
                    "value": 15000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Military Deaths : 15000"
                    }
                },
                "FJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Military Deaths : 0"
                    }
                },
                "FI": {
                    "value": 89000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Military Deaths : 89000"
                    }
                },
                "FR": {
                    "value": 210000,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Military Deaths : 210000"
                    }
                },
                "GA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Military Deaths : 0"
                    }
                },
                "GM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Military Deaths : 0"
                    }
                },
                "GE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Military Deaths : 0"
                    }
                },
                "GH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Military Deaths : 0"
                    }
                },
                "GR": {
                    "value": 35100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Military Deaths : 35100"
                    }
                },
                "GD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Military Deaths : 0"
                    }
                },
                "GT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Military Deaths : 0"
                    }
                },
                "GN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Military Deaths : 0"
                    }
                },
                "GQ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Military Deaths : 0"
                    }
                },
                "GW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Military Deaths : 0"
                    }
                },
                "GY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Military Deaths : 0"
                    }
                },
                "HT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Military Deaths : 0"
                    }
                },
                "HN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Military Deaths : 0"
                    }
                },
                "HU": {
                    "value": 300000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Military Deaths : 300000"
                    }
                },
                "JM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Military Deaths : 0"
                    }
                },
                "JP": {
                    "value": 2200000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Military Deaths : 2200000"
                    }
                },
                "MH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Military Deaths : 0"
                    }
                },
                "PW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Military Deaths : 0"
                    }
                },
                "SB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Military Deaths : 0"
                    }
                },
                "IN": {
                    "value": 87000,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Military Deaths : 87000"
                    }
                },
                "ID": {
                    "value": 11500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Military Deaths : 11500"
                    }
                },
                "JO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Military Deaths : 0"
                    }
                },
                "IR": {
                    "value": 200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Military Deaths : 200"
                    }
                },
                "IQ": {
                    "value": 500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Military Deaths : 500"
                    }
                },
                "IE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Military Deaths : 0"
                    }
                },
                "IS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Military Deaths : 0"
                    }
                },
                "IL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Military Deaths : 0"
                    }
                },
                "IT": {
                    "value": 319200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Military Deaths : 319200"
                    }
                },
                "KZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Military Deaths : 0"
                    }
                },
                "KE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Military Deaths : 0"
                    }
                },
                "KG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Military Deaths : 0"
                    }
                },
                "KI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Military Deaths : 0"
                    }
                },
                "KW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Military Deaths : 0"
                    }
                },
                "LA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Military Deaths : 0"
                    }
                },
                "LS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Military Deaths : 0"
                    }
                },
                "LV": {
                    "value": 30000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Military Deaths : 30000"
                    }
                },
                "LB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Military Deaths : 0"
                    }
                },
                "LR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Military Deaths : 0"
                    }
                },
                "LY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Military Deaths : 0"
                    }
                },
                "LI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Military Deaths : 0"
                    }
                },
                "LT": {
                    "value": 25000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Military Deaths : 25000"
                    }
                },
                "LU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Military Deaths : 0"
                    }
                },
                "MK": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Military Deaths : 373000"
                    }
                },
                "MG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Military Deaths : 0"
                    }
                },
                "MY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Military Deaths : 0"
                    }
                },
                "MW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Military Deaths : 0"
                    }
                },
                "MV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Military Deaths : 0"
                    }
                },
                "ML": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Military Deaths : 0"
                    }
                },
                "MT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Military Deaths : 0"
                    }
                },
                "MA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Military Deaths : 0"
                    }
                },
                "MU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Military Deaths : 0"
                    }
                },
                "MR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Military Deaths : 0"
                    }
                },
                "MX": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Military Deaths : 0"
                    }
                },
                "FM": {
                    "value": 1500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Military Deaths : 1500"
                    }
                },
                "MD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Military Deaths : 0"
                    }
                },
                "MC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Military Deaths : 0"
                    }
                },
                "MN": {
                    "value": 300,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Military Deaths : 300"
                    }
                },
                "ME": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Military Deaths : 373000"
                    }
                },
                "MZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Military Deaths : 0"
                    }
                },
                "NA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Military Deaths : 0"
                    }
                },
                "NP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Military Deaths : 0"
                    }
                },
                "NI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Military Deaths : 0"
                    }
                },
                "NE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Military Deaths : 0"
                    }
                },
                "NG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Military Deaths : 0"
                    }
                },
                "NO": {
                    "value": 2000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Military Deaths : 2000"
                    }
                },
                "NZ": {
                    "value": 11700,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Military Deaths : 11700"
                    }
                },
                "OM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Military Deaths : 0"
                    }
                },
                "UG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Military Deaths : 0"
                    }
                },
                "UZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Military Deaths : 0"
                    }
                },
                "PK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Military Deaths : 0"
                    }
                },
                "PS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Military Deaths : 0"
                    }
                },
                "PA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Military Deaths : 0"
                    }
                },
                "PG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Military Deaths : 0"
                    }
                },
                "PY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Military Deaths : 0"
                    }
                },
                "NL": {
                    "value": 6700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Military Deaths : 6700"
                    }
                },
                "PE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Military Deaths : 0"
                    }
                },
                "PH": {
                    "value": 27000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Military Deaths : 27000"
                    }
                },
                "PL": {
                    "value": 240000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Military Deaths : 240000"
                    }
                },
                "PT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Military Deaths : 0"
                    }
                },
                "QA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Military Deaths : 0"
                    }
                },
                "DO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Military Deaths : 0"
                    }
                },
                "RO": {
                    "value": 300000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Military Deaths : 300000"
                    }
                },
                "GB": {
                    "value": 383700,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Military Deaths : 383700"
                    }
                },
                "RU": {
                    "value": 10034000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Military Deaths : 10034000"
                    }
                },
                "RW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Military Deaths : 0"
                    }
                },
                "KN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Military Deaths : 0"
                    }
                },
                "SM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Military Deaths : 0"
                    }
                },
                "VC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Military Deaths : 0"
                    }
                },
                "LC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Military Deaths : 0"
                    }
                },
                "SV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Military Deaths : 0"
                    }
                },
                "WS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Military Deaths : 0"
                    }
                },
                "ST": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Military Deaths : 0"
                    }
                },
                "SN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Military Deaths : 0"
                    }
                },
                "RS": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Military Deaths : 373000"
                    }
                },
                "SC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Military Deaths : 0"
                    }
                },
                "SL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Military Deaths : 0"
                    }
                },
                "SG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Military Deaths : 0"
                    }
                },
                "SK": {
                    "value": 40500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Military Deaths : 40500"
                    }
                },
                "SI": {
                    "value": 373000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Military Deaths : 373000"
                    }
                },
                "SO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Military Deaths : 0"
                    }
                },
                "SD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Military Deaths : 0"
                    }
                },
                "SS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Military Deaths : 0"
                    }
                },
                "LK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Military Deaths : 0"
                    }
                },
                "SE": {
                    "value": 100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Military Deaths : 100"
                    }
                },
                "CH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Military Deaths : 0"
                    }
                },
                "SR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Military Deaths : 0"
                    }
                },
                "SZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Military Deaths : 0"
                    }
                },
                "SY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Military Deaths : 0"
                    }
                },
                "TJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Military Deaths : 0"
                    }
                },
                "TZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Military Deaths : 0"
                    }
                },
                "TD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Military Deaths : 0"
                    }
                },
                "CZ": {
                    "value": 40500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Military Deaths : 40500"
                    }
                },
                "TH": {
                    "value": 5600,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Military Deaths : 5600"
                    }
                },
                "TL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Military Deaths : 0"
                    }
                },
                "TG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Military Deaths : 0"
                    }
                },
                "TO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Military Deaths : 0"
                    }
                },
                "TT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Military Deaths : 0"
                    }
                },
                "TN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Military Deaths : 0"
                    }
                },
                "TM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Military Deaths : 0"
                    }
                },
                "TR": {
                    "value": 200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Military Deaths : 200"
                    }
                },
                "TV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Military Deaths : 0"
                    }
                },
                "VU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Military Deaths : 0"
                    }
                },
                "VE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Military Deaths : 0"
                    }
                },
                "VN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vietnam</span><br />Military Deaths : 0"
                    }
                },
                "UA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Military Deaths : 0"
                    }
                },
                "UY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Military Deaths : 0"
                    }
                },
                "YE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Military Deaths : 0"
                    }
                },
                "ZM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Military Deaths : 0"
                    }
                },
                "ZW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Military Deaths : 0"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1448389"
                    }
                },
                "newyork": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 426800"
                    }
                },
                "sydney": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 1401819"
                    }
                },
                "brasilia": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 644440"
                    }
                },
                "tokyo": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 143237"
                    }
                }
            }
        },
        "Civilian Deaths": {
            "areas": {
                "AF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Civilian Deaths : 0"
                    }
                },
                "ZA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Civilian Deaths : 0"
                    }
                },
                "AL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Civilian Deaths : 0"
                    }
                },
                "DZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Civilian Deaths : 0"
                    }
                },
                "DE": {
                    "value": 2250000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Civilian Deaths : 2250000"
                    }
                },
                "AD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Civilian Deaths : 0"
                    }
                },
                "AO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Civilian Deaths : 0"
                    }
                },
                "AG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Civilian Deaths : 0"
                    }
                },
                "SA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Civilian Deaths : 0"
                    }
                },
                "AR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Civilian Deaths : 0"
                    }
                },
                "AM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Civilian Deaths : 0"
                    }
                },
                "AU": {
                    "value": 700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Civilian Deaths : 700"
                    }
                },
                "AT": {
                    "value": 2250000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Civilian Deaths : 2250000"
                    }
                },
                "AZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Civilian Deaths : 0"
                    }
                },
                "BS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Civilian Deaths : 0"
                    }
                },
                "BH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Civilian Deaths : 0"
                    }
                },
                "BD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Civilian Deaths : 0"
                    }
                },
                "BB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Civilian Deaths : 0"
                    }
                },
                "BE": {
                    "value": 76000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Civilian Deaths : 76000"
                    }
                },
                "BZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Civilian Deaths : 0"
                    }
                },
                "BJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Civilian Deaths : 0"
                    }
                },
                "BT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Civilian Deaths : 0"
                    }
                },
                "BY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Civilian Deaths : 0"
                    }
                },
                "MM": {
                    "value": 250000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Civilian Deaths : 250000"
                    }
                },
                "BO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Civilian Deaths : 0"
                    }
                },
                "BA": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Civilian Deaths : 990500"
                    }
                },
                "BW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Civilian Deaths : 0"
                    }
                },
                "BR": {
                    "value": 1000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Civilian Deaths : 1000"
                    }
                },
                "BN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Civilian Deaths : 0"
                    }
                },
                "BG": {
                    "value": 3000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Civilian Deaths : 3000"
                    }
                },
                "BF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Civilian Deaths : 0"
                    }
                },
                "BI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Civilian Deaths : 0"
                    }
                },
                "KH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Civilian Deaths : 0"
                    }
                },
                "CM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Civilian Deaths : 0"
                    }
                },
                "CA": {
                    "value": 1700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Civilian Deaths : 1700"
                    }
                },
                "CV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Civilian Deaths : 0"
                    }
                },
                "CF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Civilian Deaths : 0"
                    }
                },
                "CL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Civilian Deaths : 0"
                    }
                },
                "CN": {
                    "value": 7774000,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Civilian Deaths : 7774000"
                    }
                },
                "CY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Civilian Deaths : 0"
                    }
                },
                "CO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Civilian Deaths : 0"
                    }
                },
                "KM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Civilian Deaths : 0"
                    }
                },
                "CG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Civilian Deaths : 0"
                    }
                },
                "CD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Civilian Deaths : 0"
                    }
                },
                "KP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Civilian Deaths : 0"
                    }
                },
                "KR": {
                    "value": 508000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Civilian Deaths : 508000"
                    }
                },
                "CR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Civilian Deaths : 0"
                    }
                },
                "CI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Civilian Deaths : 0"
                    }
                },
                "HR": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Civilian Deaths : 990500"
                    }
                },
                "CU": {
                    "value": 100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Civilian Deaths : 100"
                    }
                },
                "DK": {
                    "value": 6000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Civilian Deaths : 6000"
                    }
                },
                "DJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Civilian Deaths : 0"
                    }
                },
                "DM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Civilian Deaths : 0"
                    }
                },
                "EG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Civilian Deaths : 0"
                    }
                },
                "AE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Civilian Deaths : 0"
                    }
                },
                "EC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Civilian Deaths : 0"
                    }
                },
                "ER": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Civilian Deaths : 0"
                    }
                },
                "ES": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Civilian Deaths : 0"
                    }
                },
                "EE": {
                    "value": 49000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Civilian Deaths : 49000"
                    }
                },
                "US": {
                    "value": 12100,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Civilian Deaths : 12100"
                    }
                },
                "ET": {
                    "value": 85000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Civilian Deaths : 85000"
                    }
                },
                "FJ": {
                    "value": 10000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Civilian Deaths : 10000"
                    }
                },
                "FI": {
                    "value": 2000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Civilian Deaths : 2000"
                    }
                },
                "FR": {
                    "value": 390000,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Civilian Deaths : 390000"
                    }
                },
                "GA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Civilian Deaths : 0"
                    }
                },
                "GM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Civilian Deaths : 0"
                    }
                },
                "GE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Civilian Deaths : 0"
                    }
                },
                "GH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Civilian Deaths : 0"
                    }
                },
                "GR": {
                    "value": 171800,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Civilian Deaths : 171800"
                    }
                },
                "GD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Civilian Deaths : 0"
                    }
                },
                "GT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Civilian Deaths : 0"
                    }
                },
                "GN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Civilian Deaths : 0"
                    }
                },
                "GQ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Civilian Deaths : 0"
                    }
                },
                "GW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Civilian Deaths : 0"
                    }
                },
                "GY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Civilian Deaths : 0"
                    }
                },
                "HT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Civilian Deaths : 0"
                    }
                },
                "HN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Civilian Deaths : 0"
                    }
                },
                "HU": {
                    "value": 264000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Civilian Deaths : 264000"
                    }
                },
                "JM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Civilian Deaths : 0"
                    }
                },
                "JP": {
                    "value": 625000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Civilian Deaths : 625000"
                    }
                },
                "MH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Civilian Deaths : 0"
                    }
                },
                "PW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Civilian Deaths : 0"
                    }
                },
                "SB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Civilian Deaths : 0"
                    }
                },
                "IN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Civilian Deaths : 0"
                    }
                },
                "ID": {
                    "value": 300000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Civilian Deaths : 300000"
                    }
                },
                "JO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Civilian Deaths : 0"
                    }
                },
                "IR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Civilian Deaths : 0"
                    }
                },
                "IQ": {
                    "value": 200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Civilian Deaths : 200"
                    }
                },
                "IE": {
                    "value": 100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Civilian Deaths : 100"
                    }
                },
                "IS": {
                    "value": 200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Civilian Deaths : 200"
                    }
                },
                "IL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Civilian Deaths : 0"
                    }
                },
                "IT": {
                    "value": 153200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Civilian Deaths : 153200"
                    }
                },
                "KZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Civilian Deaths : 0"
                    }
                },
                "KE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Civilian Deaths : 0"
                    }
                },
                "KG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Civilian Deaths : 0"
                    }
                },
                "KI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Civilian Deaths : 0"
                    }
                },
                "KW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Civilian Deaths : 0"
                    }
                },
                "LA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Civilian Deaths : 0"
                    }
                },
                "LS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Civilian Deaths : 0"
                    }
                },
                "LV": {
                    "value": 220000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Civilian Deaths : 220000"
                    }
                },
                "LB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Civilian Deaths : 0"
                    }
                },
                "LR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Civilian Deaths : 0"
                    }
                },
                "LY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Civilian Deaths : 0"
                    }
                },
                "LI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Civilian Deaths : 0"
                    }
                },
                "LT": {
                    "value": 345000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Civilian Deaths : 345000"
                    }
                },
                "LU": {
                    "value": 5000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Civilian Deaths : 5000"
                    }
                },
                "MK": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Civilian Deaths : 990500"
                    }
                },
                "MG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Civilian Deaths : 0"
                    }
                },
                "MY": {
                    "value": 100000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Civilian Deaths : 100000"
                    }
                },
                "MW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Civilian Deaths : 0"
                    }
                },
                "MV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Civilian Deaths : 0"
                    }
                },
                "ML": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Civilian Deaths : 0"
                    }
                },
                "MT": {
                    "value": 1500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Civilian Deaths : 0"
                    }
                },
                "MA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Civilian Deaths : 1500"
                    }
                },
                "MU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Civilian Deaths : 0"
                    }
                },
                "MR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Civilian Deaths : 0"
                    }
                },
                "MX": {
                    "value": 100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Civilian Deaths : 100"
                    }
                },
                "FM": {
                    "value": 500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Civilian Deaths : 500"
                    }
                },
                "MD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Civilian Deaths : 0"
                    }
                },
                "MC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Civilian Deaths : 0"
                    }
                },
                "MN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Civilian Deaths : 0"
                    }
                },
                "ME": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Civilian Deaths : 990500"
                    }
                },
                "MZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Civilian Deaths : 0"
                    }
                },
                "NA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Civilian Deaths : 0"
                    }
                },
                "NP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Civilian Deaths : 0"
                    }
                },
                "NI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Civilian Deaths : 0"
                    }
                },
                "NE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Civilian Deaths : 0"
                    }
                },
                "NG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Civilian Deaths : 0"
                    }
                },
                "NO": {
                    "value": 8200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Civilian Deaths : 8200"
                    }
                },
                "NZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Civilian Deaths : 0"
                    }
                },
                "OM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Civilian Deaths : 0"
                    }
                },
                "UG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Civilian Deaths : 0"
                    }
                },
                "UZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Civilian Deaths : 0"
                    }
                },
                "PK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Civilian Deaths : 0"
                    }
                },
                "PS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Civilian Deaths : 0"
                    }
                },
                "PA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Civilian Deaths : 0"
                    }
                },
                "PG": {
                    "value": 15000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Civilian Deaths : 15000"
                    }
                },
                "PY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Civilian Deaths : 0"
                    }
                },
                "NL": {
                    "value": 187300,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Civilian Deaths : 187300"
                    }
                },
                "PE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Civilian Deaths : 0"
                    }
                },
                "PH": {
                    "value": 164000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Civilian Deaths : 164000"
                    }
                },
                "PL": {
                    "value": 5720000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Civilian Deaths : 5720000"
                    }
                },
                "PT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Civilian Deaths : 0"
                    }
                },
                "QA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Civilian Deaths : 0"
                    }
                },
                "DO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Civilian Deaths : 0"
                    }
                },
                "RO": {
                    "value": 200000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Civilian Deaths : 200000"
                    }
                },
                "GB": {
                    "value": 67200,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Civilian Deaths : 67200"
                    }
                },
                "RU": {
                    "value": 10000000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Civilian Deaths : 10000000"
                    }
                },
                "RW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Civilian Deaths : 0"
                    }
                },
                "KN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Civilian Deaths : 0"
                    }
                },
                "SM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Civilian Deaths : 0"
                    }
                },
                "VC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Civilian Deaths : 0"
                    }
                },
                "LC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Civilian Deaths : 0"
                    }
                },
                "SV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Civilian Deaths : 0"
                    }
                },
                "WS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Civilian Deaths : 0"
                    }
                },
                "ST": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Civilian Deaths : 0"
                    }
                },
                "SN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Civilian Deaths : 0"
                    }
                },
                "RS": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Civilian Deaths : 990500"
                    }
                },
                "SC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Civilian Deaths : 0"
                    }
                },
                "SL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Civilian Deaths : 0"
                    }
                },
                "SG": {
                    "value": 100000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Civilian Deaths : 100000"
                    }
                },
                "SK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Civilian Deaths : 0"
                    }
                },
                "SI": {
                    "value": 990500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Civilian Deaths : 990500"
                    }
                },
                "SO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Civilian Deaths : 0"
                    }
                },
                "SD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Civilian Deaths : 0"
                    }
                },
                "SS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Civilian Deaths : 0"
                    }
                },
                "LK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Civilian Deaths : 0"
                    }
                },
                "SE": {
                    "value": 2000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Civilian Deaths : 2000"
                    }
                },
                "CH": {
                    "value": 100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Civilian Deaths : 100"
                    }
                },
                "SR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Civilian Deaths : 0"
                    }
                },
                "SZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Civilian Deaths : 0"
                    }
                },
                "SY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Civilian Deaths : 0"
                    }
                },
                "TJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Civilian Deaths : 0"
                    }
                },
                "TZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Civilian Deaths : 0"
                    }
                },
                "TD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Civilian Deaths : 0"
                    }
                },
                "CZ": {
                    "value": 307000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Civilian Deaths : 307000"
                    }
                },
                "TH": {
                    "value": 2000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Civilian Deaths : 2000"
                    }
                },
                "TL": {
                    "value": 55000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Civilian Deaths : 55000"
                    }
                },
                "TG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Civilian Deaths : 0"
                    }
                },
                "TO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Civilian Deaths : 0"
                    }
                },
                "TT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Civilian Deaths : 0"
                    }
                },
                "TN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Civilian Deaths : 0"
                    }
                },
                "TM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Civilian Deaths : 0"
                    }
                },
                "TR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Civilian Deaths : 0"
                    }
                },
                "TV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Civilian Deaths : 0"
                    }
                },
                "VU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Civilian Deaths : 0"
                    }
                },
                "VE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Civilian Deaths : 0"
                    }
                },
                "VN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Civilian Deaths : 0"
                    }
                },
                "UA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Civilian Deaths : 0"
                    }
                },
                "UY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Civilian Deaths : 0"
                    }
                },
                "YE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Civilian Deaths : 0"
                    }
                },
                "ZM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Civilian Deaths : 0"
                    }
                },
                "ZW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Civilian Deaths : 0"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1257410"
                    }
                },
                "newyork": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 741339"
                    }
                },
                "sydney": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 992774"
                    }
                },
                "brasilia": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 639740"
                    }
                },
                "tokyo": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 987219"
                    }
                }
            }
        },
        "Famine and Disease": {
            "areas": {
                "AF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Famine and Disease : 0"
                    }
                },
                "ZA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Famine and Disease : 0"
                    }
                },
                "AL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Famine and Disease : 0"
                    }
                },
                "DZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Famine and Disease : 0"
                    }
                },
                "DE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Famine and Disease : 0"
                    }
                },
                "AD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Famine and Disease : 0"
                    }
                },
                "AO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Famine and Disease : 0"
                    }
                },
                "AG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Famine and Disease : 0"
                    }
                },
                "SA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Famine and Disease : 0"
                    }
                },
                "AR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Famine and Disease : 0"
                    }
                },
                "AM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Famine and Disease : 0"
                    }
                },
                "AU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Famine and Disease : 0"
                    }
                },
                "AT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Famine and Disease : 0"
                    }
                },
                "AZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Famine and Disease : 0"
                    }
                },
                "BS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Famine and Disease : 0"
                    }
                },
                "BH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Famine and Disease : 0"
                    }
                },
                "BD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Famine and Disease : 0"
                    }
                },
                "BB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Famine and Disease : 0"
                    }
                },
                "BE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Famine and Disease : 0"
                    }
                },
                "BZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Famine and Disease : 0"
                    }
                },
                "BJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Famine and Disease : 0"
                    }
                },
                "BT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Famine and Disease : 0"
                    }
                },
                "BY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Famine and Disease : 0"
                    }
                },
                "MM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Famine and Disease : 0"
                    }
                },
                "BO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Famine and Disease : 0"
                    }
                },
                "BA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Famine and Disease : 0"
                    }
                },
                "BW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Famine and Disease : 0"
                    }
                },
                "BR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Famine and Disease : 0"
                    }
                },
                "BN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Famine and Disease : 0"
                    }
                },
                "BG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Famine and Disease : 0"
                    }
                },
                "BF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Famine and Disease : 0"
                    }
                },
                "BI": {
                    "value": 3000000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Famine and Disease : 300000"
                    }
                },
                "KH": {
                    "value": 1500000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Famine and Disease : 1500000"
                    }
                },
                "CM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Famine and Disease : 0"
                    }
                },
                "CA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Famine and Disease : 0"
                    }
                },
                "CV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Famine and Disease : 0"
                    }
                },
                "CF": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Famine and Disease : 0"
                    }
                },
                "CL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Famine and Disease : 0"
                    }
                },
                "CN": {
                    "value": 7500000,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Famine and Disease : 7500000"
                    }
                },
                "CY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Famine and Disease : 0"
                    }
                },
                "CO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Famine and Disease : 0"
                    }
                },
                "KM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Famine and Disease : 0"
                    }
                },
                "CG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Famine and Disease : 0"
                    }
                },
                "CD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Famine and Disease : 0"
                    }
                },
                "KP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "KR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "CR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Famine and Disease : 0"
                    }
                },
                "CI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Famine and Disease : 0"
                    }
                },
                "HR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Famine and Disease : 0"
                    }
                },
                "CU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Famine and Disease : 0"
                    }
                },
                "DK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Famine and Disease : 0"
                    }
                },
                "DJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Famine and Disease : 0"
                    }
                },
                "DM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Famine and Disease : 0"
                    }
                },
                "EG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Famine and Disease : 0"
                    }
                },
                "AE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Famine and Disease : 0"
                    }
                },
                "EC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Famine and Disease : 0"
                    }
                },
                "ER": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Famine and Disease : 0"
                    }
                },
                "ES": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Famine and Disease : 0"
                    }
                },
                "EE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Famine and Disease : 0"
                    }
                },
                "US": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Famine and Disease : 0"
                    }
                },
                "ET": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Famine and Disease : 0"
                    }
                },
                "FJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Famine and Disease : 0"
                    }
                },
                "FI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Famine and Disease : 0"
                    }
                },
                "FR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Famine and Disease : 0"
                    }
                },
                "GA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Famine and Disease : 0"
                    }
                },
                "GM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Famine and Disease : 0"
                    }
                },
                "GE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Famine and Disease : 0"
                    }
                },
                "GH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Famine and Disease : 0"
                    }
                },
                "GR": {
                    "value": 450000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Famine and Disease : 450000"
                    }
                },
                "GD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Famine and Disease : 0"
                    }
                },
                "GT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Famine and Disease : 0"
                    }
                },
                "GN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Famine and Disease : 0"
                    }
                },
                "GQ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Famine and Disease : 0"
                    }
                },
                "GW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Famine and Disease : 0"
                    }
                },
                "GY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Famine and Disease : 0"
                    }
                },
                "HT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Famine and Disease : 0"
                    }
                },
                "HN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Famine and Disease : 0"
                    }
                },
                "HU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Famine and Disease : 0"
                    }
                },
                "JM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Famine and Disease : 0"
                    }
                },
                "JP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Famine and Disease : 0"
                    }
                },
                "MH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Famine and Disease : 0"
                    }
                },
                "PW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Famine and Disease : 0"
                    }
                },
                "SB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Famine and Disease : 0"
                    }
                },
                "IN": {
                    "value": 2000000,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Famine and Disease : 2000000"
                    }
                },
                "ID": {
                    "value": 3200000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Famine and Disease : 3200000"
                    }
                },
                "JO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Famine and Disease : 0"
                    }
                },
                "IR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "IQ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Famine and Disease : 0"
                    }
                },
                "IE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Famine and Disease : 0"
                    }
                },
                "IS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Famine and Disease : 0"
                    }
                },
                "IL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Famine and Disease : 0"
                    }
                },
                "IT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Famine and Disease : 0"
                    }
                },
                "KZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Famine and Disease : 0"
                    }
                },
                "KE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Famine and Disease : 0"
                    }
                },
                "KG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Famine and Disease : 0"
                    }
                },
                "KI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Famine and Disease : 0"
                    }
                },
                "KW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Famine and Disease : 0"
                    }
                },
                "LA": {
                    "value": 1500000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Famine and Disease : 1500000"
                    }
                },
                "LS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Famine and Disease : 0"
                    }
                },
                "LV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Famine and Disease : 0"
                    }
                },
                "LB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Famine and Disease : 0"
                    }
                },
                "LR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Famine and Disease : 0"
                    }
                },
                "LY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Famine and Disease : 0"
                    }
                },
                "LI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Famine and Disease : 0"
                    }
                },
                "LT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Famine and Disease : 0"
                    }
                },
                "LU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Famine and Disease : 0"
                    }
                },
                "MK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "MG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Famine and Disease : 0"
                    }
                },
                "MY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Famine and Disease : 0"
                    }
                },
                "MW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Famine and Disease : 0"
                    }
                },
                "MV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Famine and Disease : 0"
                    }
                },
                "ML": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Famine and Disease : 0"
                    }
                },
                "MT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Famine and Disease : 0"
                    }
                },
                "MA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Famine and Disease : 0"
                    }
                },
                "MU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Famine and Disease : 0"
                    }
                },
                "MR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Famine and Disease : 0"
                    }
                },
                "MX": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Famine and Disease : 0"
                    }
                },
                "FM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Famine and Disease : 0"
                    }
                },
                "MD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "MC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Famine and Disease : 0"
                    }
                },
                "MN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Famine and Disease : 0"
                    }
                },
                "ME": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Famine and Disease : 0"
                    }
                },
                "MZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Famine and Disease : 0"
                    }
                },
                "NA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Famine and Disease : 0"
                    }
                },
                "NP": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Famine and Disease : 0"
                    }
                },
                "NI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Famine and Disease : 0"
                    }
                },
                "NE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Famine and Disease : 0"
                    }
                },
                "NG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Famine and Disease : 0"
                    }
                },
                "NO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Famine and Disease : 0"
                    }
                },
                "NZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Famine and Disease : 0"
                    }
                },
                "OM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Famine and Disease : 0"
                    }
                },
                "UG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Famine and Disease : 0"
                    }
                },
                "UZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Famine and Disease : 0"
                    }
                },
                "PK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Famine and Disease : 0"
                    }
                },
                "PS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Famine and Disease : 0"
                    }
                },
                "PA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Famine and Disease : 0"
                    }
                },
                "PG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Famine and Disease : 0"
                    }
                },
                "PY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Famine and Disease : 0"
                    }
                },
                "NL": {
                    "value": 16000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Famine and Disease : 16000"
                    }
                },
                "PE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Famine and Disease : 0"
                    }
                },
                "PH": {
                    "value": 336000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Famine and Disease : 336000"
                    }
                },
                "PL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Famine and Disease : 0"
                    }
                },
                "PT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Famine and Disease : 0"
                    }
                },
                "QA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Famine and Disease : 0"
                    }
                },
                "DO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Famine and Disease : 0"
                    }
                },
                "RO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Famine and Disease : 0"
                    }
                },
                "GB": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Famine and Disease : 0"
                    }
                },
                "RU": {
                    "value": 6500000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Famine and Disease : 6500000"
                    }
                },
                "RW": {
                    "value": 300000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Famine and Disease : 300000"
                    }
                },
                "KN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Famine and Disease : 0"
                    }
                },
                "SM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Famine and Disease : 0"
                    }
                },
                "VC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Famine and Disease : 0"
                    }
                },
                "LC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Famine and Disease : 0"
                    }
                },
                "SV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Famine and Disease : 0"
                    }
                },
                "WS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Famine and Disease : 0"
                    }
                },
                "ST": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Famine and Disease : 0"
                    }
                },
                "SN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Famine and Disease : 0"
                    }
                },
                "RS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Famine and Disease : 0"
                    }
                },
                "SC": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Famine and Disease : 0"
                    }
                },
                "SL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Famine and Disease : 0"
                    }
                },
                "SG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Famine and Disease : 0"
                    }
                },
                "SK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Famine and Disease : 0"
                    }
                },
                "SI": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Famine and Disease : 0"
                    }
                },
                "SO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Famine and Disease : 0"
                    }
                },
                "SD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Famine and Disease : 0"
                    }
                },
                "SS": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Famine and Disease : 0"
                    }
                },
                "LK": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Famine and Disease : 0"
                    }
                },
                "SE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Famine and Disease : 0"
                    }
                },
                "CH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Famine and Disease : 0"
                    }
                },
                "SR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Famine and Disease : 0"
                    }
                },
                "SZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Famine and Disease : 0"
                    }
                },
                "SY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Famine and Disease : 0"
                    }
                },
                "TJ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Famine and Disease : 0"
                    }
                },
                "TZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "TD": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Famine and Disease : 0"
                    }
                },
                "CZ": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Famine and Disease : 0"
                    }
                },
                "TH": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Famine and Disease : 0"
                    }
                },
                "TL": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Famine and Disease : 0"
                    }
                },
                "TG": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Famine and Disease : 0"
                    }
                },
                "TO": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Famine and Disease : 0"
                    }
                },
                "TT": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Famine and Disease : 0"
                    }
                },
                "TN": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Famine and Disease : 0"
                    }
                },
                "TM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Famine and Disease : 0"
                    }
                },
                "TR": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Famine and Disease : 0"
                    }
                },
                "TV": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Famine and Disease : 0"
                    }
                },
                "VU": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Famine and Disease : 0"
                    }
                },
                "VE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Famine and Disease : 0"
                    }
                },
                "VN": {
                    "value": 1500000,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Famine and Disease : 1500000"
                    }
                },
                "UA": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Famine and Disease : 0"
                    }
                },
                "UY": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Famine and Disease : 0"
                    }
                },
                "YE": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Famine and Disease : 0"
                    }
                },
                "ZM": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Famine and Disease : 0"
                    }
                },
                "ZW": {
                    "value": 0,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Famine and Disease : 0"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 647388,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 647388"
                    }
                },
                "newyork": {
                    "value": 530194,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 530194"
                    }
                },
                "sydney": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 1034216"
                    }
                },
                "brasilia": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1088263"
                    }
                },
                "tokyo": {
                    "value": 0,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1182471"
                    }
                }
            }
        },
        "2006": {
            "areas": {
                "AF": {
                    "value": 46810959,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 46810959"
                    }
                },
                "ZA": {
                    "value": 44187775,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 44187775"
                    }
                },
                "AL": {
                    "value": 30618509,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 30618509"
                    }
                },
                "DZ": {
                    "value": 25670105,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 25670105"
                    }
                },
                "DE": {
                    "value": 50664389,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 50664389"
                    }
                },
                "AD": {
                    "value": 18705414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 18705414"
                    }
                },
                "AO": {
                    "value": 27159927,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 27159927"
                    }
                },
                "AG": {
                    "value": 11828466,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 11828466"
                    }
                },
                "SA": {
                    "value": 28194577,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 28194577"
                    }
                },
                "AR": {
                    "value": 59089655,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 59089655"
                    }
                },
                "AM": {
                    "value": 15160916,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 15160916"
                    }
                },
                "AU": {
                    "value": 25479993,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 25479993"
                    }
                },
                "AT": {
                    "value": 7479647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 7479647"
                    }
                },
                "AZ": {
                    "value": 51156122,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 51156122"
                    }
                },
                "BS": {
                    "value": 7724600,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 7724600"
                    }
                },
                "BH": {
                    "value": 57265308,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 57265308"
                    }
                },
                "BD": {
                    "value": 46547727,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 46547727"
                    }
                },
                "BB": {
                    "value": 30470441,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 30470441"
                    }
                },
                "BE": {
                    "value": 47904105,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 47904105"
                    }
                },
                "BZ": {
                    "value": 7975036,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 7975036"
                    }
                },
                "BJ": {
                    "value": 53676938,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 53676938"
                    }
                },
                "BT": {
                    "value": 2648236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 2648236"
                    }
                },
                "BY": {
                    "value": 29002554,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 29002554"
                    }
                },
                "MM": {
                    "value": 47949805,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 47949805"
                    }
                },
                "BO": {
                    "value": 26995407,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 26995407"
                    }
                },
                "BA": {
                    "value": 3255133,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 3255133"
                    }
                },
                "BW": {
                    "value": 53973075,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 53973075"
                    }
                },
                "BR": {
                    "value": 18080237,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 18080237"
                    }
                },
                "BN": {
                    "value": 54481260,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 54481260"
                    }
                },
                "BG": {
                    "value": 37906757,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 37906757"
                    }
                },
                "BF": {
                    "value": 16118789,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 16118789"
                    }
                },
                "BI": {
                    "value": 28806958,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 28806958"
                    }
                },
                "KH": {
                    "value": 14462619,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 14462619"
                    }
                },
                "CM": {
                    "value": 22368732,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 22368732"
                    }
                },
                "CA": {
                    "value": 18392825,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 18392825"
                    }
                },
                "CV": {
                    "value": 40820593,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 40820593"
                    }
                },
                "CF": {
                    "value": 54817612,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 54817612"
                    }
                },
                "CL": {
                    "value": 22156683,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 22156683"
                    }
                },
                "CN": {
                    "value": 13998306,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 13998306"
                    }
                },
                "CY": {
                    "value": 44761768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 44761768"
                    }
                },
                "CO": {
                    "value": 53874363,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 53874363"
                    }
                },
                "KM": {
                    "value": 12936236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 12936236"
                    }
                },
                "CG": {
                    "value": 45988358,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 45988358"
                    }
                },
                "CD": {
                    "value": 1321105,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 1321105"
                    }
                },
                "KP": {
                    "value": 39710996,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 39710996"
                    }
                },
                "KR": {
                    "value": 323016,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 323016"
                    }
                },
                "CR": {
                    "value": 7666104,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 7666104"
                    }
                },
                "CI": {
                    "value": 20939233,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 20939233"
                    }
                },
                "HR": {
                    "value": 10455636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 10455636"
                    }
                },
                "CU": {
                    "value": 19882648,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 19882648"
                    }
                },
                "DK": {
                    "value": 1984671,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 1984671"
                    }
                },
                "DJ": {
                    "value": 4406774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 4406774"
                    }
                },
                "DM": {
                    "value": 54086411,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 54086411"
                    }
                },
                "EG": {
                    "value": 17330755,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 17330755"
                    }
                },
                "AE": {
                    "value": 42047183,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 42047183"
                    }
                },
                "EC": {
                    "value": 2264355,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 2264355"
                    }
                },
                "ER": {
                    "value": 48931443,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 48931443"
                    }
                },
                "ES": {
                    "value": 28232965,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 28232965"
                    }
                },
                "EE": {
                    "value": 51106766,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 51106766"
                    }
                },
                "US": {
                    "value": 35102600,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 35102600"
                    }
                },
                "ET": {
                    "value": 23068857,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 23068857"
                    }
                },
                "FJ": {
                    "value": 58204902,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 58204902"
                    }
                },
                "FI": {
                    "value": 42266544,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 42266544"
                    }
                },
                "FR": {
                    "value": 33662134,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 33662134"
                    }
                },
                "GA": {
                    "value": 34526779,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 34526779"
                    }
                },
                "GM": {
                    "value": 23012189,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 23012189"
                    }
                },
                "GE": {
                    "value": 58579642,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 58579642"
                    }
                },
                "GH": {
                    "value": 18533581,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 18533581"
                    }
                },
                "GR": {
                    "value": 51483335,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 51483335"
                    }
                },
                "GD": {
                    "value": 48070453,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 48070453"
                    }
                },
                "GT": {
                    "value": 53249186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 53249186"
                    }
                },
                "GN": {
                    "value": 40257569,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 40257569"
                    }
                },
                "GQ": {
                    "value": 12166647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 12166647"
                    }
                },
                "GW": {
                    "value": 49145319,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 49145319"
                    }
                },
                "GY": {
                    "value": 9428299,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 9428299"
                    }
                },
                "HT": {
                    "value": 59524720,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 59524720"
                    }
                },
                "HN": {
                    "value": 4554843,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 4554843"
                    }
                },
                "HU": {
                    "value": 31852411,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 31852411"
                    }
                },
                "JM": {
                    "value": 120108,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 120108"
                    }
                },
                "JP": {
                    "value": 7075659,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 7075659"
                    }
                },
                "MH": {
                    "value": 26776047,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 26776047"
                    }
                },
                "PW": {
                    "value": 31757355,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 31757355"
                    }
                },
                "SB": {
                    "value": 8477737,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 8477737"
                    }
                },
                "IN": {
                    "value": 23301013,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 23301013"
                    }
                },
                "ID": {
                    "value": 47008383,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 47008383"
                    }
                },
                "JO": {
                    "value": 54475776,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 54475776"
                    }
                },
                "IR": {
                    "value": 47604312,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 47604312"
                    }
                },
                "IQ": {
                    "value": 38941406,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 38941406"
                    }
                },
                "IE": {
                    "value": 3479977,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 3479977"
                    }
                },
                "IS": {
                    "value": 15773297,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 15773297"
                    }
                },
                "IL": {
                    "value": 40752957,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 40752957"
                    }
                },
                "IT": {
                    "value": 14687463,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 14687463"
                    }
                },
                "KZ": {
                    "value": 44068955,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 44068955"
                    }
                },
                "KE": {
                    "value": 41065546,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 41065546"
                    }
                },
                "KG": {
                    "value": 1026797,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 1026797"
                    }
                },
                "KI": {
                    "value": 1079809,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 1079809"
                    }
                },
                "KW": {
                    "value": 47103440,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 47103440"
                    }
                },
                "LA": {
                    "value": 46118146,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 46118146"
                    }
                },
                "LS": {
                    "value": 31378958,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 31378958"
                    }
                },
                "LV": {
                    "value": 18709070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 18709070"
                    }
                },
                "LB": {
                    "value": 40661557,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 40661557"
                    }
                },
                "LR": {
                    "value": 36546723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 36546723"
                    }
                },
                "LY": {
                    "value": 25112564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 25112564"
                    }
                },
                "LI": {
                    "value": 58215870,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 58215870"
                    }
                },
                "LT": {
                    "value": 22871432,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 22871432"
                    }
                },
                "LU": {
                    "value": 47916901,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 47916901"
                    }
                },
                "MK": {
                    "value": 25280740,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 25280740"
                    }
                },
                "MG": {
                    "value": 20390832,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 20390832"
                    }
                },
                "MY": {
                    "value": 21811191,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 21811191"
                    }
                },
                "MW": {
                    "value": 25944305,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 25944305"
                    }
                },
                "MV": {
                    "value": 44986612,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 44986612"
                    }
                },
                "ML": {
                    "value": 15674585,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 15674585"
                    }
                },
                "MT": {
                    "value": 35608957,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 35608957"
                    }
                },
                "MA": {
                    "value": 6194561,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 6194561"
                    }
                },
                "MU": {
                    "value": 7483303,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 7483303"
                    }
                },
                "MR": {
                    "value": 4757751,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 4757751"
                    }
                },
                "MX": {
                    "value": 32442856,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 32442856"
                    }
                },
                "FM": {
                    "value": 54183295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 54183295"
                    }
                },
                "MD": {
                    "value": 45673941,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 45673941"
                    }
                },
                "MC": {
                    "value": 38180957,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 38180957"
                    }
                },
                "MN": {
                    "value": 10441012,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 10441012"
                    }
                },
                "ME": {
                    "value": 25776129,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 25776129"
                    }
                },
                "MZ": {
                    "value": 22911648,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 22911648"
                    }
                },
                "NA": {
                    "value": 16734826,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 16734826"
                    }
                },
                "NP": {
                    "value": 57581553,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 57581553"
                    }
                },
                "NI": {
                    "value": 46388690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 46388690"
                    }
                },
                "NE": {
                    "value": 12199551,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 12199551"
                    }
                },
                "NG": {
                    "value": 50859986,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 50859986"
                    }
                },
                "NO": {
                    "value": 52192600,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 52192600"
                    }
                },
                "NZ": {
                    "value": 31786603,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 31786603"
                    }
                },
                "OM": {
                    "value": 56590775,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 56590775"
                    }
                },
                "UG": {
                    "value": 41347058,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 41347058"
                    }
                },
                "UZ": {
                    "value": 22352280,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 22352280"
                    }
                },
                "PK": {
                    "value": 47485492,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 47485492"
                    }
                },
                "PS": {
                    "value": 49388443,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 49388443"
                    }
                },
                "PA": {
                    "value": 38736670,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 38736670"
                    }
                },
                "PG": {
                    "value": 26088718,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 26088718"
                    }
                },
                "PY": {
                    "value": 9250982,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 9250982"
                    }
                },
                "NL": {
                    "value": 33645682,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 33645682"
                    }
                },
                "PE": {
                    "value": 3719445,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 3719445"
                    }
                },
                "PH": {
                    "value": 31580038,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 31580038"
                    }
                },
                "PL": {
                    "value": 42498700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 42498700"
                    }
                },
                "PT": {
                    "value": 22465616,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 22465616"
                    }
                },
                "QA": {
                    "value": 46736011,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 46736011"
                    }
                },
                "DO": {
                    "value": 36954367,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 36954367"
                    }
                },
                "RO": {
                    "value": 3094268,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 3094268"
                    }
                },
                "GB": {
                    "value": 58901371,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 58901371"
                    }
                },
                "RU": {
                    "value": 8676989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 8676989"
                    }
                },
                "RW": {
                    "value": 10389828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 10389828"
                    }
                },
                "KN": {
                    "value": 16453314,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 16453314"
                    }
                },
                "SM": {
                    "value": 36256070,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 36256070"
                    }
                },
                "VC": {
                    "value": 59883008,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 59883008"
                    }
                },
                "LC": {
                    "value": 9914547,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 9914547"
                    }
                },
                "SV": {
                    "value": 58241462,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 58241462"
                    }
                },
                "WS": {
                    "value": 57482840,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 57482840"
                    }
                },
                "ST": {
                    "value": 41244690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 41244690"
                    }
                },
                "SN": {
                    "value": 3706649,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 3706649"
                    }
                },
                "RS": {
                    "value": 14274334,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 14274334"
                    }
                },
                "SC": {
                    "value": 15884805,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 15884805"
                    }
                },
                "SL": {
                    "value": 3302661,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 3302661"
                    }
                },
                "SG": {
                    "value": 49794260,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 49794260"
                    }
                },
                "SK": {
                    "value": 39917560,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 39917560"
                    }
                },
                "SI": {
                    "value": 14415091,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 14415091"
                    }
                },
                "SO": {
                    "value": 26547546,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 26547546"
                    }
                },
                "SD": {
                    "value": 56455503,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 56455503"
                    }
                },
                "SS": {
                    "value": 20986761,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 20986761"
                    }
                },
                "LK": {
                    "value": 6276822,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 6276822"
                    }
                },
                "SE": {
                    "value": 41719971,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 41719971"
                    }
                },
                "CH": {
                    "value": 21818503,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 21818503"
                    }
                },
                "SR": {
                    "value": 52947565,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 52947565"
                    }
                },
                "SZ": {
                    "value": 34523123,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 34523123"
                    }
                },
                "SY": {
                    "value": 9510559,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 9510559"
                    }
                },
                "TJ": {
                    "value": 33861386,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 33861386"
                    }
                },
                "TZ": {
                    "value": 21615594,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 21615594"
                    }
                },
                "TD": {
                    "value": 52357120,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 52357120"
                    }
                },
                "CZ": {
                    "value": 40359937,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 40359937"
                    }
                },
                "TH": {
                    "value": 30812277,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 30812277"
                    }
                },
                "TL": {
                    "value": 22456476,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 22456476"
                    }
                },
                "TG": {
                    "value": 42931937,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 42931937"
                    }
                },
                "TO": {
                    "value": 35058728,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 35058728"
                    }
                },
                "TT": {
                    "value": 40749301,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 40749301"
                    }
                },
                "TN": {
                    "value": 1185833,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 1185833"
                    }
                },
                "TM": {
                    "value": 19350699,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 19350699"
                    }
                },
                "TR": {
                    "value": 44147559,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 44147559"
                    }
                },
                "TV": {
                    "value": 1900582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 1900582"
                    }
                },
                "VU": {
                    "value": 53269294,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 53269294"
                    }
                },
                "VE": {
                    "value": 24666531,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 24666531"
                    }
                },
                "VN": {
                    "value": 28317053,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 28317053"
                    }
                },
                "UA": {
                    "value": 2244247,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 2244247"
                    }
                },
                "UY": {
                    "value": 4622479,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 4622479"
                    }
                },
                "YE": {
                    "value": 12082559,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 12082559"
                    }
                },
                "ZM": {
                    "value": 38107837,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 38107837"
                    }
                },
                "ZW": {
                    "value": 39908420,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 39908420"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 345666,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 345666"
                    }
                },
                "newyork": {
                    "value": 673834,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 673834"
                    }
                },
                "sydney": {
                    "value": 897241,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 897241"
                    }
                },
                "brasilia": {
                    "value": 639227,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 639227"
                    }
                },
                "tokyo": {
                    "value": 493835,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 493835"
                    }
                }
            }
        },
        "2007": {
            "areas": {
                "AF": {
                    "value": 15577701,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 15577701"
                    }
                },
                "ZA": {
                    "value": 7265771,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 7265771"
                    }
                },
                "AL": {
                    "value": 10060788,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 10060788"
                    }
                },
                "DZ": {
                    "value": 59206647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 59206647"
                    }
                },
                "DE": {
                    "value": 27913065,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 27913065"
                    }
                },
                "AD": {
                    "value": 37764172,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 37764172"
                    }
                },
                "AO": {
                    "value": 28655234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 28655234"
                    }
                },
                "AG": {
                    "value": 23194989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 23194989"
                    }
                },
                "SA": {
                    "value": 14861123,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 14861123"
                    }
                },
                "AR": {
                    "value": 56446363,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 56446363"
                    }
                },
                "AM": {
                    "value": 17182687,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 17182687"
                    }
                },
                "AU": {
                    "value": 4381182,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 4381182"
                    }
                },
                "AT": {
                    "value": 19475003,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 19475003"
                    }
                },
                "AZ": {
                    "value": 24002966,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 24002966"
                    }
                },
                "BS": {
                    "value": 3721273,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 3721273"
                    }
                },
                "BH": {
                    "value": 8380853,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 8380853"
                    }
                },
                "BD": {
                    "value": 54857828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 54857828"
                    }
                },
                "BB": {
                    "value": 50874610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 50874610"
                    }
                },
                "BE": {
                    "value": 46299118,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 46299118"
                    }
                },
                "BZ": {
                    "value": 10859625,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 10859625"
                    }
                },
                "BJ": {
                    "value": 44262723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 44262723"
                    }
                },
                "BT": {
                    "value": 37851917,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 37851917"
                    }
                },
                "BY": {
                    "value": 53194345,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 53194345"
                    }
                },
                "MM": {
                    "value": 17433124,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 17433124"
                    }
                },
                "BO": {
                    "value": 792813,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 792813"
                    }
                },
                "BA": {
                    "value": 35475513,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 35475513"
                    }
                },
                "BW": {
                    "value": 22535080,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 22535080"
                    }
                },
                "BR": {
                    "value": 3766973,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 3766973"
                    }
                },
                "BN": {
                    "value": 27401224,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 27401224"
                    }
                },
                "BG": {
                    "value": 4436023,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 4436023"
                    }
                },
                "BF": {
                    "value": 42299448,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 42299448"
                    }
                },
                "BI": {
                    "value": 35376801,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 35376801"
                    }
                },
                "KH": {
                    "value": 17391080,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 17391080"
                    }
                },
                "CM": {
                    "value": 55174073,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 55174073"
                    }
                },
                "CA": {
                    "value": 50715573,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 50715573"
                    }
                },
                "CV": {
                    "value": 28028229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 28028229"
                    }
                },
                "CF": {
                    "value": 13815506,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 13815506"
                    }
                },
                "CL": {
                    "value": 28580286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 28580286"
                    }
                },
                "CN": {
                    "value": 15961581,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 15961581"
                    }
                },
                "CY": {
                    "value": 47236884,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 47236884"
                    }
                },
                "CO": {
                    "value": 29777628,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 29777628"
                    }
                },
                "KM": {
                    "value": 35095288,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 35095288"
                    }
                },
                "CG": {
                    "value": 55965598,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 55965598"
                    }
                },
                "CD": {
                    "value": 8768390,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 8768390"
                    }
                },
                "KP": {
                    "value": 48430570,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 48430570"
                    }
                },
                "KR": {
                    "value": 35409705,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 35409705"
                    }
                },
                "CR": {
                    "value": 19105746,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 19105746"
                    }
                },
                "CI": {
                    "value": 38038373,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 38038373"
                    }
                },
                "HR": {
                    "value": 22977457,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 22977457"
                    }
                },
                "CU": {
                    "value": 20164160,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 20164160"
                    }
                },
                "DK": {
                    "value": 23310153,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 23310153"
                    }
                },
                "DJ": {
                    "value": 50812458,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 50812458"
                    }
                },
                "DM": {
                    "value": 56371415,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 56371415"
                    }
                },
                "EG": {
                    "value": 9949279,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 9949279"
                    }
                },
                "AE": {
                    "value": 36756943,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 36756943"
                    }
                },
                "EC": {
                    "value": 52706269,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 52706269"
                    }
                },
                "ER": {
                    "value": 41915567,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 41915567"
                    }
                },
                "ES": {
                    "value": 55305689,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 55305689"
                    }
                },
                "EE": {
                    "value": 57574241,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 57574241"
                    }
                },
                "US": {
                    "value": 19385431,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 19385431"
                    }
                },
                "ET": {
                    "value": 22663040,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 22663040"
                    }
                },
                "FJ": {
                    "value": 57024012,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 57024012"
                    }
                },
                "FI": {
                    "value": 53940171,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 53940171"
                    }
                },
                "FR": {
                    "value": 16365570,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 16365570"
                    }
                },
                "GA": {
                    "value": 11716958,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 11716958"
                    }
                },
                "GM": {
                    "value": 5744873,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 5744873"
                    }
                },
                "GE": {
                    "value": 23982858,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 23982858"
                    }
                },
                "GH": {
                    "value": 19312311,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 19312311"
                    }
                },
                "GR": {
                    "value": 52130448,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 52130448"
                    }
                },
                "GD": {
                    "value": 41858899,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 41858899"
                    }
                },
                "GT": {
                    "value": 55680430,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 55680430"
                    }
                },
                "GN": {
                    "value": 33841278,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 33841278"
                    }
                },
                "GQ": {
                    "value": 37206632,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 37206632"
                    }
                },
                "GW": {
                    "value": 36206714,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 36206714"
                    }
                },
                "GY": {
                    "value": 27361008,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 27361008"
                    }
                },
                "HT": {
                    "value": 35618097,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 35618097"
                    }
                },
                "HN": {
                    "value": 9998636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 9998636"
                    }
                },
                "HU": {
                    "value": 9378943,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 9378943"
                    }
                },
                "JM": {
                    "value": 27002719,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 27002719"
                    }
                },
                "JP": {
                    "value": 30258392,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 30258392"
                    }
                },
                "MH": {
                    "value": 43509586,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 43509586"
                    }
                },
                "PW": {
                    "value": 11916211,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 11916211"
                    }
                },
                "SB": {
                    "value": 52733689,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 52733689"
                    }
                },
                "IN": {
                    "value": 53327790,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 53327790"
                    }
                },
                "ID": {
                    "value": 1092605,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 1092605"
                    }
                },
                "JO": {
                    "value": 4509143,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 4509143"
                    }
                },
                "IR": {
                    "value": 12832040,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 12832040"
                    }
                },
                "IQ": {
                    "value": 50541913,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 50541913"
                    }
                },
                "IE": {
                    "value": 15650821,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 15650821"
                    }
                },
                "IS": {
                    "value": 37698364,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 37698364"
                    }
                },
                "IL": {
                    "value": 25225900,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 25225900"
                    }
                },
                "IT": {
                    "value": 57466388,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 57466388"
                    }
                },
                "KZ": {
                    "value": 10437356,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 10437356"
                    }
                },
                "KE": {
                    "value": 12274499,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 12274499"
                    }
                },
                "KG": {
                    "value": 58093393,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 58093393"
                    }
                },
                "KI": {
                    "value": 19816839,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 19816839"
                    }
                },
                "KW": {
                    "value": 58455338,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 58455338"
                    }
                },
                "LA": {
                    "value": 38678174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 38678174"
                    }
                },
                "LS": {
                    "value": 49662644,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 49662644"
                    }
                },
                "LV": {
                    "value": 33058893,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 33058893"
                    }
                },
                "LB": {
                    "value": 23057889,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 23057889"
                    }
                },
                "LR": {
                    "value": 17700012,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 17700012"
                    }
                },
                "LY": {
                    "value": 28011777,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 28011777"
                    }
                },
                "LI": {
                    "value": 42908173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 42908173"
                    }
                },
                "LT": {
                    "value": 37148135,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 37148135"
                    }
                },
                "LU": {
                    "value": 59780640,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 59780640"
                    }
                },
                "MK": {
                    "value": 51168918,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 51168918"
                    }
                },
                "MG": {
                    "value": 25030304,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 25030304"
                    }
                },
                "MY": {
                    "value": 23979202,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 23979202"
                    }
                },
                "MW": {
                    "value": 5810681,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 5810681"
                    }
                },
                "MV": {
                    "value": 27412192,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 27412192"
                    }
                },
                "ML": {
                    "value": 44940912,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 44940912"
                    }
                },
                "MT": {
                    "value": 56554215,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 56554215"
                    }
                },
                "MA": {
                    "value": 26130762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 26130762"
                    }
                },
                "MU": {
                    "value": 14769723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 14769723"
                    }
                },
                "MR": {
                    "value": 18405621,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 18405621"
                    }
                },
                "MX": {
                    "value": 58126297,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 58126297"
                    }
                },
                "FM": {
                    "value": 21531506,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 21531506"
                    }
                },
                "MD": {
                    "value": 41319638,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 41319638"
                    }
                },
                "MC": {
                    "value": 10940057,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 10940057"
                    }
                },
                "MN": {
                    "value": 41798575,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 41798575"
                    }
                },
                "ME": {
                    "value": 42553540,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 42553540"
                    }
                },
                "MZ": {
                    "value": 45290061,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 45290061"
                    }
                },
                "NA": {
                    "value": 58109845,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 58109845"
                    }
                },
                "NP": {
                    "value": 50624173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 50624173"
                    }
                },
                "NI": {
                    "value": 49887488,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 49887488"
                    }
                },
                "NE": {
                    "value": 54759116,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 54759116"
                    }
                },
                "NG": {
                    "value": 45730609,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 45730609"
                    }
                },
                "NO": {
                    "value": 37806217,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 37806217"
                    }
                },
                "NZ": {
                    "value": 34173975,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 34173975"
                    }
                },
                "OM": {
                    "value": 7954928,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 7954928"
                    }
                },
                "UG": {
                    "value": 9367975,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 9367975"
                    }
                },
                "UZ": {
                    "value": 46397830,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 46397830"
                    }
                },
                "PK": {
                    "value": 16003625,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 16003625"
                    }
                },
                "PS": {
                    "value": 52755625,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 52755625"
                    }
                },
                "PA": {
                    "value": 14537567,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 14537567"
                    }
                },
                "PG": {
                    "value": 29602139,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 29602139"
                    }
                },
                "PY": {
                    "value": 45917066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 45917066"
                    }
                },
                "NL": {
                    "value": 7589328,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 7589328"
                    }
                },
                "PE": {
                    "value": 36905011,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 36905011"
                    }
                },
                "PH": {
                    "value": 30472269,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 30472269"
                    }
                },
                "PL": {
                    "value": 24704919,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 24704919"
                    }
                },
                "PT": {
                    "value": 20334164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 20334164"
                    }
                },
                "QA": {
                    "value": 22185931,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 22185931"
                    }
                },
                "DO": {
                    "value": 2211343,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 2211343"
                    }
                },
                "RO": {
                    "value": 2907812,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 2907812"
                    }
                },
                "GB": {
                    "value": 29218259,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 29218259"
                    }
                },
                "RU": {
                    "value": 5945953,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 5945953"
                    }
                },
                "RW": {
                    "value": 47772489,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 47772489"
                    }
                },
                "KN": {
                    "value": 1116369,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 1116369"
                    }
                },
                "SM": {
                    "value": 2419735,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 2419735"
                    }
                },
                "VC": {
                    "value": 53700702,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 53700702"
                    }
                },
                "LC": {
                    "value": 558828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 558828"
                    }
                },
                "SV": {
                    "value": 9971215,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 9971215"
                    }
                },
                "WS": {
                    "value": 57866721,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 57866721"
                    }
                },
                "ST": {
                    "value": 21315802,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 21315802"
                    }
                },
                "SN": {
                    "value": 23423489,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 23423489"
                    }
                },
                "RS": {
                    "value": 50062976,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 50062976"
                    }
                },
                "SC": {
                    "value": 43937338,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 43937338"
                    }
                },
                "SL": {
                    "value": 34206879,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 34206879"
                    }
                },
                "SG": {
                    "value": 9669595,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 9669595"
                    }
                },
                "SK": {
                    "value": 52132276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 52132276"
                    }
                },
                "SI": {
                    "value": 18659714,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 18659714"
                    }
                },
                "SO": {
                    "value": 8139557,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 8139557"
                    }
                },
                "SD": {
                    "value": 2350271,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 2350271"
                    }
                },
                "SS": {
                    "value": 36769739,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 36769739"
                    }
                },
                "LK": {
                    "value": 10111972,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 10111972"
                    }
                },
                "SE": {
                    "value": 8629461,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 8629461"
                    }
                },
                "CH": {
                    "value": 14568643,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 14568643"
                    }
                },
                "SR": {
                    "value": 54515992,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 54515992"
                    }
                },
                "SZ": {
                    "value": 16422238,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 16422238"
                    }
                },
                "SY": {
                    "value": 11342218,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 11342218"
                    }
                },
                "TJ": {
                    "value": 29477835,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 29477835"
                    }
                },
                "TZ": {
                    "value": 6161657,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 6161657"
                    }
                },
                "TD": {
                    "value": 5768637,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 5768637"
                    }
                },
                "CZ": {
                    "value": 21893451,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 21893451"
                    }
                },
                "TH": {
                    "value": 280972,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 280972"
                    }
                },
                "TL": {
                    "value": 2147363,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 2147363"
                    }
                },
                "TG": {
                    "value": 36179294,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 36179294"
                    }
                },
                "TO": {
                    "value": 15948785,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 15948785"
                    }
                },
                "TT": {
                    "value": 29931180,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 29931180"
                    }
                },
                "TN": {
                    "value": 3163732,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 3163732"
                    }
                },
                "TM": {
                    "value": 15932333,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 15932333"
                    }
                },
                "TR": {
                    "value": 59023847,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 59023847"
                    }
                },
                "TV": {
                    "value": 11731582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 11731582"
                    }
                },
                "VU": {
                    "value": 59751392,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 59751392"
                    }
                },
                "VE": {
                    "value": 3055880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 3055880"
                    }
                },
                "VN": {
                    "value": 6984259,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 6984259"
                    }
                },
                "UA": {
                    "value": 48635306,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 48635306"
                    }
                },
                "UY": {
                    "value": 12800964,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 12800964"
                    }
                },
                "YE": {
                    "value": 25628061,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 25628061"
                    }
                },
                "ZM": {
                    "value": 45145648,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 45145648"
                    }
                },
                "ZW": {
                    "value": 33945474,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 33945474"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 860840,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 860840"
                    }
                },
                "newyork": {
                    "value": 608978,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 608978"
                    }
                },
                "sydney": {
                    "value": 784192,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 784192"
                    }
                },
                "brasilia": {
                    "value": 348101,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 348101"
                    }
                },
                "tokyo": {
                    "value": 567407,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 567407"
                    }
                }
            }
        },
        "2008": {
            "areas": {
                "AF": {
                    "value": 19880820,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 19880820"
                    }
                },
                "ZA": {
                    "value": 25183856,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 25183856"
                    }
                },
                "AL": {
                    "value": 51947647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 51947647"
                    }
                },
                "DZ": {
                    "value": 25677417,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 25677417"
                    }
                },
                "DE": {
                    "value": 17767648,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 17767648"
                    }
                },
                "AD": {
                    "value": 8241925,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 8241925"
                    }
                },
                "AO": {
                    "value": 20995901,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 20995901"
                    }
                },
                "AG": {
                    "value": 10080896,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 10080896"
                    }
                },
                "SA": {
                    "value": 43615610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 43615610"
                    }
                },
                "AR": {
                    "value": 44063471,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 44063471"
                    }
                },
                "AM": {
                    "value": 50763102,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 50763102"
                    }
                },
                "AU": {
                    "value": 23849414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 23849414"
                    }
                },
                "AT": {
                    "value": 35652829,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 35652829"
                    }
                },
                "AZ": {
                    "value": 48414118,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 48414118"
                    }
                },
                "BS": {
                    "value": 4602371,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 4602371"
                    }
                },
                "BH": {
                    "value": 27673596,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 27673596"
                    }
                },
                "BD": {
                    "value": 21957431,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 21957431"
                    }
                },
                "BB": {
                    "value": 26909491,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 26909491"
                    }
                },
                "BE": {
                    "value": 15416836,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 15416836"
                    }
                },
                "BZ": {
                    "value": 12194067,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 12194067"
                    }
                },
                "BJ": {
                    "value": 657540,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 657540"
                    }
                },
                "BT": {
                    "value": 15115216,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 15115216"
                    }
                },
                "BY": {
                    "value": 6459622,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 6459622"
                    }
                },
                "MM": {
                    "value": 57901453,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 57901453"
                    }
                },
                "BO": {
                    "value": 59731284,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 59731284"
                    }
                },
                "BA": {
                    "value": 18646918,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 18646918"
                    }
                },
                "BW": {
                    "value": 50733853,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 50733853"
                    }
                },
                "BR": {
                    "value": 35636377,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 35636377"
                    }
                },
                "BN": {
                    "value": 17606784,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 17606784"
                    }
                },
                "BG": {
                    "value": 13170221,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 13170221"
                    }
                },
                "BF": {
                    "value": 11592654,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 11592654"
                    }
                },
                "BI": {
                    "value": 25889465,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 25889465"
                    }
                },
                "KH": {
                    "value": 22162167,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 22162167"
                    }
                },
                "CM": {
                    "value": 4300750,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 4300750"
                    }
                },
                "CA": {
                    "value": 21939151,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 21939151"
                    }
                },
                "CV": {
                    "value": 19301343,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 19301343"
                    }
                },
                "CF": {
                    "value": 11625558,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 11625558"
                    }
                },
                "CL": {
                    "value": 27604132,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 27604132"
                    }
                },
                "CN": {
                    "value": 5026467,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 5026467"
                    }
                },
                "CY": {
                    "value": 36462634,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 36462634"
                    }
                },
                "CO": {
                    "value": 14075082,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 14075082"
                    }
                },
                "KM": {
                    "value": 28795990,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 28795990"
                    }
                },
                "CG": {
                    "value": 33857730,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 33857730"
                    }
                },
                "CD": {
                    "value": 8113964,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 8113964"
                    }
                },
                "KP": {
                    "value": 27638864,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 27638864"
                    }
                },
                "KR": {
                    "value": 43441950,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 43441950"
                    }
                },
                "CR": {
                    "value": 31686063,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 31686063"
                    }
                },
                "CI": {
                    "value": 14745959,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 14745959"
                    }
                },
                "HR": {
                    "value": 20495029,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 20495029"
                    }
                },
                "CU": {
                    "value": 17257635,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 17257635"
                    }
                },
                "DK": {
                    "value": 11614590,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 11614590"
                    }
                },
                "DJ": {
                    "value": 46999243,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 46999243"
                    }
                },
                "DM": {
                    "value": 50671701,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 50671701"
                    }
                },
                "EG": {
                    "value": 45708673,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 45708673"
                    }
                },
                "AE": {
                    "value": 16696438,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 16696438"
                    }
                },
                "EC": {
                    "value": 5664441,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 5664441"
                    }
                },
                "ER": {
                    "value": 26447006,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 26447006"
                    }
                },
                "ES": {
                    "value": 14610687,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 14610687"
                    }
                },
                "EE": {
                    "value": 134732,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 134732"
                    }
                },
                "US": {
                    "value": 1182177,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 1182177"
                    }
                },
                "ET": {
                    "value": 5849069,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 5849069"
                    }
                },
                "FJ": {
                    "value": 19429303,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 19429303"
                    }
                },
                "FI": {
                    "value": 4982595,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 4982595"
                    }
                },
                "FR": {
                    "value": 54143079,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 54143079"
                    }
                },
                "GA": {
                    "value": 16956015,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 16956015"
                    }
                },
                "GM": {
                    "value": 5880145,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 5880145"
                    }
                },
                "GE": {
                    "value": 44343155,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 44343155"
                    }
                },
                "GH": {
                    "value": 35387769,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 35387769"
                    }
                },
                "GR": {
                    "value": 57895969,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 57895969"
                    }
                },
                "GD": {
                    "value": 9528839,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 9528839"
                    }
                },
                "GT": {
                    "value": 41469534,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 41469534"
                    }
                },
                "GN": {
                    "value": 25406872,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 25406872"
                    }
                },
                "GQ": {
                    "value": 36947055,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 36947055"
                    }
                },
                "GW": {
                    "value": 35991010,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 35991010"
                    }
                },
                "GY": {
                    "value": 9464859,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 9464859"
                    }
                },
                "HT": {
                    "value": 14841015,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 14841015"
                    }
                },
                "HN": {
                    "value": 12137399,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 12137399"
                    }
                },
                "HU": {
                    "value": 1032281,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 1032281"
                    }
                },
                "JM": {
                    "value": 51282254,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 51282254"
                    }
                },
                "JP": {
                    "value": 24280823,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 24280823"
                    }
                },
                "MH": {
                    "value": 11545126,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 11545126"
                    }
                },
                "PW": {
                    "value": 30068280,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 30068280"
                    }
                },
                "SB": {
                    "value": 324844,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 324844"
                    }
                },
                "IN": {
                    "value": 44366919,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 44366919"
                    }
                },
                "ID": {
                    "value": 33298361,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 33298361"
                    }
                },
                "JO": {
                    "value": 38864630,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 38864630"
                    }
                },
                "IR": {
                    "value": 19445755,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 19445755"
                    }
                },
                "IQ": {
                    "value": 35789929,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 35789929"
                    }
                },
                "IE": {
                    "value": 45575229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 45575229"
                    }
                },
                "IS": {
                    "value": 33036957,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 33036957"
                    }
                },
                "IL": {
                    "value": 1948110,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 1948110"
                    }
                },
                "IT": {
                    "value": 49090479,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 49090479"
                    }
                },
                "KZ": {
                    "value": 46503855,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 46503855"
                    }
                },
                "KE": {
                    "value": 48150885,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 48150885"
                    }
                },
                "KG": {
                    "value": 50785038,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 50785038"
                    }
                },
                "KI": {
                    "value": 44959192,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 44959192"
                    }
                },
                "KW": {
                    "value": 4262362,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 4262362"
                    }
                },
                "LA": {
                    "value": 29922040,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 29922040"
                    }
                },
                "LS": {
                    "value": 59259659,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 59259659"
                    }
                },
                "LV": {
                    "value": 14036694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 14036694"
                    }
                },
                "LB": {
                    "value": 36778879,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 36778879"
                    }
                },
                "LR": {
                    "value": 13916046,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 13916046"
                    }
                },
                "LY": {
                    "value": 10525100,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 10525100"
                    }
                },
                "LI": {
                    "value": 36813611,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 36813611"
                    }
                },
                "LT": {
                    "value": 52331528,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 52331528"
                    }
                },
                "LU": {
                    "value": 5748529,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 5748529"
                    }
                },
                "MK": {
                    "value": 37484488,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 37484488"
                    }
                },
                "MG": {
                    "value": 44030567,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 44030567"
                    }
                },
                "MY": {
                    "value": 49048435,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 49048435"
                    }
                },
                "MW": {
                    "value": 40985114,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 40985114"
                    }
                },
                "MV": {
                    "value": 3490945,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 3490945"
                    }
                },
                "ML": {
                    "value": 56278186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 56278186"
                    }
                },
                "MT": {
                    "value": 55007724,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 55007724"
                    }
                },
                "MA": {
                    "value": 5441424,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 5441424"
                    }
                },
                "MU": {
                    "value": 41447598,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 41447598"
                    }
                },
                "MR": {
                    "value": 4297094,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 4297094"
                    }
                },
                "MX": {
                    "value": 8437521,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 8437521"
                    }
                },
                "FM": {
                    "value": 54483088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 54483088"
                    }
                },
                "MD": {
                    "value": 14707571,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 14707571"
                    }
                },
                "MC": {
                    "value": 28477917,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 28477917"
                    }
                },
                "MN": {
                    "value": 57215952,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 57215952"
                    }
                },
                "ME": {
                    "value": 14025726,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 14025726"
                    }
                },
                "MZ": {
                    "value": 56173990,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 56173990"
                    }
                },
                "NA": {
                    "value": 59561280,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 59561280"
                    }
                },
                "NP": {
                    "value": 19771139,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 19771139"
                    }
                },
                "NI": {
                    "value": 39434967,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 39434967"
                    }
                },
                "NE": {
                    "value": 29199979,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 29199979"
                    }
                },
                "NG": {
                    "value": 58237806,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 58237806"
                    }
                },
                "NO": {
                    "value": 43981211,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 43981211"
                    }
                },
                "NZ": {
                    "value": 16526434,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 16526434"
                    }
                },
                "OM": {
                    "value": 6788662,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 6788662"
                    }
                },
                "UG": {
                    "value": 15148120,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 15148120"
                    }
                },
                "UZ": {
                    "value": 8174289,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 8174289"
                    }
                },
                "PK": {
                    "value": 40765753,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 40765753"
                    }
                },
                "PS": {
                    "value": 31993167,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 31993167"
                    }
                },
                "PA": {
                    "value": 10782849,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 10782849"
                    }
                },
                "PG": {
                    "value": 328500,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 328500"
                    }
                },
                "PY": {
                    "value": 57868549,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 57868549"
                    }
                },
                "NL": {
                    "value": 58016617,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 58016617"
                    }
                },
                "PE": {
                    "value": 35782617,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 35782617"
                    }
                },
                "PH": {
                    "value": 18571969,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 18571969"
                    }
                },
                "PL": {
                    "value": 43500446,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 43500446"
                    }
                },
                "PT": {
                    "value": 8112136,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 8112136"
                    }
                },
                "QA": {
                    "value": 50838050,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 50838050"
                    }
                },
                "DO": {
                    "value": 31082822,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 31082822"
                    }
                },
                "RO": {
                    "value": 3277069,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 3277069"
                    }
                },
                "GB": {
                    "value": 15182852,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 15182852"
                    }
                },
                "RU": {
                    "value": 46589771,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 46589771"
                    }
                },
                "RW": {
                    "value": 35989182,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 35989182"
                    }
                },
                "KN": {
                    "value": 32664044,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 32664044"
                    }
                },
                "SM": {
                    "value": 2481887,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 2481887"
                    }
                },
                "VC": {
                    "value": 43628406,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 43628406"
                    }
                },
                "LC": {
                    "value": 1469174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 1469174"
                    }
                },
                "SV": {
                    "value": 17476996,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 17476996"
                    }
                },
                "WS": {
                    "value": 43012369,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 43012369"
                    }
                },
                "ST": {
                    "value": 32594580,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 32594580"
                    }
                },
                "SN": {
                    "value": 45450925,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 45450925"
                    }
                },
                "RS": {
                    "value": 53181549,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 53181549"
                    }
                },
                "SC": {
                    "value": 127420,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 127420"
                    }
                },
                "SL": {
                    "value": 34078919,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 34078919"
                    }
                },
                "SG": {
                    "value": 16312558,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 16312558"
                    }
                },
                "SK": {
                    "value": 25593329,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 25593329"
                    }
                },
                "SI": {
                    "value": 6730166,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 6730166"
                    }
                },
                "SO": {
                    "value": 38722046,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 38722046"
                    }
                },
                "SD": {
                    "value": 31982199,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 31982199"
                    }
                },
                "SS": {
                    "value": 30177960,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 30177960"
                    }
                },
                "LK": {
                    "value": 45973734,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 45973734"
                    }
                },
                "SE": {
                    "value": 7214587,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 7214587"
                    }
                },
                "CH": {
                    "value": 737973,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 737973"
                    }
                },
                "SR": {
                    "value": 12651068,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 12651068"
                    }
                },
                "SZ": {
                    "value": 11161245,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 11161245"
                    }
                },
                "SY": {
                    "value": 49997168,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 49997168"
                    }
                },
                "TJ": {
                    "value": 40508005,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 40508005"
                    }
                },
                "TZ": {
                    "value": 8578277,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 8578277"
                    }
                },
                "TD": {
                    "value": 5245828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 5245828"
                    }
                },
                "CZ": {
                    "value": 7960412,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 7960412"
                    }
                },
                "TH": {
                    "value": 59570420,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 59570420"
                    }
                },
                "TL": {
                    "value": 23575214,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 23575214"
                    }
                },
                "TG": {
                    "value": 41330606,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 41330606"
                    }
                },
                "TO": {
                    "value": 51444947,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 51444947"
                    }
                },
                "TT": {
                    "value": 56053342,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 56053342"
                    }
                },
                "TN": {
                    "value": 33307501,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 33307501"
                    }
                },
                "TM": {
                    "value": 42668704,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 42668704"
                    }
                },
                "TR": {
                    "value": 21341394,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 21341394"
                    }
                },
                "TV": {
                    "value": 58034897,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 58034897"
                    }
                },
                "VU": {
                    "value": 43390766,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 43390766"
                    }
                },
                "VE": {
                    "value": 22363248,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 22363248"
                    }
                },
                "VN": {
                    "value": 28090381,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 28090381"
                    }
                },
                "UA": {
                    "value": 3743209,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 3743209"
                    }
                },
                "UY": {
                    "value": 29490631,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 29490631"
                    }
                },
                "YE": {
                    "value": 23467361,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 23467361"
                    }
                },
                "ZM": {
                    "value": 32382532,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 32382532"
                    }
                },
                "ZW": {
                    "value": 41056406,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 41056406"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1432752,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1432752"
                    }
                },
                "newyork": {
                    "value": 1478595,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 1478595"
                    }
                },
                "sydney": {
                    "value": 678662,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 678662"
                    }
                },
                "brasilia": {
                    "value": 1226606,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1226606"
                    }
                },
                "tokyo": {
                    "value": 1080530,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1080530"
                    }
                }
            }
        },
        "2009": {
            "areas": {
                "AF": {
                    "value": 52466800,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 52466800"
                    }
                },
                "ZA": {
                    "value": 26108826,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 26108826"
                    }
                },
                "AL": {
                    "value": 53559946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 53559946"
                    }
                },
                "DZ": {
                    "value": 49796088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 49796088"
                    }
                },
                "DE": {
                    "value": 16718374,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 16718374"
                    }
                },
                "AD": {
                    "value": 26774219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 26774219"
                    }
                },
                "AO": {
                    "value": 54956540,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 54956540"
                    }
                },
                "AG": {
                    "value": 56018610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 56018610"
                    }
                },
                "SA": {
                    "value": 54792020,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 54792020"
                    }
                },
                "AR": {
                    "value": 47445276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 47445276"
                    }
                },
                "AM": {
                    "value": 20670517,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 20670517"
                    }
                },
                "AU": {
                    "value": 6435858,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 6435858"
                    }
                },
                "AT": {
                    "value": 59990860,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 59990860"
                    }
                },
                "AZ": {
                    "value": 18862622,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 18862622"
                    }
                },
                "BS": {
                    "value": 8730001,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 8730001"
                    }
                },
                "BH": {
                    "value": 56413459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 56413459"
                    }
                },
                "BD": {
                    "value": 15468020,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 15468020"
                    }
                },
                "BB": {
                    "value": 21516882,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 21516882"
                    }
                },
                "BE": {
                    "value": 47213120,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 47213120"
                    }
                },
                "BZ": {
                    "value": 31867035,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 31867035"
                    }
                },
                "BJ": {
                    "value": 54126627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 54126627"
                    }
                },
                "BT": {
                    "value": 46048682,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 46048682"
                    }
                },
                "BY": {
                    "value": 14447995,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 14447995"
                    }
                },
                "MM": {
                    "value": 28262213,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 28262213"
                    }
                },
                "BO": {
                    "value": 39319803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 39319803"
                    }
                },
                "BA": {
                    "value": 53148645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 53148645"
                    }
                },
                "BW": {
                    "value": 58312754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 58312754"
                    }
                },
                "BR": {
                    "value": 51214618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 51214618"
                    }
                },
                "BN": {
                    "value": 44050675,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 44050675"
                    }
                },
                "BG": {
                    "value": 33457398,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 33457398"
                    }
                },
                "BF": {
                    "value": 57135520,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 57135520"
                    }
                },
                "BI": {
                    "value": 16489874,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 16489874"
                    }
                },
                "KH": {
                    "value": 51472367,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 51472367"
                    }
                },
                "CM": {
                    "value": 7565564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 7565564"
                    }
                },
                "CA": {
                    "value": 38994418,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 38994418"
                    }
                },
                "CV": {
                    "value": 49503608,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 49503608"
                    }
                },
                "CF": {
                    "value": 14788003,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 14788003"
                    }
                },
                "CL": {
                    "value": 26013769,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 26013769"
                    }
                },
                "CN": {
                    "value": 2017575,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 2017575"
                    }
                },
                "CY": {
                    "value": 6121441,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 6121441"
                    }
                },
                "CO": {
                    "value": 36950711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 36950711"
                    }
                },
                "KM": {
                    "value": 49492639,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 49492639"
                    }
                },
                "CG": {
                    "value": 34183115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 34183115"
                    }
                },
                "CD": {
                    "value": 11759002,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 11759002"
                    }
                },
                "KP": {
                    "value": 11263614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 11263614"
                    }
                },
                "KR": {
                    "value": 8742797,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 8742797"
                    }
                },
                "CR": {
                    "value": 13819162,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 13819162"
                    }
                },
                "CI": {
                    "value": 42081915,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 42081915"
                    }
                },
                "HR": {
                    "value": 40679837,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 40679837"
                    }
                },
                "CU": {
                    "value": 44154871,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 44154871"
                    }
                },
                "DK": {
                    "value": 28903842,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 28903842"
                    }
                },
                "DJ": {
                    "value": 42805805,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 42805805"
                    }
                },
                "DM": {
                    "value": 18502505,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 18502505"
                    }
                },
                "EG": {
                    "value": 26569482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 26569482"
                    }
                },
                "AE": {
                    "value": 17665280,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 17665280"
                    }
                },
                "EC": {
                    "value": 49496295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 49496295"
                    }
                },
                "ER": {
                    "value": 47684745,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 47684745"
                    }
                },
                "ES": {
                    "value": 36477258,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 36477258"
                    }
                },
                "EE": {
                    "value": 8181601,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 8181601"
                    }
                },
                "US": {
                    "value": 7869012,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 7869012"
                    }
                },
                "ET": {
                    "value": 21529678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 21529678"
                    }
                },
                "FJ": {
                    "value": 4618823,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 4618823"
                    }
                },
                "FI": {
                    "value": 58480930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 58480930"
                    }
                },
                "FR": {
                    "value": 13389581,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 13389581"
                    }
                },
                "GA": {
                    "value": 42990433,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 42990433"
                    }
                },
                "GM": {
                    "value": 11484802,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 11484802"
                    }
                },
                "GE": {
                    "value": 16941391,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 16941391"
                    }
                },
                "GH": {
                    "value": 11773626,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 11773626"
                    }
                },
                "GR": {
                    "value": 5370132,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 5370132"
                    }
                },
                "GD": {
                    "value": 47715821,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 47715821"
                    }
                },
                "GT": {
                    "value": 1491110,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 1491110"
                    }
                },
                "GN": {
                    "value": 38586774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 38586774"
                    }
                },
                "GQ": {
                    "value": 11621902,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 11621902"
                    }
                },
                "GW": {
                    "value": 14102502,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 14102502"
                    }
                },
                "GY": {
                    "value": 40208212,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 40208212"
                    }
                },
                "HT": {
                    "value": 39544647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 39544647"
                    }
                },
                "HN": {
                    "value": 14948868,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 14948868"
                    }
                },
                "HU": {
                    "value": 21085473,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 21085473"
                    }
                },
                "JM": {
                    "value": 11420822,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 11420822"
                    }
                },
                "JP": {
                    "value": 50212873,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 50212873"
                    }
                },
                "MH": {
                    "value": 58404154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 58404154"
                    }
                },
                "PW": {
                    "value": 29355359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 29355359"
                    }
                },
                "SB": {
                    "value": 3107064,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 3107064"
                    }
                },
                "IN": {
                    "value": 16307074,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 16307074"
                    }
                },
                "ID": {
                    "value": 35290884,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 35290884"
                    }
                },
                "JO": {
                    "value": 29552783,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 29552783"
                    }
                },
                "IR": {
                    "value": 13395065,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 13395065"
                    }
                },
                "IQ": {
                    "value": 33292877,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 33292877"
                    }
                },
                "IE": {
                    "value": 48562186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 48562186"
                    }
                },
                "IS": {
                    "value": 42268372,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 42268372"
                    }
                },
                "IL": {
                    "value": 10462948,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 10462948"
                    }
                },
                "IT": {
                    "value": 46885907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 46885907"
                    }
                },
                "KZ": {
                    "value": 51421183,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 51421183"
                    }
                },
                "KE": {
                    "value": 58142749,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 58142749"
                    }
                },
                "KG": {
                    "value": 52338840,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 52338840"
                    }
                },
                "KI": {
                    "value": 32751788,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 32751788"
                    }
                },
                "KW": {
                    "value": 27020999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 27020999"
                    }
                },
                "LA": {
                    "value": 37866541,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 37866541"
                    }
                },
                "LS": {
                    "value": 47300864,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 47300864"
                    }
                },
                "LV": {
                    "value": 56406147,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 56406147"
                    }
                },
                "LB": {
                    "value": 48364762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 48364762"
                    }
                },
                "LR": {
                    "value": 31980371,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 31980371"
                    }
                },
                "LY": {
                    "value": 53377146,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 53377146"
                    }
                },
                "LI": {
                    "value": 33614606,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 33614606"
                    }
                },
                "LT": {
                    "value": 38705594,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 38705594"
                    }
                },
                "LU": {
                    "value": 1174865,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 1174865"
                    }
                },
                "MK": {
                    "value": 38745810,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 38745810"
                    }
                },
                "MG": {
                    "value": 29892792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 29892792"
                    }
                },
                "MY": {
                    "value": 11146621,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 11146621"
                    }
                },
                "MW": {
                    "value": 55890650,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 55890650"
                    }
                },
                "MV": {
                    "value": 1534982,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 1534982"
                    }
                },
                "ML": {
                    "value": 20906329,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 20906329"
                    }
                },
                "MT": {
                    "value": 8740969,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 8740969"
                    }
                },
                "MA": {
                    "value": 37018347,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 37018347"
                    }
                },
                "MU": {
                    "value": 29722787,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 29722787"
                    }
                },
                "MR": {
                    "value": 12270843,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 12270843"
                    }
                },
                "MX": {
                    "value": 44591764,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 44591764"
                    }
                },
                "FM": {
                    "value": 54998584,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 54998584"
                    }
                },
                "MD": {
                    "value": 1637350,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 1637350"
                    }
                },
                "MC": {
                    "value": 39551959,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 39551959"
                    }
                },
                "MN": {
                    "value": 41952127,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 41952127"
                    }
                },
                "ME": {
                    "value": 10621985,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 10621985"
                    }
                },
                "MZ": {
                    "value": 5256796,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 5256796"
                    }
                },
                "NA": {
                    "value": 48465302,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 48465302"
                    }
                },
                "NP": {
                    "value": 13925186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 13925186"
                    }
                },
                "NI": {
                    "value": 14329175,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 14329175"
                    }
                },
                "NE": {
                    "value": 38709250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 38709250"
                    }
                },
                "NG": {
                    "value": 14676495,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 14676495"
                    }
                },
                "NO": {
                    "value": 3564065,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 3564065"
                    }
                },
                "NZ": {
                    "value": 26810779,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 26810779"
                    }
                },
                "OM": {
                    "value": 10272836,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 10272836"
                    }
                },
                "UG": {
                    "value": 3701165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 3701165"
                    }
                },
                "UZ": {
                    "value": 23971890,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 23971890"
                    }
                },
                "PK": {
                    "value": 38707422,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 38707422"
                    }
                },
                "PS": {
                    "value": 37875681,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 37875681"
                    }
                },
                "PA": {
                    "value": 51104938,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 51104938"
                    }
                },
                "PG": {
                    "value": 58301786,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 58301786"
                    }
                },
                "PY": {
                    "value": 10709729,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 10709729"
                    }
                },
                "NL": {
                    "value": 29795908,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 29795908"
                    }
                },
                "PE": {
                    "value": 42703436,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 42703436"
                    }
                },
                "PH": {
                    "value": 59756876,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 59756876"
                    }
                },
                "PL": {
                    "value": 53258326,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 53258326"
                    }
                },
                "PT": {
                    "value": 44061643,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 44061643"
                    }
                },
                "QA": {
                    "value": 14062286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 14062286"
                    }
                },
                "DO": {
                    "value": 11490286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 11490286"
                    }
                },
                "RO": {
                    "value": 7243835,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 7243835"
                    }
                },
                "GB": {
                    "value": 48851010,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 48851010"
                    }
                },
                "RU": {
                    "value": 30697113,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 30697113"
                    }
                },
                "RW": {
                    "value": 46405142,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 46405142"
                    }
                },
                "KN": {
                    "value": 43006885,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 43006885"
                    }
                },
                "SM": {
                    "value": 42292136,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 42292136"
                    }
                },
                "VC": {
                    "value": 8373541,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 8373541"
                    }
                },
                "LC": {
                    "value": 27854568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 27854568"
                    }
                },
                "SV": {
                    "value": 1438098,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 1438098"
                    }
                },
                "WS": {
                    "value": 52463144,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 52463144"
                    }
                },
                "ST": {
                    "value": 12607196,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 12607196"
                    }
                },
                "SN": {
                    "value": 28841690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 28841690"
                    }
                },
                "RS": {
                    "value": 52878101,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 52878101"
                    }
                },
                "SC": {
                    "value": 17592160,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 17592160"
                    }
                },
                "SL": {
                    "value": 19063702,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 19063702"
                    }
                },
                "SG": {
                    "value": 32519632,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 32519632"
                    }
                },
                "SK": {
                    "value": 38217517,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 38217517"
                    }
                },
                "SI": {
                    "value": 25657309,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 25657309"
                    }
                },
                "SO": {
                    "value": 33358685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 33358685"
                    }
                },
                "SD": {
                    "value": 51991520,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 51991520"
                    }
                },
                "SS": {
                    "value": 7996972,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 7996972"
                    }
                },
                "LK": {
                    "value": 14886715,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 14886715"
                    }
                },
                "SE": {
                    "value": 31157770,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 31157770"
                    }
                },
                "CH": {
                    "value": 10510476,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 10510476"
                    }
                },
                "SR": {
                    "value": 42707092,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 42707092"
                    }
                },
                "SZ": {
                    "value": 13358505,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 13358505"
                    }
                },
                "SY": {
                    "value": 18076581,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 18076581"
                    }
                },
                "TJ": {
                    "value": 40979630,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 40979630"
                    }
                },
                "TZ": {
                    "value": 13188501,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 13188501"
                    }
                },
                "TD": {
                    "value": 19200802,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 19200802"
                    }
                },
                "CZ": {
                    "value": 29680743,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 29680743"
                    }
                },
                "TH": {
                    "value": 6752102,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 6752102"
                    }
                },
                "TL": {
                    "value": 59831824,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 59831824"
                    }
                },
                "TG": {
                    "value": 591732,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 591732"
                    }
                },
                "TO": {
                    "value": 11685882,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 11685882"
                    }
                },
                "TT": {
                    "value": 40731021,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 40731021"
                    }
                },
                "TN": {
                    "value": 53477686,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 53477686"
                    }
                },
                "TM": {
                    "value": 15559421,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 15559421"
                    }
                },
                "TR": {
                    "value": 59557624,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 59557624"
                    }
                },
                "TV": {
                    "value": 6269509,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 6269509"
                    }
                },
                "VU": {
                    "value": 14716711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 14716711"
                    }
                },
                "VE": {
                    "value": 32281992,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 32281992"
                    }
                },
                "VN": {
                    "value": 59111591,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 59111591"
                    }
                },
                "UA": {
                    "value": 36270694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 36270694"
                    }
                },
                "UY": {
                    "value": 53989527,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 53989527"
                    }
                },
                "YE": {
                    "value": 48887571,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 48887571"
                    }
                },
                "ZM": {
                    "value": 45913410,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 45913410"
                    }
                },
                "ZW": {
                    "value": 53987699,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 53987699"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 382495,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 382495"
                    }
                },
                "newyork": {
                    "value": 881903,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 881903"
                    }
                },
                "sydney": {
                    "value": 695496,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 695496"
                    }
                },
                "brasilia": {
                    "value": 392706,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 392706"
                    }
                },
                "tokyo": {
                    "value": 1491797,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1491797"
                    }
                }
            }
        },
        "2010": {
            "areas": {
                "AF": {
                    "value": 44310251,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 44310251"
                    }
                },
                "ZA": {
                    "value": 33673102,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 33673102"
                    }
                },
                "AL": {
                    "value": 15131668,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 15131668"
                    }
                },
                "DZ": {
                    "value": 37266956,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 37266956"
                    }
                },
                "DE": {
                    "value": 49333603,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 49333603"
                    }
                },
                "AD": {
                    "value": 15912225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 15912225"
                    }
                },
                "AO": {
                    "value": 14714883,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 14714883"
                    }
                },
                "AG": {
                    "value": 55481177,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 55481177"
                    }
                },
                "SA": {
                    "value": 46752463,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 46752463"
                    }
                },
                "AR": {
                    "value": 7861700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 7861700"
                    }
                },
                "AM": {
                    "value": 54426419,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 54426419"
                    }
                },
                "AU": {
                    "value": 15082312,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 15082312"
                    }
                },
                "AT": {
                    "value": 4744955,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 4744955"
                    }
                },
                "AZ": {
                    "value": 15137152,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 15137152"
                    }
                },
                "BS": {
                    "value": 27569400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 27569400"
                    }
                },
                "BH": {
                    "value": 26510986,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 26510986"
                    }
                },
                "BD": {
                    "value": 41239206,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 41239206"
                    }
                },
                "BB": {
                    "value": 13404205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 13404205"
                    }
                },
                "BE": {
                    "value": 37096951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 37096951"
                    }
                },
                "BZ": {
                    "value": 50457825,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 50457825"
                    }
                },
                "BJ": {
                    "value": 4613339,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 4613339"
                    }
                },
                "BT": {
                    "value": 8278485,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 8278485"
                    }
                },
                "BY": {
                    "value": 36212198,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 36212198"
                    }
                },
                "MM": {
                    "value": 17663452,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 17663452"
                    }
                },
                "BO": {
                    "value": 12795480,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 12795480"
                    }
                },
                "BA": {
                    "value": 35325617,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 35325617"
                    }
                },
                "BW": {
                    "value": 8068264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 8068264"
                    }
                },
                "BR": {
                    "value": 8618493,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 8618493"
                    }
                },
                "BN": {
                    "value": 33963754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 33963754"
                    }
                },
                "BG": {
                    "value": 40261225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 40261225"
                    }
                },
                "BF": {
                    "value": 25668277,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 25668277"
                    }
                },
                "BI": {
                    "value": 13963574,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 13963574"
                    }
                },
                "KH": {
                    "value": 6346286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 6346286"
                    }
                },
                "CM": {
                    "value": 58650934,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 58650934"
                    }
                },
                "CA": {
                    "value": 12265359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 12265359"
                    }
                },
                "CV": {
                    "value": 54289319,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 54289319"
                    }
                },
                "CF": {
                    "value": 17921200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 17921200"
                    }
                },
                "CL": {
                    "value": 36210370,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 36210370"
                    }
                },
                "CN": {
                    "value": 40862638,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 40862638"
                    }
                },
                "CY": {
                    "value": 436352,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 436352"
                    }
                },
                "CO": {
                    "value": 6916623,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 6916623"
                    }
                },
                "KM": {
                    "value": 8505157,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 8505157"
                    }
                },
                "CG": {
                    "value": 34713236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 34713236"
                    }
                },
                "CD": {
                    "value": 52695301,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 52695301"
                    }
                },
                "KP": {
                    "value": 1410678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 1410678"
                    }
                },
                "KR": {
                    "value": 41050922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 41050922"
                    }
                },
                "CR": {
                    "value": 6920279,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 6920279"
                    }
                },
                "CI": {
                    "value": 22006787,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 22006787"
                    }
                },
                "HR": {
                    "value": 59431492,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 59431492"
                    }
                },
                "CU": {
                    "value": 49613288,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 49613288"
                    }
                },
                "DK": {
                    "value": 536892,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 536892"
                    }
                },
                "DJ": {
                    "value": 48761438,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 48761438"
                    }
                },
                "DM": {
                    "value": 29357187,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 29357187"
                    }
                },
                "EG": {
                    "value": 39807880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 39807880"
                    }
                },
                "AE": {
                    "value": 28666202,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 28666202"
                    }
                },
                "EC": {
                    "value": 3799877,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 3799877"
                    }
                },
                "ER": {
                    "value": 29115890,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 29115890"
                    }
                },
                "ES": {
                    "value": 47200324,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 47200324"
                    }
                },
                "EE": {
                    "value": 14561331,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 14561331"
                    }
                },
                "US": {
                    "value": 27512732,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 27512732"
                    }
                },
                "ET": {
                    "value": 26885727,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 26885727"
                    }
                },
                "FJ": {
                    "value": 17506244,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 17506244"
                    }
                },
                "FI": {
                    "value": 31225406,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 31225406"
                    }
                },
                "FR": {
                    "value": 50640625,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 50640625"
                    }
                },
                "GA": {
                    "value": 20794821,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 20794821"
                    }
                },
                "GM": {
                    "value": 46191266,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 46191266"
                    }
                },
                "GE": {
                    "value": 1911550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 1911550"
                    }
                },
                "GH": {
                    "value": 33874182,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 33874182"
                    }
                },
                "GR": {
                    "value": 38921298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 38921298"
                    }
                },
                "GD": {
                    "value": 19071014,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 19071014"
                    }
                },
                "GT": {
                    "value": 59522892,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 59522892"
                    }
                },
                "GN": {
                    "value": 27754028,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 27754028"
                    }
                },
                "GQ": {
                    "value": 19493283,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 19493283"
                    }
                },
                "GW": {
                    "value": 31611115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 31611115"
                    }
                },
                "GY": {
                    "value": 7512552,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 7512552"
                    }
                },
                "HT": {
                    "value": 52870789,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 52870789"
                    }
                },
                "HN": {
                    "value": 50488901,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 50488901"
                    }
                },
                "HU": {
                    "value": 29527191,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 29527191"
                    }
                },
                "JM": {
                    "value": 38683658,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 38683658"
                    }
                },
                "JP": {
                    "value": 39965088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 39965088"
                    }
                },
                "MH": {
                    "value": 10236276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 10236276"
                    }
                },
                "PW": {
                    "value": 48384870,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 48384870"
                    }
                },
                "SB": {
                    "value": 16389334,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 16389334"
                    }
                },
                "IN": {
                    "value": 9627551,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 9627551"
                    }
                },
                "ID": {
                    "value": 46613535,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 46613535"
                    }
                },
                "JO": {
                    "value": 33899774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 33899774"
                    }
                },
                "IR": {
                    "value": 13632705,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 13632705"
                    }
                },
                "IQ": {
                    "value": 12398803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 12398803"
                    }
                },
                "IE": {
                    "value": 37948801,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 37948801"
                    }
                },
                "IS": {
                    "value": 21637530,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 21637530"
                    }
                },
                "IL": {
                    "value": 13566897,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 13566897"
                    }
                },
                "IT": {
                    "value": 8969470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 8969470"
                    }
                },
                "KZ": {
                    "value": 12320199,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 12320199"
                    }
                },
                "KE": {
                    "value": 17213763,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 17213763"
                    }
                },
                "KG": {
                    "value": 29295035,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 29295035"
                    }
                },
                "KI": {
                    "value": 49880176,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 49880176"
                    }
                },
                "KW": {
                    "value": 27755856,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 27755856"
                    }
                },
                "LA": {
                    "value": 56194098,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 56194098"
                    }
                },
                "LS": {
                    "value": 43970243,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 43970243"
                    }
                },
                "LV": {
                    "value": 35921546,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 35921546"
                    }
                },
                "LB": {
                    "value": 52433896,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 52433896"
                    }
                },
                "LR": {
                    "value": 24394159,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 24394159"
                    }
                },
                "LY": {
                    "value": 10795645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 10795645"
                    }
                },
                "LI": {
                    "value": 17634204,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 17634204"
                    }
                },
                "LT": {
                    "value": 24582443,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 24582443"
                    }
                },
                "LU": {
                    "value": 17279571,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 17279571"
                    }
                },
                "MK": {
                    "value": 32724368,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 32724368"
                    }
                },
                "MG": {
                    "value": 15608777,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 15608777"
                    }
                },
                "MY": {
                    "value": 32179623,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 32179623"
                    }
                },
                "MW": {
                    "value": 40465961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 40465961"
                    }
                },
                "MV": {
                    "value": 3059536,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 3059536"
                    }
                },
                "ML": {
                    "value": 20485889,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 20485889"
                    }
                },
                "MT": {
                    "value": 13453561,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 13453561"
                    }
                },
                "MA": {
                    "value": 9718951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 9718951"
                    }
                },
                "MU": {
                    "value": 24754275,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 24754275"
                    }
                },
                "MR": {
                    "value": 52856165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 52856165"
                    }
                },
                "MX": {
                    "value": 56382383,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 56382383"
                    }
                },
                "FM": {
                    "value": 50454169,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 50454169"
                    }
                },
                "MD": {
                    "value": 51011710,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 51011710"
                    }
                },
                "MC": {
                    "value": 43460230,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 43460230"
                    }
                },
                "MN": {
                    "value": 39294211,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 39294211"
                    }
                },
                "ME": {
                    "value": 18537237,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 18537237"
                    }
                },
                "MZ": {
                    "value": 5084964,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 5084964"
                    }
                },
                "NA": {
                    "value": 12888708,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 12888708"
                    }
                },
                "NP": {
                    "value": 50167173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 50167173"
                    }
                },
                "NI": {
                    "value": 39383783,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 39383783"
                    }
                },
                "NE": {
                    "value": 19877164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 19877164"
                    }
                },
                "NG": {
                    "value": 11682226,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 11682226"
                    }
                },
                "NO": {
                    "value": 27229391,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 27229391"
                    }
                },
                "NZ": {
                    "value": 28759430,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 28759430"
                    }
                },
                "OM": {
                    "value": 18641434,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 18641434"
                    }
                },
                "UG": {
                    "value": 531408,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 531408"
                    }
                },
                "UZ": {
                    "value": 58458994,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 58458994"
                    }
                },
                "PK": {
                    "value": 52179804,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 52179804"
                    }
                },
                "PS": {
                    "value": 14480899,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 14480899"
                    }
                },
                "PA": {
                    "value": 29976880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 29976880"
                    }
                },
                "PG": {
                    "value": 22184103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 22184103"
                    }
                },
                "PY": {
                    "value": 25410528,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 25410528"
                    }
                },
                "NL": {
                    "value": 50448685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 50448685"
                    }
                },
                "PE": {
                    "value": 809265,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 809265"
                    }
                },
                "PH": {
                    "value": 6382846,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 6382846"
                    }
                },
                "PL": {
                    "value": 13967230,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 13967230"
                    }
                },
                "PT": {
                    "value": 19847915,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 19847915"
                    }
                },
                "QA": {
                    "value": 23469189,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 23469189"
                    }
                },
                "DO": {
                    "value": 9183346,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 9183346"
                    }
                },
                "RO": {
                    "value": 53415534,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 53415534"
                    }
                },
                "GB": {
                    "value": 25631717,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 25631717"
                    }
                },
                "RU": {
                    "value": 58647278,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 58647278"
                    }
                },
                "RW": {
                    "value": 58663730,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 58663730"
                    }
                },
                "KN": {
                    "value": 29571063,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 29571063"
                    }
                },
                "SM": {
                    "value": 21003213,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 21003213"
                    }
                },
                "VC": {
                    "value": 37084155,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 37084155"
                    }
                },
                "LC": {
                    "value": 33152121,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 33152121"
                    }
                },
                "SV": {
                    "value": 37899445,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 37899445"
                    }
                },
                "WS": {
                    "value": 49015531,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 49015531"
                    }
                },
                "ST": {
                    "value": 39270447,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 39270447"
                    }
                },
                "SN": {
                    "value": 20626645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 20626645"
                    }
                },
                "RS": {
                    "value": 24116302,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 24116302"
                    }
                },
                "SC": {
                    "value": 2971792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 2971792"
                    }
                },
                "SL": {
                    "value": 55846778,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 55846778"
                    }
                },
                "SG": {
                    "value": 19215426,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 19215426"
                    }
                },
                "SK": {
                    "value": 23787262,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 23787262"
                    }
                },
                "SI": {
                    "value": 45725125,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 45725125"
                    }
                },
                "SO": {
                    "value": 47503772,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 47503772"
                    }
                },
                "SD": {
                    "value": 56996592,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 56996592"
                    }
                },
                "SS": {
                    "value": 42527948,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 42527948"
                    }
                },
                "LK": {
                    "value": 10678653,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 10678653"
                    }
                },
                "SE": {
                    "value": 4882055,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 4882055"
                    }
                },
                "CH": {
                    "value": 12298263,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 12298263"
                    }
                },
                "SR": {
                    "value": 56003986,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 56003986"
                    }
                },
                "SZ": {
                    "value": 785501,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 785501"
                    }
                },
                "SY": {
                    "value": 8472253,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 8472253"
                    }
                },
                "TJ": {
                    "value": 32998569,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 32998569"
                    }
                },
                "TZ": {
                    "value": 9930999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 9930999"
                    }
                },
                "TD": {
                    "value": 29148795,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 29148795"
                    }
                },
                "CZ": {
                    "value": 48914991,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 48914991"
                    }
                },
                "TH": {
                    "value": 57325632,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 57325632"
                    }
                },
                "TL": {
                    "value": 59674616,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 59674616"
                    }
                },
                "TG": {
                    "value": 19021658,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 19021658"
                    }
                },
                "TO": {
                    "value": 27000891,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 27000891"
                    }
                },
                "TT": {
                    "value": 53457578,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 53457578"
                    }
                },
                "TN": {
                    "value": 31150458,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 31150458"
                    }
                },
                "TM": {
                    "value": 43407218,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 43407218"
                    }
                },
                "TR": {
                    "value": 53170581,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 53170581"
                    }
                },
                "TV": {
                    "value": 19522531,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 19522531"
                    }
                },
                "VU": {
                    "value": 19824151,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 19824151"
                    }
                },
                "VE": {
                    "value": 25558597,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 25558597"
                    }
                },
                "VN": {
                    "value": 28214685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 28214685"
                    }
                },
                "UA": {
                    "value": 43498618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 43498618"
                    }
                },
                "UY": {
                    "value": 31311322,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 31311322"
                    }
                },
                "YE": {
                    "value": 38478922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 38478922"
                    }
                },
                "ZM": {
                    "value": 2673828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 2673828"
                    }
                },
                "ZW": {
                    "value": 3713961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 3713961"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1062415,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1062415"
                    }
                },
                "newyork": {
                    "value": 224371,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 224371"
                    }
                },
                "sydney": {
                    "value": 1430787,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 1430787"
                    }
                },
                "brasilia": {
                    "value": 1220624,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1220624"
                    }
                },
                "tokyo": {
                    "value": 1391053,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1391053"
                    }
                }
            }
        },
        "2011": {
            "areas": {
                "AF": {
                    "value": 59288907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 59288907"
                    }
                },
                "ZA": {
                    "value": 2249731,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 2249731"
                    }
                },
                "AL": {
                    "value": 54824924,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 54824924"
                    }
                },
                "DZ": {
                    "value": 49159943,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 49159943"
                    }
                },
                "DE": {
                    "value": 3534817,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 3534817"
                    }
                },
                "AD": {
                    "value": 38597742,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 38597742"
                    }
                },
                "AO": {
                    "value": 52126792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 52126792"
                    }
                },
                "AG": {
                    "value": 28357269,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 28357269"
                    }
                },
                "SA": {
                    "value": 30962173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 30962173"
                    }
                },
                "AR": {
                    "value": 36923291,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 36923291"
                    }
                },
                "AM": {
                    "value": 38080417,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 38080417"
                    }
                },
                "AU": {
                    "value": 28496197,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 28496197"
                    }
                },
                "AT": {
                    "value": 4924099,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 4924099"
                    }
                },
                "AZ": {
                    "value": 17817004,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 17817004"
                    }
                },
                "BS": {
                    "value": 40763925,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 40763925"
                    }
                },
                "BH": {
                    "value": 55192353,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 55192353"
                    }
                },
                "BD": {
                    "value": 58323722,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 58323722"
                    }
                },
                "BB": {
                    "value": 31819507,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 31819507"
                    }
                },
                "BE": {
                    "value": 58305442,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 58305442"
                    }
                },
                "BZ": {
                    "value": 24211359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 24211359"
                    }
                },
                "BJ": {
                    "value": 54514164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 54514164"
                    }
                },
                "BT": {
                    "value": 39621423,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 39621423"
                    }
                },
                "BY": {
                    "value": 58883091,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 58883091"
                    }
                },
                "MM": {
                    "value": 1068841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 1068841"
                    }
                },
                "BO": {
                    "value": 6598550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 6598550"
                    }
                },
                "BA": {
                    "value": 31863379,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 31863379"
                    }
                },
                "BW": {
                    "value": 40624997,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 40624997"
                    }
                },
                "BR": {
                    "value": 21330426,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 21330426"
                    }
                },
                "BN": {
                    "value": 17530008,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 17530008"
                    }
                },
                "BG": {
                    "value": 29135999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 29135999"
                    }
                },
                "BF": {
                    "value": 31609287,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 31609287"
                    }
                },
                "BI": {
                    "value": 30711737,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 30711737"
                    }
                },
                "KH": {
                    "value": 40511661,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 40511661"
                    }
                },
                "CM": {
                    "value": 22079907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 22079907"
                    }
                },
                "CA": {
                    "value": 29964084,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 29964084"
                    }
                },
                "CV": {
                    "value": 4878399,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 4878399"
                    }
                },
                "CF": {
                    "value": 58696634,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 58696634"
                    }
                },
                "CL": {
                    "value": 31285730,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 31285730"
                    }
                },
                "CN": {
                    "value": 3867514,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 3867514"
                    }
                },
                "CY": {
                    "value": 9346038,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 9346038"
                    }
                },
                "CO": {
                    "value": 25288052,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 25288052"
                    }
                },
                "KM": {
                    "value": 47394092,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 47394092"
                    }
                },
                "CG": {
                    "value": 11347702,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 11347702"
                    }
                },
                "CD": {
                    "value": 19780279,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 19780279"
                    }
                },
                "KP": {
                    "value": 43239041,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 43239041"
                    }
                },
                "KR": {
                    "value": 31095618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 31095618"
                    }
                },
                "CR": {
                    "value": 20582773,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 20582773"
                    }
                },
                "CI": {
                    "value": 41796747,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 41796747"
                    }
                },
                "HR": {
                    "value": 5852725,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 5852725"
                    }
                },
                "CU": {
                    "value": 32930933,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 32930933"
                    }
                },
                "DK": {
                    "value": 29700851,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 29700851"
                    }
                },
                "DJ": {
                    "value": 51061066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 51061066"
                    }
                },
                "DM": {
                    "value": 16082229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 16082229"
                    }
                },
                "EG": {
                    "value": 13590661,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 13590661"
                    }
                },
                "AE": {
                    "value": 6880062,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 6880062"
                    }
                },
                "EC": {
                    "value": 53188861,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 53188861"
                    }
                },
                "ER": {
                    "value": 27130679,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 27130679"
                    }
                },
                "ES": {
                    "value": 23615430,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 23615430"
                    }
                },
                "EE": {
                    "value": 10148532,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 10148532"
                    }
                },
                "US": {
                    "value": 23845758,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 23845758"
                    }
                },
                "ET": {
                    "value": 22151199,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 22151199"
                    }
                },
                "FJ": {
                    "value": 23695862,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 23695862"
                    }
                },
                "FI": {
                    "value": 7684384,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 7684384"
                    }
                },
                "FR": {
                    "value": 28547382,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 28547382"
                    }
                },
                "GA": {
                    "value": 14246914,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 14246914"
                    }
                },
                "GM": {
                    "value": 4472583,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 4472583"
                    }
                },
                "GE": {
                    "value": 57515744,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 57515744"
                    }
                },
                "GH": {
                    "value": 42959357,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 42959357"
                    }
                },
                "GR": {
                    "value": 46470951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 46470951"
                    }
                },
                "GD": {
                    "value": 46436219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 46436219"
                    }
                },
                "GT": {
                    "value": 8020736,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 8020736"
                    }
                },
                "GN": {
                    "value": 12797308,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 12797308"
                    }
                },
                "GQ": {
                    "value": 12126431,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 12126431"
                    }
                },
                "GW": {
                    "value": 20427392,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 20427392"
                    }
                },
                "GY": {
                    "value": 37027487,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 37027487"
                    }
                },
                "HT": {
                    "value": 33526862,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 33526862"
                    }
                },
                "HN": {
                    "value": 14166482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 14166482"
                    }
                },
                "HU": {
                    "value": 6936731,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 6936731"
                    }
                },
                "JM": {
                    "value": 52814121,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 52814121"
                    }
                },
                "JP": {
                    "value": 50863642,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 50863642"
                    }
                },
                "MH": {
                    "value": 5794229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 5794229"
                    }
                },
                "PW": {
                    "value": 56504859,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 56504859"
                    }
                },
                "SB": {
                    "value": 53508762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 53508762"
                    }
                },
                "IN": {
                    "value": 40473273,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 40473273"
                    }
                },
                "ID": {
                    "value": 30062796,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 30062796"
                    }
                },
                "JO": {
                    "value": 10022400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 10022400"
                    }
                },
                "IR": {
                    "value": 7289535,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 7289535"
                    }
                },
                "IQ": {
                    "value": 7971380,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 7971380"
                    }
                },
                "IE": {
                    "value": 40175308,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 40175308"
                    }
                },
                "IS": {
                    "value": 37829981,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 37829981"
                    }
                },
                "IL": {
                    "value": 32084567,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 32084567"
                    }
                },
                "IT": {
                    "value": 48823590,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 48823590"
                    }
                },
                "KZ": {
                    "value": 19284891,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 19284891"
                    }
                },
                "KE": {
                    "value": 40718225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 40718225"
                    }
                },
                "KG": {
                    "value": 36171982,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 36171982"
                    }
                },
                "KI": {
                    "value": 48845526,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 48845526"
                    }
                },
                "KW": {
                    "value": 40394669,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 40394669"
                    }
                },
                "LA": {
                    "value": 9327758,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 9327758"
                    }
                },
                "LS": {
                    "value": 17679904,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 17679904"
                    }
                },
                "LV": {
                    "value": 43602814,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 43602814"
                    }
                },
                "LB": {
                    "value": 26757767,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 26757767"
                    }
                },
                "LR": {
                    "value": 24149206,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 24149206"
                    }
                },
                "LY": {
                    "value": 4686459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 4686459"
                    }
                },
                "LI": {
                    "value": 38711078,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 38711078"
                    }
                },
                "LT": {
                    "value": 51377311,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 51377311"
                    }
                },
                "LU": {
                    "value": 15923193,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 15923193"
                    }
                },
                "MK": {
                    "value": 55219773,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 55219773"
                    }
                },
                "MG": {
                    "value": 9835943,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 9835943"
                    }
                },
                "MY": {
                    "value": 37506424,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 37506424"
                    }
                },
                "MW": {
                    "value": 5240344,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 5240344"
                    }
                },
                "MV": {
                    "value": 17657968,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 17657968"
                    }
                },
                "ML": {
                    "value": 22493036,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 22493036"
                    }
                },
                "MT": {
                    "value": 58148234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 58148234"
                    }
                },
                "MA": {
                    "value": 42641284,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 42641284"
                    }
                },
                "MU": {
                    "value": 9929171,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 9929171"
                    }
                },
                "MR": {
                    "value": 52347980,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 52347980"
                    }
                },
                "MX": {
                    "value": 36555863,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 36555863"
                    }
                },
                "FM": {
                    "value": 28916638,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 28916638"
                    }
                },
                "MD": {
                    "value": 211508,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 211508"
                    }
                },
                "MC": {
                    "value": 45116400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 45116400"
                    }
                },
                "MN": {
                    "value": 45732437,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 45732437"
                    }
                },
                "ME": {
                    "value": 14607031,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 14607031"
                    }
                },
                "MZ": {
                    "value": 46533103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 46533103"
                    }
                },
                "NA": {
                    "value": 36363922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 36363922"
                    }
                },
                "NP": {
                    "value": 8931082,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 8931082"
                    }
                },
                "NI": {
                    "value": 20303088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 20303088"
                    }
                },
                "NE": {
                    "value": 57172080,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 57172080"
                    }
                },
                "NG": {
                    "value": 31706171,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 31706171"
                    }
                },
                "NO": {
                    "value": 59054923,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 59054923"
                    }
                },
                "NZ": {
                    "value": 36645435,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 36645435"
                    }
                },
                "OM": {
                    "value": 30256564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 30256564"
                    }
                },
                "UG": {
                    "value": 6808770,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 6808770"
                    }
                },
                "UZ": {
                    "value": 59457084,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 59457084"
                    }
                },
                "PK": {
                    "value": 24324695,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 24324695"
                    }
                },
                "PS": {
                    "value": 53764682,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 53764682"
                    }
                },
                "PA": {
                    "value": 27187347,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 27187347"
                    }
                },
                "PG": {
                    "value": 23240689,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 23240689"
                    }
                },
                "PY": {
                    "value": 33881494,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 33881494"
                    }
                },
                "NL": {
                    "value": 6024557,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 6024557"
                    }
                },
                "PE": {
                    "value": 8607525,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 8607525"
                    }
                },
                "PH": {
                    "value": 53358866,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 53358866"
                    }
                },
                "PL": {
                    "value": 26006457,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 26006457"
                    }
                },
                "PT": {
                    "value": 34914316,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 34914316"
                    }
                },
                "QA": {
                    "value": 16584930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 16584930"
                    }
                },
                "DO": {
                    "value": 43114737,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 43114737"
                    }
                },
                "RO": {
                    "value": 51240210,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 51240210"
                    }
                },
                "GB": {
                    "value": 18762082,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 18762082"
                    }
                },
                "RU": {
                    "value": 26785187,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 26785187"
                    }
                },
                "RW": {
                    "value": 35561429,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 35561429"
                    }
                },
                "KN": {
                    "value": 10373376,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 10373376"
                    }
                },
                "SM": {
                    "value": 45545981,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 45545981"
                    }
                },
                "VC": {
                    "value": 44823920,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 44823920"
                    }
                },
                "LC": {
                    "value": 43802066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 43802066"
                    }
                },
                "SV": {
                    "value": 13846582,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 13846582"
                    }
                },
                "WS": {
                    "value": 53494138,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 53494138"
                    }
                },
                "ST": {
                    "value": 46366754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 46366754"
                    }
                },
                "SN": {
                    "value": 50989774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 50989774"
                    }
                },
                "RS": {
                    "value": 22350452,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 22350452"
                    }
                },
                "SC": {
                    "value": 10784677,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 10784677"
                    }
                },
                "SL": {
                    "value": 37029315,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 37029315"
                    }
                },
                "SG": {
                    "value": 10327676,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 10327676"
                    }
                },
                "SK": {
                    "value": 26525610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 26525610"
                    }
                },
                "SI": {
                    "value": 35345725,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 35345725"
                    }
                },
                "SO": {
                    "value": 52377228,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 52377228"
                    }
                },
                "SD": {
                    "value": 24768899,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 24768899"
                    }
                },
                "SS": {
                    "value": 46962683,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 46962683"
                    }
                },
                "LK": {
                    "value": 35455405,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 35455405"
                    }
                },
                "SE": {
                    "value": 38126117,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 38126117"
                    }
                },
                "CH": {
                    "value": 47516568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 47516568"
                    }
                },
                "SR": {
                    "value": 14402295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 14402295"
                    }
                },
                "SZ": {
                    "value": 9241842,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 9241842"
                    }
                },
                "SY": {
                    "value": 29841608,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 29841608"
                    }
                },
                "TJ": {
                    "value": 1823806,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 1823806"
                    }
                },
                "TZ": {
                    "value": 9335070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 9335070"
                    }
                },
                "TD": {
                    "value": 44683164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 44683164"
                    }
                },
                "CZ": {
                    "value": 33139325,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 33139325"
                    }
                },
                "TH": {
                    "value": 20593741,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 20593741"
                    }
                },
                "TL": {
                    "value": 22401636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 22401636"
                    }
                },
                "TG": {
                    "value": 20107492,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 20107492"
                    }
                },
                "TO": {
                    "value": 23684894,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 23684894"
                    }
                },
                "TT": {
                    "value": 27079495,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 27079495"
                    }
                },
                "TN": {
                    "value": 14292614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 14292614"
                    }
                },
                "TM": {
                    "value": 23492953,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 23492953"
                    }
                },
                "TR": {
                    "value": 7093939,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 7093939"
                    }
                },
                "TV": {
                    "value": 34384195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 34384195"
                    }
                },
                "VU": {
                    "value": 35548633,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 35548633"
                    }
                },
                "VE": {
                    "value": 52967673,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 52967673"
                    }
                },
                "VN": {
                    "value": 18932086,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 18932086"
                    }
                },
                "UA": {
                    "value": 25660965,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 25660965"
                    }
                },
                "UY": {
                    "value": 46860315,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 46860315"
                    }
                },
                "YE": {
                    "value": 16809775,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 16809775"
                    }
                },
                "ZM": {
                    "value": 4914959,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 4914959"
                    }
                },
                "ZW": {
                    "value": 14012930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 14012930"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1006104,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1006104"
                    }
                },
                "newyork": {
                    "value": 867719,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 867719"
                    }
                },
                "sydney": {
                    "value": 111877,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 111877"
                    }
                },
                "brasilia": {
                    "value": 1090827,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1090827"
                    }
                },
                "tokyo": {
                    "value": 849390,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 849390"
                    }
                }
            }
        },
        "2012": {
            "areas": {
                "AF": {
                    "value": 9658627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 9658627"
                    }
                },
                "ZA": {
                    "value": 11627386,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 11627386"
                    }
                },
                "AL": {
                    "value": 4404946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 4404946"
                    }
                },
                "DZ": {
                    "value": 17385595,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 17385595"
                    }
                },
                "DE": {
                    "value": 4971627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 4971627"
                    }
                },
                "AD": {
                    "value": 13638189,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 13638189"
                    }
                },
                "AO": {
                    "value": 2701248,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 2701248"
                    }
                },
                "AG": {
                    "value": 15126184,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 15126184"
                    }
                },
                "SA": {
                    "value": 46964511,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 46964511"
                    }
                },
                "AR": {
                    "value": 12256219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 12256219"
                    }
                },
                "AM": {
                    "value": 50485245,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 50485245"
                    }
                },
                "AU": {
                    "value": 16025561,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 16025561"
                    }
                },
                "AT": {
                    "value": 13965402,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 13965402"
                    }
                },
                "AZ": {
                    "value": 43047101,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 43047101"
                    }
                },
                "BS": {
                    "value": 11110061,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 11110061"
                    }
                },
                "BH": {
                    "value": 40674353,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 40674353"
                    }
                },
                "BD": {
                    "value": 53852427,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 53852427"
                    }
                },
                "BB": {
                    "value": 51726459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 51726459"
                    }
                },
                "BE": {
                    "value": 17478824,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 17478824"
                    }
                },
                "BZ": {
                    "value": 19813183,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 19813183"
                    }
                },
                "BJ": {
                    "value": 44953708,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 44953708"
                    }
                },
                "BT": {
                    "value": 13959918,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 13959918"
                    }
                },
                "BY": {
                    "value": 52744657,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 52744657"
                    }
                },
                "MM": {
                    "value": 33932678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 33932678"
                    }
                },
                "BO": {
                    "value": 15347372,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 15347372"
                    }
                },
                "BA": {
                    "value": 55163105,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 55163105"
                    }
                },
                "BW": {
                    "value": 10210684,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 10210684"
                    }
                },
                "BR": {
                    "value": 13773462,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 13773462"
                    }
                },
                "BN": {
                    "value": 23061545,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 23061545"
                    }
                },
                "BG": {
                    "value": 31201642,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 31201642"
                    }
                },
                "BF": {
                    "value": 52730033,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 52730033"
                    }
                },
                "BI": {
                    "value": 39826160,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 39826160"
                    }
                },
                "KH": {
                    "value": 36274350,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 36274350"
                    }
                },
                "CM": {
                    "value": 7591156,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 7591156"
                    }
                },
                "CA": {
                    "value": 13705826,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 13705826"
                    }
                },
                "CV": {
                    "value": 42831397,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 42831397"
                    }
                },
                "CF": {
                    "value": 53113913,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 53113913"
                    }
                },
                "CL": {
                    "value": 19897272,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 19897272"
                    }
                },
                "CN": {
                    "value": 55991190,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 55991190"
                    }
                },
                "CY": {
                    "value": 43379798,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 43379798"
                    }
                },
                "CO": {
                    "value": 41758359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 41758359"
                    }
                },
                "KM": {
                    "value": 13835614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 13835614"
                    }
                },
                "CG": {
                    "value": 12989248,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 12989248"
                    }
                },
                "CD": {
                    "value": 32111987,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 32111987"
                    }
                },
                "KP": {
                    "value": 335812,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 335812"
                    }
                },
                "KR": {
                    "value": 24971808,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 24971808"
                    }
                },
                "CR": {
                    "value": 47553128,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 47553128"
                    }
                },
                "CI": {
                    "value": 29618591,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 29618591"
                    }
                },
                "HR": {
                    "value": 16824399,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 16824399"
                    }
                },
                "CU": {
                    "value": 58921479,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 58921479"
                    }
                },
                "DK": {
                    "value": 52985953,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 52985953"
                    }
                },
                "DJ": {
                    "value": 26540234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 26540234"
                    }
                },
                "DM": {
                    "value": 29452243,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 29452243"
                    }
                },
                "EG": {
                    "value": 31450250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 31450250"
                    }
                },
                "AE": {
                    "value": 12440847,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 12440847"
                    }
                },
                "EC": {
                    "value": 43467542,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 43467542"
                    }
                },
                "ER": {
                    "value": 6397470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 6397470"
                    }
                },
                "ES": {
                    "value": 8073748,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 8073748"
                    }
                },
                "EE": {
                    "value": 58820939,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 58820939"
                    }
                },
                "US": {
                    "value": 11141137,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 11141137"
                    }
                },
                "ET": {
                    "value": 5688205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 5688205"
                    }
                },
                "FJ": {
                    "value": 24357599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 24357599"
                    }
                },
                "FI": {
                    "value": 55479349,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 55479349"
                    }
                },
                "FR": {
                    "value": 10051648,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 10051648"
                    }
                },
                "GA": {
                    "value": 55402573,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 55402573"
                    }
                },
                "GM": {
                    "value": 26017425,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 26017425"
                    }
                },
                "GE": {
                    "value": 15519204,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 15519204"
                    }
                },
                "GH": {
                    "value": 30839697,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 30839697"
                    }
                },
                "GR": {
                    "value": 33868698,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 33868698"
                    }
                },
                "GD": {
                    "value": 48618854,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 48618854"
                    }
                },
                "GT": {
                    "value": 41893631,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 41893631"
                    }
                },
                "GN": {
                    "value": 34195911,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 34195911"
                    }
                },
                "GQ": {
                    "value": 29064706,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 29064706"
                    }
                },
                "GW": {
                    "value": 37877509,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 37877509"
                    }
                },
                "GY": {
                    "value": 27905753,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 27905753"
                    }
                },
                "HT": {
                    "value": 10760913,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 10760913"
                    }
                },
                "HN": {
                    "value": 39118723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 39118723"
                    }
                },
                "HU": {
                    "value": 29359015,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 29359015"
                    }
                },
                "JM": {
                    "value": 16608694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 16608694"
                    }
                },
                "JP": {
                    "value": 41025330,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 41025330"
                    }
                },
                "MH": {
                    "value": 32208871,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 32208871"
                    }
                },
                "PW": {
                    "value": 28678998,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 28678998"
                    }
                },
                "SB": {
                    "value": 21105582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 21105582"
                    }
                },
                "IN": {
                    "value": 55729786,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 55729786"
                    }
                },
                "ID": {
                    "value": 6463278,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 6463278"
                    }
                },
                "JO": {
                    "value": 11503082,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 11503082"
                    }
                },
                "IR": {
                    "value": 24549539,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 24549539"
                    }
                },
                "IQ": {
                    "value": 15564905,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 15564905"
                    }
                },
                "IE": {
                    "value": 49860068,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 49860068"
                    }
                },
                "IS": {
                    "value": 43346894,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 43346894"
                    }
                },
                "IL": {
                    "value": 40043692,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 40043692"
                    }
                },
                "IT": {
                    "value": 30971313,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 30971313"
                    }
                },
                "KZ": {
                    "value": 40727365,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 40727365"
                    }
                },
                "KE": {
                    "value": 39976056,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 39976056"
                    }
                },
                "KG": {
                    "value": 50741166,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 50741166"
                    }
                },
                "KI": {
                    "value": 2739636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 2739636"
                    }
                },
                "KW": {
                    "value": 7143295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 7143295"
                    }
                },
                "LA": {
                    "value": 7006195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 7006195"
                    }
                },
                "LS": {
                    "value": 9845083,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 9845083"
                    }
                },
                "LV": {
                    "value": 41310498,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 41310498"
                    }
                },
                "LB": {
                    "value": 7135983,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 7135983"
                    }
                },
                "LR": {
                    "value": 39902936,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 39902936"
                    }
                },
                "LY": {
                    "value": 20308572,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 20308572"
                    }
                },
                "LI": {
                    "value": 47474524,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 47474524"
                    }
                },
                "LT": {
                    "value": 8883554,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 8883554"
                    }
                },
                "LU": {
                    "value": 24481903,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 24481903"
                    }
                },
                "MK": {
                    "value": 35334757,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 35334757"
                    }
                },
                "MG": {
                    "value": 11872339,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 11872339"
                    }
                },
                "MY": {
                    "value": 10514132,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 10514132"
                    }
                },
                "MW": {
                    "value": 56208722,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 56208722"
                    }
                },
                "MV": {
                    "value": 38076761,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 38076761"
                    }
                },
                "ML": {
                    "value": 14994568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 14994568"
                    }
                },
                "MT": {
                    "value": 40105844,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 40105844"
                    }
                },
                "MA": {
                    "value": 20899017,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 20899017"
                    }
                },
                "MU": {
                    "value": 41637711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 41637711"
                    }
                },
                "MR": {
                    "value": 47481836,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 47481836"
                    }
                },
                "MX": {
                    "value": 35886813,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 35886813"
                    }
                },
                "FM": {
                    "value": 14018414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 14018414"
                    }
                },
                "MD": {
                    "value": 29170731,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 29170731"
                    }
                },
                "MC": {
                    "value": 10124768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 10124768"
                    }
                },
                "MN": {
                    "value": 25935165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 25935165"
                    }
                },
                "ME": {
                    "value": 41182538,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 41182538"
                    }
                },
                "MZ": {
                    "value": 13778946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 13778946"
                    }
                },
                "NA": {
                    "value": 13363989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 13363989"
                    }
                },
                "NP": {
                    "value": 8379025,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 8379025"
                    }
                },
                "NI": {
                    "value": 18157013,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 18157013"
                    }
                },
                "NE": {
                    "value": 38515482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 38515482"
                    }
                },
                "NG": {
                    "value": 17890124,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 17890124"
                    }
                },
                "NO": {
                    "value": 11296518,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 11296518"
                    }
                },
                "NZ": {
                    "value": 10457464,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 10457464"
                    }
                },
                "OM": {
                    "value": 56583463,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 56583463"
                    }
                },
                "UG": {
                    "value": 14343799,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 14343799"
                    }
                },
                "UZ": {
                    "value": 32815768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 32815768"
                    }
                },
                "PK": {
                    "value": 53649518,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 53649518"
                    }
                },
                "PS": {
                    "value": 51136014,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 51136014"
                    }
                },
                "PA": {
                    "value": 23315637,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 23315637"
                    }
                },
                "PG": {
                    "value": 41114902,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 41114902"
                    }
                },
                "PY": {
                    "value": 33548798,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 33548798"
                    }
                },
                "NL": {
                    "value": 35276260,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 35276260"
                    }
                },
                "PE": {
                    "value": 35446265,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 35446265"
                    }
                },
                "PH": {
                    "value": 34322043,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 34322043"
                    }
                },
                "PL": {
                    "value": 45620929,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 45620929"
                    }
                },
                "PT": {
                    "value": 52057328,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 52057328"
                    }
                },
                "QA": {
                    "value": 11426306,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 11426306"
                    }
                },
                "DO": {
                    "value": 40515317,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 40515317"
                    }
                },
                "RO": {
                    "value": 35581537,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 35581537"
                    }
                },
                "GB": {
                    "value": 54682340,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 54682340"
                    }
                },
                "RU": {
                    "value": 1796386,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 1796386"
                    }
                },
                "RW": {
                    "value": 57822849,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 57822849"
                    }
                },
                "KN": {
                    "value": 38996246,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 38996246"
                    }
                },
                "SM": {
                    "value": 26304422,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 26304422"
                    }
                },
                "VC": {
                    "value": 27147131,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 27147131"
                    }
                },
                "LC": {
                    "value": 54422763,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 54422763"
                    }
                },
                "SV": {
                    "value": 1580682,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 1580682"
                    }
                },
                "WS": {
                    "value": 39926700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 39926700"
                    }
                },
                "ST": {
                    "value": 18219165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 18219165"
                    }
                },
                "SN": {
                    "value": 28443185,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 28443185"
                    }
                },
                "RS": {
                    "value": 18800470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 18800470"
                    }
                },
                "SC": {
                    "value": 18802298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 18802298"
                    }
                },
                "SL": {
                    "value": 55503113,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 55503113"
                    }
                },
                "SG": {
                    "value": 7962240,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 7962240"
                    }
                },
                "SK": {
                    "value": 36371234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 36371234"
                    }
                },
                "SI": {
                    "value": 35934342,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 35934342"
                    }
                },
                "SO": {
                    "value": 9839599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 9839599"
                    }
                },
                "SD": {
                    "value": 51008054,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 51008054"
                    }
                },
                "SS": {
                    "value": 29958600,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 29958600"
                    }
                },
                "LK": {
                    "value": 14575955,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 14575955"
                    }
                },
                "SE": {
                    "value": 21619250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 21619250"
                    }
                },
                "CH": {
                    "value": 5958749,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 5958749"
                    }
                },
                "SR": {
                    "value": 5178192,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 5178192"
                    }
                },
                "SZ": {
                    "value": 27730264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 27730264"
                    }
                },
                "SY": {
                    "value": 21582690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 21582690"
                    }
                },
                "TJ": {
                    "value": 50642453,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 50642453"
                    }
                },
                "TZ": {
                    "value": 57495636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 57495636"
                    }
                },
                "TD": {
                    "value": 58550394,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 58550394"
                    }
                },
                "CZ": {
                    "value": 30320544,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 30320544"
                    }
                },
                "TH": {
                    "value": 33437289,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 33437289"
                    }
                },
                "TL": {
                    "value": 12826556,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 12826556"
                    }
                },
                "TG": {
                    "value": 339468,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 339468"
                    }
                },
                "TO": {
                    "value": 38473438,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 38473438"
                    }
                },
                "TT": {
                    "value": 12371383,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 12371383"
                    }
                },
                "TN": {
                    "value": 26536578,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 26536578"
                    }
                },
                "TM": {
                    "value": 15950613,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 15950613"
                    }
                },
                "TR": {
                    "value": 6731994,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 6731994"
                    }
                },
                "TV": {
                    "value": 15522860,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 15522860"
                    }
                },
                "VU": {
                    "value": 44341327,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 44341327"
                    }
                },
                "VE": {
                    "value": 58586954,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 58586954"
                    }
                },
                "VN": {
                    "value": 45536841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 45536841"
                    }
                },
                "UA": {
                    "value": 41019846,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 41019846"
                    }
                },
                "UY": {
                    "value": 41906427,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 41906427"
                    }
                },
                "YE": {
                    "value": 51501615,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 51501615"
                    }
                },
                "ZM": {
                    "value": 55678602,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 55678602"
                    }
                },
                "ZW": {
                    "value": 57040464,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 57040464"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 678406,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 678406"
                    }
                },
                "newyork": {
                    "value": 279913,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 279913"
                    }
                },
                "sydney": {
                    "value": 747363,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 747363"
                    }
                },
                "brasilia": {
                    "value": 140032,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 140032"
                    }
                },
                "tokyo": {
                    "value": 769153,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 769153"
                    }
                }
            }
        },
        "2013": {
            "areas": {
                "AF": {
                    "value": 30428397,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 30428397"
                    }
                },
                "ZA": {
                    "value": 42385364,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 42385364"
                    }
                },
                "AL": {
                    "value": 23215097,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 23215097"
                    }
                },
                "DZ": {
                    "value": 59170087,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 59170087"
                    }
                },
                "DE": {
                    "value": 12696768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 12696768"
                    }
                },
                "AD": {
                    "value": 30181616,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 30181616"
                    }
                },
                "AO": {
                    "value": 59475364,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 59475364"
                    }
                },
                "AG": {
                    "value": 31932843,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 31932843"
                    }
                },
                "SA": {
                    "value": 57555961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 57555961"
                    }
                },
                "AR": {
                    "value": 11777282,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 11777282"
                    }
                },
                "AM": {
                    "value": 18871762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 18871762"
                    }
                },
                "AU": {
                    "value": 12534076,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 12534076"
                    }
                },
                "AT": {
                    "value": 58309098,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 58309098"
                    }
                },
                "AZ": {
                    "value": 37712988,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 37712988"
                    }
                },
                "BS": {
                    "value": 19332419,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 19332419"
                    }
                },
                "BH": {
                    "value": 36539411,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 36539411"
                    }
                },
                "BD": {
                    "value": 58009305,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 58009305"
                    }
                },
                "BB": {
                    "value": 8779358,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 8779358"
                    }
                },
                "BE": {
                    "value": 29035458,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 29035458"
                    }
                },
                "BZ": {
                    "value": 49664472,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 49664472"
                    }
                },
                "BJ": {
                    "value": 9859707,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 9859707"
                    }
                },
                "BT": {
                    "value": 35417017,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 35417017"
                    }
                },
                "BY": {
                    "value": 46109006,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 46109006"
                    }
                },
                "MM": {
                    "value": 27574884,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 27574884"
                    }
                },
                "BO": {
                    "value": 16813431,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 16813431"
                    }
                },
                "BA": {
                    "value": 18416589,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 18416589"
                    }
                },
                "BW": {
                    "value": 38731186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 38731186"
                    }
                },
                "BR": {
                    "value": 35786273,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 35786273"
                    }
                },
                "BN": {
                    "value": 32073599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 32073599"
                    }
                },
                "BG": {
                    "value": 8318701,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 8318701"
                    }
                },
                "BF": {
                    "value": 5030123,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 5030123"
                    }
                },
                "BI": {
                    "value": 49964264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 49964264"
                    }
                },
                "KH": {
                    "value": 38793338,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 38793338"
                    }
                },
                "CM": {
                    "value": 25713977,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 25713977"
                    }
                },
                "CA": {
                    "value": 32983945,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 32983945"
                    }
                },
                "CV": {
                    "value": 15824481,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 15824481"
                    }
                },
                "CF": {
                    "value": 50075772,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 50075772"
                    }
                },
                "CL": {
                    "value": 1343042,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 1343042"
                    }
                },
                "CN": {
                    "value": 920773,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 920773"
                    }
                },
                "CY": {
                    "value": 28832550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 28832550"
                    }
                },
                "CO": {
                    "value": 49074027,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 49074027"
                    }
                },
                "KM": {
                    "value": 15696521,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 15696521"
                    }
                },
                "CG": {
                    "value": 56718735,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 56718735"
                    }
                },
                "CD": {
                    "value": 34704096,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 34704096"
                    }
                },
                "KP": {
                    "value": 48891227,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 48891227"
                    }
                },
                "KR": {
                    "value": 59415040,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 59415040"
                    }
                },
                "CR": {
                    "value": 18805954,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 18805954"
                    }
                },
                "CI": {
                    "value": 9104742,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 9104742"
                    }
                },
                "HR": {
                    "value": 32680496,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 32680496"
                    }
                },
                "CU": {
                    "value": 33289221,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 33289221"
                    }
                },
                "DK": {
                    "value": 35060556,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 35060556"
                    }
                },
                "DJ": {
                    "value": 17550116,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 17550116"
                    }
                },
                "DM": {
                    "value": 13544961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 13544961"
                    }
                },
                "EG": {
                    "value": 47759693,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 47759693"
                    }
                },
                "AE": {
                    "value": 43710666,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 43710666"
                    }
                },
                "EC": {
                    "value": 35705841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 35705841"
                    }
                },
                "ER": {
                    "value": 34537747,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 34537747"
                    }
                },
                "ES": {
                    "value": 3617077,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 3617077"
                    }
                },
                "EE": {
                    "value": 12934408,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 12934408"
                    }
                },
                "US": {
                    "value": 9287542,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 9287542"
                    }
                },
                "ET": {
                    "value": 48861978,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 48861978"
                    }
                },
                "FJ": {
                    "value": 11302002,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 11302002"
                    }
                },
                "FI": {
                    "value": 759909,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 759909"
                    }
                },
                "FR": {
                    "value": 33760846,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 33760846"
                    }
                },
                "GA": {
                    "value": 39670780,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 39670780"
                    }
                },
                "GM": {
                    "value": 31505090,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 31505090"
                    }
                },
                "GE": {
                    "value": 35265292,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 35265292"
                    }
                },
                "GH": {
                    "value": 54841376,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 54841376"
                    }
                },
                "GR": {
                    "value": 20067276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 20067276"
                    }
                },
                "GD": {
                    "value": 54866968,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 54866968"
                    }
                },
                "GT": {
                    "value": 54678684,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 54678684"
                    }
                },
                "GN": {
                    "value": 48194757,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 48194757"
                    }
                },
                "GQ": {
                    "value": 33104593,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 33104593"
                    }
                },
                "GW": {
                    "value": 42078259,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 42078259"
                    }
                },
                "GY": {
                    "value": 27178207,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 27178207"
                    }
                },
                "HT": {
                    "value": 19436615,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 19436615"
                    }
                },
                "HN": {
                    "value": 31985855,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 31985855"
                    }
                },
                "HU": {
                    "value": 43679590,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 43679590"
                    }
                },
                "JM": {
                    "value": 10791989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 10791989"
                    }
                },
                "JP": {
                    "value": 4132574,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 4132574"
                    }
                },
                "MH": {
                    "value": 59764188,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 59764188"
                    }
                },
                "PW": {
                    "value": 20361584,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 20361584"
                    }
                },
                "SB": {
                    "value": 33598154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 33598154"
                    }
                },
                "IN": {
                    "value": 7898260,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 7898260"
                    }
                },
                "ID": {
                    "value": 9742715,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 9742715"
                    }
                },
                "JO": {
                    "value": 22664868,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 22664868"
                    }
                },
                "IR": {
                    "value": 33824826,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 33824826"
                    }
                },
                "IQ": {
                    "value": 6399298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 6399298"
                    }
                },
                "IE": {
                    "value": 44774564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 44774564"
                    }
                },
                "IS": {
                    "value": 11280066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 11280066"
                    }
                },
                "IL": {
                    "value": 39550131,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 39550131"
                    }
                },
                "IT": {
                    "value": 5251312,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 5251312"
                    }
                },
                "KZ": {
                    "value": 58162858,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 58162858"
                    }
                },
                "KE": {
                    "value": 36747803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 36747803"
                    }
                },
                "KG": {
                    "value": 48902195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 48902195"
                    }
                },
                "KI": {
                    "value": 40019928,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 40019928"
                    }
                },
                "KW": {
                    "value": 33060721,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 33060721"
                    }
                },
                "LA": {
                    "value": 59758704,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 59758704"
                    }
                },
                "LS": {
                    "value": 30059140,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 30059140"
                    }
                },
                "LV": {
                    "value": 56420771,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 56420771"
                    }
                },
                "LB": {
                    "value": 42471280,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 42471280"
                    }
                },
                "LR": {
                    "value": 11053393,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 11053393"
                    }
                },
                "LY": {
                    "value": 41049094,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 41049094"
                    }
                },
                "LI": {
                    "value": 30119464,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 30119464"
                    }
                },
                "LT": {
                    "value": 9647659,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 9647659"
                    }
                },
                "LU": {
                    "value": 31022498,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 31022498"
                    }
                },
                "MK": {
                    "value": 50050180,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 50050180"
                    }
                },
                "MG": {
                    "value": 26631634,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 26631634"
                    }
                },
                "MY": {
                    "value": 7592984,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 7592984"
                    }
                },
                "MW": {
                    "value": 50406641,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 50406641"
                    }
                },
                "MV": {
                    "value": 55190525,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 55190525"
                    }
                },
                "ML": {
                    "value": 21622906,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 21622906"
                    }
                },
                "MT": {
                    "value": 19460379,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 19460379"
                    }
                },
                "MA": {
                    "value": 29896448,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 29896448"
                    }
                },
                "MU": {
                    "value": 24648251,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 24648251"
                    }
                },
                "MR": {
                    "value": 20708905,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 20708905"
                    }
                },
                "MX": {
                    "value": 58352970,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 58352970"
                    }
                },
                "FM": {
                    "value": 20032544,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 20032544"
                    }
                },
                "MD": {
                    "value": 16451486,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 16451486"
                    }
                },
                "MC": {
                    "value": 59455256,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 59455256"
                    }
                },
                "MN": {
                    "value": 47523880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 47523880"
                    }
                },
                "ME": {
                    "value": 41405554,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 41405554"
                    }
                },
                "MZ": {
                    "value": 58678354,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 58678354"
                    }
                },
                "NA": {
                    "value": 23677582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 23677582"
                    }
                },
                "NP": {
                    "value": 59976236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 59976236"
                    }
                },
                "NI": {
                    "value": 24756103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 24756103"
                    }
                },
                "NE": {
                    "value": 29656979,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 29656979"
                    }
                },
                "NG": {
                    "value": 8841510,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 8841510"
                    }
                },
                "NO": {
                    "value": 18963162,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 18963162"
                    }
                },
                "NZ": {
                    "value": 50574817,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 50574817"
                    }
                },
                "OM": {
                    "value": 17365487,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 17365487"
                    }
                },
                "UG": {
                    "value": 20562665,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 20562665"
                    }
                },
                "UZ": {
                    "value": 57387784,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 57387784"
                    }
                },
                "PK": {
                    "value": 49602320,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 49602320"
                    }
                },
                "PS": {
                    "value": 19932004,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 19932004"
                    }
                },
                "PA": {
                    "value": 34506671,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 34506671"
                    }
                },
                "PG": {
                    "value": 38603226,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 38603226"
                    }
                },
                "PY": {
                    "value": 42429236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 42429236"
                    }
                },
                "NL": {
                    "value": 5534652,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 5534652"
                    }
                },
                "PE": {
                    "value": 56289154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 56289154"
                    }
                },
                "PH": {
                    "value": 35612613,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 35612613"
                    }
                },
                "PL": {
                    "value": 19696191,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 19696191"
                    }
                },
                "PT": {
                    "value": 32201559,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 32201559"
                    }
                },
                "QA": {
                    "value": 1675738,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 1675738"
                    }
                },
                "DO": {
                    "value": 31569070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 31569070"
                    }
                },
                "RO": {
                    "value": 1993811,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 1993811"
                    }
                },
                "GB": {
                    "value": 8210849,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 8210849"
                    }
                },
                "RU": {
                    "value": 55982050,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 55982050"
                    }
                },
                "RW": {
                    "value": 39575723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 39575723"
                    }
                },
                "KN": {
                    "value": 39862720,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 39862720"
                    }
                },
                "SM": {
                    "value": 51490647,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 51490647"
                    }
                },
                "VC": {
                    "value": 15173712,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 15173712"
                    }
                },
                "LC": {
                    "value": 42785697,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 42785697"
                    }
                },
                "SV": {
                    "value": 34093543,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 34093543"
                    }
                },
                "WS": {
                    "value": 10419076,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 10419076"
                    }
                },
                "ST": {
                    "value": 4666351,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 4666351"
                    }
                },
                "SN": {
                    "value": 54302115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 54302115"
                    }
                },
                "RS": {
                    "value": 35226904,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 35226904"
                    }
                },
                "SC": {
                    "value": 2924264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 2924264"
                    }
                },
                "SL": {
                    "value": 125592,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 125592"
                    }
                },
                "SG": {
                    "value": 57278104,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 57278104"
                    }
                },
                "SK": {
                    "value": 3953430,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 3953430"
                    }
                },
                "SI": {
                    "value": 57084336,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 57084336"
                    }
                },
                "SO": {
                    "value": 7167059,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 7167059"
                    }
                },
                "SD": {
                    "value": 4916787,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 4916787"
                    }
                },
                "SS": {
                    "value": 50713745,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 50713745"
                    }
                },
                "LK": {
                    "value": 51227414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 51227414"
                    }
                },
                "SE": {
                    "value": 1456378,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 1456378"
                    }
                },
                "CH": {
                    "value": 171292,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 171292"
                    }
                },
                "SR": {
                    "value": 16398474,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 16398474"
                    }
                },
                "SZ": {
                    "value": 13431625,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 13431625"
                    }
                },
                "SY": {
                    "value": 48509174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 48509174"
                    }
                },
                "TJ": {
                    "value": 56144742,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 56144742"
                    }
                },
                "TZ": {
                    "value": 11448242,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 11448242"
                    }
                },
                "TD": {
                    "value": 1725094,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 1725094"
                    }
                },
                "CZ": {
                    "value": 4191070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 4191070"
                    }
                },
                "TH": {
                    "value": 36190262,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 36190262"
                    }
                },
                "TL": {
                    "value": 56453675,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 56453675"
                    }
                },
                "TG": {
                    "value": 44185947,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 44185947"
                    }
                },
                "TO": {
                    "value": 53817694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 53817694"
                    }
                },
                "TT": {
                    "value": 13310977,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 13310977"
                    }
                },
                "TN": {
                    "value": 22255395,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 22255395"
                    }
                },
                "TM": {
                    "value": 19142306,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 19142306"
                    }
                },
                "TR": {
                    "value": 53254670,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 53254670"
                    }
                },
                "TV": {
                    "value": 30560013,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 30560013"
                    }
                },
                "VU": {
                    "value": 49244031,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 49244031"
                    }
                },
                "VE": {
                    "value": 14572299,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 14572299"
                    }
                },
                "VN": {
                    "value": 8117620,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 8117620"
                    }
                },
                "UA": {
                    "value": 41140494,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 41140494"
                    }
                },
                "UY": {
                    "value": 8260205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 8260205"
                    }
                },
                "YE": {
                    "value": 28604050,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 28604050"
                    }
                },
                "ZM": {
                    "value": 13872174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 13872174"
                    }
                },
                "ZW": {
                    "value": 28205545,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 28205545"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1025415,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1025415"
                    }
                },
                "newyork": {
                    "value": 785175,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 785175"
                    }
                },
                "sydney": {
                    "value": 477087,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 477087"
                    }
                },
                "brasilia": {
                    "value": 211212,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 211212"
                    }
                },
                "tokyo": {
                    "value": 433935,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 433935"
                    }
                }
            }
        }
    };

    $('input[type=radio][name=casualties-detail]').change(function() {
      if (this.value == 'Military Deaths') {
        $(".world").trigger('update', [{
          mapOptions: data['Military Deaths'],
          animDuration: 300
        }]);
      }
      else if (this.value == 'Civilian Deaths') {
        $(".world").trigger('update', [{
          mapOptions: data['Civilian Deaths'],
          animDuration: 300
        }]);
      }
      else if (this.value == 'Famine and Disease') {
        $(".world").trigger('update', [{
          mapOptions: data['Famine and Disease'],
          animDuration: 300
        }]);
      }      
    });

    // Mapael initialisation
    $world = $(".world");
    $world.mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                attrs: {
                    fill: "#fff",
                    stroke: "#232323",
                    "stroke-width": 0.3
                }
            },
            zoom: {
                enabled: true
                , step: 0.25
                , maxLevel: 20
            }
        },
        legend: {
            area: {
                display: true,
                title: "World War II Casualties Detail",
                marginBottom: 7,
                slices: [
                    {
                        max: 999,
                        attrs: {
                            fill: "#6ECBD4"
                        },
                        label: "< 1.000"
                    },
                    {
                        min: 1000,
                        max: 10000,
                        attrs: {
                            fill: "#3EC7D4"
                        },
                        label: "1.000 - 10.000"
                    },
                    {
                        min: 10001,
                        max: 100000,
                        attrs: {
                            fill: "#028E9B"
                        },
                        label: "10001 - 100000"
                    },
                    {
                        min: 100001,
                        max: 999999,
                        attrs: {
                            fill: "#01565E"
                        },
                        label: "100001 - 1000000"
                    },
                    {
                        min: 1000000,
                        attrs: {
                            fill: "#005569"
                        },
                        label: "> 1000000"
                    }
                ]
            }
        },
        areas: data['Military Deaths']['areas']
    });
});
