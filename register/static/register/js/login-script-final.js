function closelogin(){document.getElementById("login").style.width="0"}function closesignup(){document.getElementById("signup").style.width="0"}function login(){document.getElementById("login").style.width="100%"}function signup(){document.getElementById("signup").style.width="100%",resetRegisterForm(),fetchSportList()}function fetchSportList(){Materialize.toast("Fetching Sport List!",4e3),csrf_token=getCookie("csrftoken");var e=new XMLHttpRequest;e.open("POST","/register/sportlist/",!0),e.setRequestHeader("Content-type","application/json"),e.setRequestHeader("X-CSRFToken",csrf_token),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){Materialize.toast("Updated Form!",3e3);var t=JSON.parse(e.responseText),a=t.data,i=t.college;document.getElementById("sport_select").innerHTML='<option value="" disabled="disabled" selected="selected"></option>';for(var o=0;o<a.length;o++)document.getElementById("sport_select").innerHTML+='<option value="'+a[o][0]+'">'+a[o][1]+"</option>";for(document.getElementById("college_field").innerHTML='<option value="" disabled="disabled" selected="selected"></option>',o=0;o<i.length;o++)document.getElementById("college_field").innerHTML+='<option value="'+i[o][3]+'">'+i[o][0]+", "+i[o][1]+", "+i[o][2]+"</option>";$("select").material_select(),Materialize.updateTextFields()}else 4===e.readyState&&403===e.status?Materialize.toast("Authentication Error, Please Refresh the Page!",3e3):4===e.readyState&&200!=e.status&&Materialize.toast("There was some error connecting to the server!",3e3)},e.send("")}function getCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function resetRegisterForm(){document.getElementById("register-form").innerHTML='<div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">person</i> <input type="text" name="Name" id="name_field" class="validate" required="required" maxlength="100"> <label for="name_field" data-error="Enter your Name">Name</label> </div></div><div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">email</i> <input type="email" name="Email" id="email_field" class="validate" required="required" maxlength="100"> <label for="email_field" data-error="Enter a Valid Email">E-Mail</label> </div></div><div class="row"> <div class="input-field col m6 s12"> <i class="material-icons prefix">create</i> <input type="text" name="Username" id="username_field" class="validate" required="required" maxlength="50"> <label for="username_field" data-error="Enter your Username">Username (Case Sensitive)</label> </div><div class="input-field col m6 s12"> <i class="material-icons prefix">lock_outline</i> <input type="password" name="Password" id="password_field" class="validate" required="required" maxlength="50"> <label for="password_field" data-error="Enter a Valid Password">Password</label> </div></div><div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">people</i> <select id="participant_coach_select" name="register_as"> <option value="" disabled="disabled" selected="selected"></option> <option value="L">Captain</option> <option value="P">Participant</option> <option value="C">Coach</option> </select> <label for="participant_coach_select" data-error="Register As Captain/Participant/Coach">Register As</label> </div></div><div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">local_phone</i> <input type="text" name="Phone" id="phone_field" class="validate" required="required" maxlength="10" data-length="10"> <label for="phone_field" data-error="Enter your Phone Number">Phone Number</label> </div></div><div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">business</i> <select id="college_field" name="College"> <option value="" disabled="disabled" selected="selected"></option> </select> <label for="college_field" data-error="Enter your College Name">College</label><span class="helper-text">If you can\'t find your college, Contact : <a href="mailto:pcr@bits-bosm.org?subject=Request%20for%20adding%20college&body=College%20Name%20%3A%20%0ACity%20%3A%20%0AState%20%3A%20">pcr@bits-bosm.org</a></span> </div></div><div class="row"> <div class="input-field col s12"> <i class="material-icons prefix">directions_run</i> <select id="sport_select" multiple="multiple" required="required" name="sport_select"> <option value="" disabled="disabled" selected="selected"></option> </select> <label for="sport_select" data-error="Enter Sport">Sport</label> </div></div><div class="row"> <div class="col s4 center"> Gender </div><div class="col s4 center"> <input type="radio" name="gender" id="indi_male" value="male" required="required"> <label for="indi_male">Male</label> </div><div class="col s4 center"> <input type="radio" name="gender" id="indi_female" value="female" required="required"> <label for="indi_female">Female</label> </div></div><div class="row center"> <div class="col s12 center"> <div id="captcha_container"></div></div></div><div class="row center"> <button class="btn green waves-effect waves-light" id="submit-form-btn" type="submit" name="action" onclick="submitRegisterForm()">Submit <i class="material-icons right large">send</i> </button> </div>',$("input#phone_field").characterCounter(),reloadCaptcha()}function submitRegisterForm(){for(var e=serializeArray(document.getElementById("register-form")),t=e[0].value,a=e[1].value,i=e[2].value,o=e[3].value,l=e[4].value,r=e[5].value,s=parseInt(e[6].value),n=[],d=7;"sport_select"==e[d].name;){if(7!=d){var c=parseInt(e[d].value);n.push(c)}if(void 0==e[++d])break}if(void 0==e[d]||void 0==e[d+1])Materialize.toast("Please Select Gender!",4e3);else{var m=e[d].value;""==l?Materialize.toast("You Must Register as either Captain/Participant/Coach!",4e3):0==n.length?Materialize.toast("You Must Register in atleast one Sport!",4e3):validatePhoneNumber(r)?validateEmail(a)?""==s?Materialize.toast("Please Select your College!",3e3):""==t||""==i||""==o?Materialize.toast("Please Fill all Fields!",3e3):""==grecaptcha.getResponse()?Materialize.toast("Please Verify Captcha!",3e3):sendRegisterData({name:t,email:a,username:i,password:o,register_as:l,phone:parseInt(r),college:s,sport_id:n,gender:m,captcha:grecaptcha.getResponse()}):Materialize.toast("Incorrect Email",3e3):Materialize.toast("Incorrect Phone Number",3e3)}}function sendRegisterData(e){document.getElementById("loader").style.display="block",Materialize.toast("Submitting Please Wait!",4e3),csrf_token=getCookie("csrftoken");var t=JSON.stringify(e),a=new XMLHttpRequest;a.open("POST","register/",!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("X-CSRFToken",csrf_token),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var e=JSON.parse(a.responseText);null!=e.error?"activation mail has been sent. please activate your account and wait for further correspondence"==e.error?(Materialize.toast("You are Registered!",4e3),$("#sent-email-modal").modal("open"),closesignup()):(triggerError(e.error),grecaptcha.reset()):1==e.success&&(closesignup(),Materialize.toast("You are Registered!",4e3),$("#sent-email-modal").modal("open")),document.getElementById("loader").style.display="none"}else 4===a.readyState&&200!=a.status&&(Materialize.toast("There was some error connecting to the server!",3e3),document.getElementById("loader").style.display="none")},a.send(t)}function triggerError(e){$("#error-modal").modal("open"),document.getElementById("error-msg").innerHTML=e}function serializeArray(e){var t,a,i=[];if("object"==typeof e&&"FORM"==e.nodeName)for(var o=e.elements.length,l=0;l<o;l++)if((t=e.elements[l]).name&&!t.disabled&&"file"!=t.type&&"reset"!=t.type&&"submit"!=t.type&&"button"!=t.type)if("select-multiple"==t.type)for(a=e.elements[l].options.length,j=0;j<a;j++)t.options[j].selected&&(i[i.length]={name:t.name,value:t.options[j].value});else("checkbox"!=t.type&&"radio"!=t.type||t.checked)&&(i[i.length]={name:t.name,value:t.value});return i}function validateEmail(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function validatePhoneNumber(e){return!!e.match(/^\d{10}$/)}function getCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function reloadCaptcha(){grecaptcha.render("captcha_container",{sitekey:"6LcNq10UAAAAAEI1OCTzADo2HtFQcgHoCY_b8OcD",callback:function(e){}})}$(document).ready(function(){$(".modal").modal(),$(".button-collapse").sideNav({menuWidth:300,closeOnClick:!0}),document.getElementById("loader").style.display="none",document.getElementsByTagName("body")[0].style.overflow="auto",console.clear(),(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&setTimeout(function(){Materialize.toast("This page can be viewed in portrait mode!",3e3)},5e3)});