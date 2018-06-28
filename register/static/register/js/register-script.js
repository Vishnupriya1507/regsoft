function changeSport(e){document.getElementById("select-sport-btn").innerHTML=e.innerHTML;var t=parseInt(e.getElementsByTagName("span")[0].innerHTML),a=e.getElementsByTagName("span")[1].innerHTML;sortLeftDisabling(),emptyRightTable(),fetchRightTable(t,a),document.getElementById("submit-part-btn").style.display="inline-block"}function toggleCaptain(e){e.parentElement.parentElement.parentElement.parentElement.classList.contains("disabled-right-part")?Materialize.toast("Can't switch status, contact PCR if you wish to.",3e3):'<i class="material-icons">check_box_outline_blank</i>'==e.innerHTML?(e.innerHTML='<i class="material-icons">check_box</i>',e.parentElement.parentElement.classList.add("selected-part-captain")):(e.innerHTML='<i class="material-icons">check_box_outline_blank</i>',e.parentElement.parentElement.classList.remove("selected-part-captain"))}function toggleCoach(e){e.parentElement.parentElement.parentElement.parentElement.classList.contains("disabled-right-part")?Materialize.toast("Can't switch status, contact PCR if you wish to.",3e3):'<i class="material-icons">check_box_outline_blank</i>'==e.innerHTML?(e.innerHTML='<i class="material-icons">check_box</i>',e.parentElement.parentElement.classList.add("selected-part-coach")):(e.innerHTML='<i class="material-icons">check_box_outline_blank</i>',e.parentElement.parentElement.classList.remove("selected-part-coach"))}function sortLeftDisabling(){for(var e=[],t=0;t<document.getElementsByClassName("left-part-content-row").length;t++){var a=document.getElementsByClassName("left-part-content-row")[t].children[0].innerHTML,l=document.getElementsByClassName("left-part-content-row")[t].children[1].innerHTML,n=document.getElementsByClassName("left-part-content-row")[t].children[2].innerHTML,r=parseInt(document.getElementsByClassName("left-part-content-row")[t].children[3].innerHTML),s=0,i=0;document.getElementsByClassName("left-part-content-row")[t].parentElement.parentElement.parentElement.classList.contains("disabled-collection-item")&&(s=1),document.getElementsByClassName("left-part-content-row")[t].parentElement.parentElement.parentElement.classList.contains("disabled-coach-item")&&(i=1),e.push([a,l,n,r,s,i])}e=e.sort(function(e,t){return e[0].toLowerCase().localeCompare(t[0].toLowerCase())}),document.getElementById("reg-parts-ul").innerHTML='<li class="collection-item table-top-header-item"> <table class="table-top-header centered"> <tr class="table-top-header-row"> <td id="left-table-top-name-col">Name</td><td id="left-table-top-sport-col">Sports</td><td id="left-table-top-gender-col">Gender</td><td id="left-table-top-pk-col">ID No.</td><td id="left-table-top-add-col">Add</td></tr></table> </li>';for(t=0;t<e.length;t++)0==e[t][5]?document.getElementById("reg-parts-ul").innerHTML+='<li class="collection-item avatar disabled-collection-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+e[t][0]+'</td><td class="part-sport-flex">'+e[t][1]+'</td><td class="part-gender-flex">'+e[t][2]+'</td><td class="part_pk">'+e[t][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>':1==e[t][4]&&1==e[t][5]&&(document.getElementById("reg-parts-ul").innerHTML+='<li class="collection-item avatar disabled-collection-item disabled-coach-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+e[t][0]+'</td><td class="part-sport-flex">'+e[t][1]+'</td><td class="part-gender-flex">'+e[t][2]+'</td><td class="part_pk">'+e[t][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>')}$(document).ready(function(){$(".tap-target").tapTarget("open"),$(".modal").modal(),$(".dropdown-button").dropdown({inDuration:300,outDuration:225,constrainWidth:!1,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1}),$("select").material_select(),$("input#part-phone-1").characterCounter(),fetchLeftTable(),fetchSportList(),emptyRightTable(),document.getElementById("submit-part-btn").style.display="none",console.clear()});var num_add_parts=0;function resetAddPartModal(){0!=participantsSaved?$("#add-part-modal").modal("open"):Materialize.toast("Please wait while participants are being saved",3e3),num_add_parts=0,document.getElementById("add-part-modal").innerHTML='<div class="modal-content"> <h5 class="center-align">Add Details</h5> <form id="add-parts-modal-wrapper"> </form><div class="row center"> <div class="col s12 center"> <a class="waves-effect waves-light btn custom-btn z-depth-5" id="add-part-modal-btn" onclick="addParticipant()"><i class="material-icons left">person_add</i>Add More</a> </div></div><div class="row center"> <div class="col s12 center"> <a class="waves-effect waves-light btn custom-btn z-depth-5" id="submit-part-modal-btn" onclick="submitParticipant()"><i class="material-icons right">send</i>Submit Participants</a> </div></div></div><div class="modal-footer teal lighten-4" id="add-part-modal-footer"> <a class="modal-action modal-close white black-text btn-flat hover-effect">Close</a> </div>',addParticipant()}function addParticipant(){var e='<div class="col s11"> <div class="row"> <div class="input-field col s6"> <i class="material-icons prefix">account_circle</i> <input id="part-name-'+ ++num_add_parts+'" name="part-name-'+num_add_parts+'" type="text" class="validate" required="required"> <label for="part-name-'+num_add_parts+'" data-error="Enter Name">Name</label> </div><div class="input-field col s6"> <i class="material-icons prefix">email</i> <input id="part-email-'+num_add_parts+'" name="part-email-'+num_add_parts+'" type="email" class="validate" required="required"> <label for="part-email-'+num_add_parts+'" data-error="Wrong Email">Email</label> </div></div><div class="row"> <div class="input-field col s6"> <i class="material-icons prefix">phone</i> <input id="part-phone-'+num_add_parts+'" name="part-phone-'+num_add_parts+'" type="tel" class="validate" maxlength="10" data-length="10" required="required"> <label for="part-phone-'+num_add_parts+'" data-error="Enter Mobile Number">Mobile Number</label> </div><div class="input-field col s6"> <i class="material-icons prefix">face</i> <select id="part-gender-'+num_add_parts+'" required="required"> <option value="" disabled selected>Choose your Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <label data-error="Select Gender">Gender</label> </div></div></div><div class="col s1 center valign-wrapper flex-center"> <a class="hover-effect" onclick="delParticipant(this)"><i class="material-icons remove-btn-color">remove_circle</i></a> </div>',t=document.createElement("div");t.classList=["modal-added-participant row match-height"],t.innerHTML=e,document.getElementById("add-parts-modal-wrapper").insertBefore(t,null),$("select").material_select(),Materialize.updateTextFields(),$("input#part-phone-"+num_add_parts).characterCounter()}function delParticipant(e){var t=document.getElementById("add-parts-modal-wrapper"),a=e.parentElement.parentElement;t.removeChild(a)}function submitParticipant(){for(var e=serializeArray(document.getElementById("add-parts-modal-wrapper")),t=!0,a=!0,l=!0,n=!0,r=0;r<e.length;r+=3){if(""==e[r].value){n=!1;break}if(!validatePhoneNumber(e[r+2].value)){a=!1;break}if(!validateEmail(e[r+1].value)){t=!1;break}}for(r=0;r<document.getElementsByClassName("modal-added-participant").length;r++)""==document.getElementsByClassName("modal-added-participant")[r].getElementsByClassName("s11")[0].getElementsByClassName("row")[1].getElementsByClassName("s6")[1].getElementsByTagName("select")[0].value&&(l=!1);if(l)if(a)if(t)if(n){for(var s=[],i=(r=0,0);r<e.length;r+=3,i++){var c={name:e[r].value,email:e[r+1].value,phone:parseInt(e[r+2].value),gender:document.getElementsByClassName("modal-added-participant")[i].getElementsByClassName("s11")[0].getElementsByClassName("row")[1].getElementsByClassName("s6")[1].getElementsByTagName("select")[0].value};s.push(c)}sendAddPartData({data:s})}else Materialize.toast("Please fill all the name fields!",3e3);else Materialize.toast("One or more email(s) are incorrect!",3e3);else Materialize.toast("One or more Mobile number(s) are incorrect!",3e3);else Materialize.toast("Please select gender of all Participants!",3e3)}function emptyRightTable(){document.getElementById("select-parts-ul").innerHTML=""}function activateLeftTable(e,t){for(var a=[],l=0;l<document.getElementsByClassName("left-part-content-row").length;l++){var n=document.getElementsByClassName("left-part-content-row")[l].children[0].innerHTML,r=document.getElementsByClassName("left-part-content-row")[l].children[1].innerHTML,s=document.getElementsByClassName("left-part-content-row")[l].children[2].innerHTML,i=parseInt(document.getElementsByClassName("left-part-content-row")[l].children[3].innerHTML),c=0,o=0;document.getElementsByClassName("left-part-content-row")[l].parentElement.parentElement.parentElement.classList.contains("disabled-collection-item")&&(c=1),document.getElementsByClassName("left-part-content-row")[l].parentElement.parentElement.parentElement.classList.contains("disabled-coach-item")&&(o=1),a.push([n,r,s,i,c,o])}document.getElementById("reg-parts-ul").innerHTML='<li class="collection-item table-top-header-item"> <table class="table-top-header centered"> <tr class="table-top-header-row"> <td id="left-table-top-name-col">Name</td><td id="left-table-top-sport-col">Sports</td><td id="left-table-top-gender-col">Gender</td><td id="left-table-top-pk-col">ID No.</td><td id="left-table-top-add-col">Add</td></tr></table> </li>';for(l=0;l<a.length;l++)if(1==a[l][5])document.getElementById("reg-parts-ul").innerHTML+='<li class="collection-item avatar disabled-collection-item disabled-coach-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+a[l][0]+'</td><td class="part-sport-flex">'+a[l][1]+'</td><td class="part-gender-flex">'+a[l][2]+'</td><td class="part_pk">'+a[l][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>';else{for(var d=!1,p=0;p<e.length;p++)if(a[l][3]==e[p]){d=!0;break}document.getElementById("reg-parts-ul").innerHTML+=d?'<li class="collection-item avatar disabled-collection-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+a[l][0]+'</td><td class="part-sport-flex">'+a[l][1]+'</td><td class="part-gender-flex">'+a[l][2]+'</td><td class="part_pk">'+a[l][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>':'<li class="collection-item avatar"> <table class="left-part-content-table centered"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+a[l][0]+'</td><td class="part-sport-flex">'+a[l][1]+'</td><td class="part-gender-flex">'+a[l][2]+'</td><td class="part_pk">'+a[l][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>'}}function resetSportSelection(){document.getElementById("select-sport-btn").innerHTML='<i class="material-icons left">directions_run</i>Select Sport',document.getElementById("submit-part-btn").style.display="none"}function addToRight(e){if(e.parentElement.parentElement.parentElement.parentElement.classList.contains("disabled-left-part"))Materialize.toast("This participant can't be added for this sport!",3e3);else{var t='<table class="right-part-content-table centered"> <tr class="right-part-content-row" valign="middle"> <td class="right-part-name-flex">'+e.parentElement.parentElement.children[0].innerHTML+'</td><td class="right-part-sport-flex">'+e.parentElement.parentElement.children[1].innerHTML+'</td><td class="right-part-gender-flex">'+e.parentElement.parentElement.children[2].innerHTML+'</td><td class="part_pk">'+parseInt(e.parentElement.parentElement.children[3].innerHTML)+'</td><td class="right-part-coptain-check"><a class="btn cap-coach-btn" onclick="toggleCaptain(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCoach(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="remove-right-button-wrapper"><a class="hover-effect" onclick="removefromRight(this)"><i class="material-icons remove-btn-color">remove_circle</i></a></td></tr></table>',a=document.createElement("li");a.classList=["collection-item avatar selected-part"],a.innerHTML=t,document.getElementById("select-parts-ul").insertBefore(a,document.getElementById("select-parts-ul").getElementsByClassName("collection-item")[1]),e.parentElement.parentElement.parentElement.parentElement.classList.add("disabled-left-part"),e.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("disabled-collection-item")}}function removefromRight(e){if(e.parentElement.parentElement.parentElement.parentElement.classList.contains("disabled-right-part"))Materialize.toast("Can\t remove this participant, contact PCR if you wish to!",3e3);else{enableLeftRow(parseInt(e.parentElement.parentElement.children[3].innerHTML));var t=e.parentElement.parentElement.parentElement.parentElement.parentElement;document.getElementById("select-parts-ul").removeChild(t)}}function enableLeftRow(e){for(var t=0;t<document.getElementsByClassName("left-part-content-row").length;t++){parseInt(document.getElementsByClassName("left-part-content-row")[t].children[3].innerHTML)==e&&(document.getElementsByClassName("left-part-content-row")[t].parentElement.parentElement.classList.remove("disabled-left-part"),document.getElementsByClassName("left-part-content-row")[t].parentElement.parentElement.parentElement.classList.remove("disabled-collection-item"))}}function submitSportParts(){for(var e=[],t=0,a=parseInt(document.getElementById("select-sport-btn").getElementsByTagName("span")[0].innerHTML),l=0;l<document.getElementsByClassName("right-part-content-row").length;l++)if(!document.getElementsByClassName("right-part-content-row")[l].parentElement.parentElement.classList.contains("disabled-right-part")){var n=0,r=0;document.getElementsByClassName("right-part-content-row")[l].classList.contains("selected-part-captain")&&(n=a,t++),document.getElementsByClassName("right-part-content-row")[l].classList.contains("selected-part-coach")&&(r=a);var s={captain:n,coach:r,pk:parseInt(document.getElementsByClassName("right-part-content-row")[l].children[3].innerHTML)};e.push(s)}t>1?Materialize.toast("A Sport cannot have more than one Captain!",3e3):1==participantsSaved?sendPartSportData({data:e,sport_id:a}):Materialize.toast("Please wait for participants to be updated!",3e3)}function checkFetchedSports(){""==document.getElementById("sport-dropdown").innerHTML&&Materialize.toast("Please wait while we are retriving the list!",3e3)}function fetchLeftTable(){document.getElementById("reg-parts-ul").innerHTML="";var e=getCookie("csrftoken"),t=new XMLHttpRequest;t.open("POST","playerlist/",!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("X-CSRFToken",e),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){document.getElementById("reg-parts-ul").innerHTML='<li class="collection-item table-top-header-item"> <table class="table-top-header centered"> <tr class="table-top-header-row"> <td id="left-table-top-name-col">Name</td><td id="left-table-top-sport-col">Sports</td><td id="left-table-top-gender-col">Gender</td><td id="left-table-top-pk-col">ID No.</td><td id="left-table-top-add-col">Add</td></tr></table> </li>';for(var e=JSON.parse(t.responseText).data,a=0;a<e.length;a++){for(var l="",n=0;n<e[a][1].length;n++)l+=e[a][1][n],n!=e[a][1].length-1&&(l+="<br>");0==e[a][4]?document.getElementById("reg-parts-ul").innerHTML+='<li class="collection-item avatar disabled-collection-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+e[a][0]+'</td><td class="part-sport-flex">'+l+'</td><td class="part-gender-flex">'+e[a][2]+'</td><td class="part_pk">'+e[a][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>':document.getElementById("reg-parts-ul").innerHTML+='<li class="collection-item avatar disabled-collection-item disabled-coach-item"> <table class="left-part-content-table centered disabled-left-part"> <tr class="left-part-content-row" valign="middle"> <td class="part-name-flex">'+e[a][0]+'</td><td class="part-sport-flex">'+l+'</td><td class="part-gender-flex">'+e[a][2]+'</td><td class="part_pk">'+e[a][3]+'</td><td class="add-right-button-wrapper"><a class="hover-effect" onclick="addToRight(this)"><i class="material-icons add-btn-color">add_circle</i></a></td></tr></table> </li>'}emptyRightTable(),resetSportSelection()}else 4===t.readyState&&200!=t.status&&Materialize.toast("Error while Fetching!",2e3)},t.send("")}var participantsSaved=1;function sendAddPartData(e){Materialize.toast("Saving Participants!",3e3),participantsSaved=0,$("#add-part-modal").modal("close");var t=getCookie("csrftoken"),a=new XMLHttpRequest,l=JSON.stringify(e);a.open("POST","add/",!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("X-CSRFToken",t),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var e=JSON.parse(a.responseText);null!=e.error?triggerError(e.error):(Materialize.toast("Your Partipants have been Saved!",2e3),fetchLeftTable()),participantsSaved=1}else 4===a.readyState&&200!=a.status&&(Materialize.toast("Error while connecting!",2e3),participantsSaved=1)},a.send(l)}function fetchRightTable(e,t){document.getElementById("select-parts-ul").innerHTML="";var a=getCookie("csrftoken"),l=new XMLHttpRequest,n={sport_id:e},r=JSON.stringify(n);l.open("POST","show/",!0),l.setRequestHeader("Content-type","application/json"),l.setRequestHeader("X-CSRFToken",a),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var e=JSON.parse(l.responseText);if(null!=e.error)triggerError(e.error);else{var a=e.data;document.getElementById("select-parts-ul").innerHTML='<li class="collection-item table-top-header-item"> <table class="table-top-header centered"> <tr class="table-top-header-row"> <td id="right-table-top-name-col">Name</td><td id="right-table-top-sport-col">Sports</td><td id="right-table-top-gender-col">Gender</td><td id="right-table-top-pk-col">ID No.</td><td id="right-table-top-cap-col">Captain</td><td id="right-table-top-coach-col">Coach</td><td id="right-table-top-remove-col">Remove</td></tr></table> </li>';for(var n=0;n<a.length;n++){for(var r="",s=0;s<a[n][1].length;s++)r+=a[n][1][s],s!=a[n][1].length-1&&(r+="<br>");0==a[n][4]&&0==a[n][5]?document.getElementById("select-parts-ul").innerHTML+='<li class="collection-item avatar selected-part disabled-collection-item"> <table class="right-part-content-table centered disabled-right-part"> <tr class="right-part-content-row" valign="middle"> <td class="right-part-name-flex">'+a[n][0]+'</td><td class="right-part-sport-flex">'+r+'</td><td class="right-part-gender-flex">'+a[n][2]+'</td><td class="part_pk">'+a[n][3]+'</td><td class="right-part-coptain-check"><a class="btn cap-coach-btn" onclick="toggleCaptain(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCoach(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="remove-right-button-wrapper"><a class="hover-effect" onclick="removefromRight(this)"><i class="material-icons remove-btn-color">remove_circle</i></a></td></tr></table> </li>':1==a[n][4]&&0==a[n][5]?document.getElementById("select-parts-ul").innerHTML+='<li class="collection-item avatar selected-part disabled-collection-item"> <table class="right-part-content-table centered disabled-right-part"> <tr class="right-part-content-row selected-part-captain" valign="middle"> <td class="right-part-name-flex">'+a[n][0]+'</td><td class="right-part-sport-flex">'+r+'</td><td class="right-part-gender-flex">'+a[n][2]+'</td><td class="part_pk">'+a[n][3]+'</td><td class="right-part-coptain-check"><a class="btn cap-coach-btn" onclick="toggleCaptain(this)"><i class="material-icons">check_box</i></a></td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCoach(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="remove-right-button-wrapper"><a class="hover-effect" onclick="removefromRight(this)"><i class="material-icons remove-btn-color">remove_circle</i></a></td></tr></table> </li>':0==a[n][4]&&1==a[n][5]?document.getElementById("select-parts-ul").innerHTML+='<li class="collection-item avatar selected-part disabled-collection-item"> <table class="right-part-content-table centered disabled-right-part"> <tr class="right-part-content-row selected-part-coach" valign="middle"> <td class="right-part-name-flex">'+a[n][0]+'</td><td class="right-part-sport-flex">'+r+'</td><td class="right-part-gender-flex">'+a[n][2]+'</td><td class="part_pk">'+a[n][3]+'</td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCaptain(this)"><i class="material-icons">check_box_outline_blank</i></a></td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCoach(this)"><i class="material-icons">check_box</i></a></td><td class="remove-right-button-wrapper"><a class="hover-effect" onclick="removefromRight(this)"><i class="material-icons remove-btn-color">remove_circle</i></a></td></tr></table> </li>':document.getElementById("select-parts-ul").innerHTML+='<li class="collection-item avatar selected-part disabled-collection-item"> <table class="right-part-content-table centered disabled-right-part"> <tr class="right-part-content-row selected-part-captain selected-part-coach" valign="middle"> <td class="right-part-name-flex">'+a[n][0]+'</td><td class="right-part-sport-flex">'+r+'</td><td class="right-part-gender-flex">'+a[n][2]+'</td><td class="part_pk">'+a[n][3]+'</td><td class="right-part-coptain-check"><a class="btn cap-coach-btn" onclick="toggleCaptain(this)"><i class="material-icons">check_box</i></a></td><td class="right-part-coach-check"><a class="btn cap-coach-btn" onclick="toggleCoach(this)"><i class="material-icons">check_box</i></a></td><td class="remove-right-button-wrapper"><a class="hover-effect" onclick="removefromRight(this)"><i class="material-icons remove-btn-color">remove_circle</i></a></td></tr></table> </li>'}var i=[];for(n=0;n<a.length;n++)i.push(a[n][3]);activateLeftTable(i,t)}}else 4===l.readyState&&200!=l.status&&Materialize.toast("Error while connecting!",2e3)},l.send(r)}function fetchSportList(){document.getElementById("sport-dropdown").innerHTML="";var e=getCookie("csrftoken"),t=new XMLHttpRequest;t.open("POST","sport/",!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("X-CSRFToken",e),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){document.getElementById("sport-dropdown").innerHTML="";for(var e=JSON.parse(t.responseText).data,a=0;a<e.length;a++)document.getElementById("sport-dropdown").innerHTML+='<li><a class="hover-effect" onclick="changeSport(this)"><span class="select-sport-pk">'+e[a][0]+"</span>"+e[a][1]+'<span class="select-sport-gender">'+e[a][2]+"</span></a></li>"}else 4===t.readyState&&200!=t.status&&Materialize.toast("Error while Fetching!",2e3)},t.send("")}function sendPartSportData(e){Materialize.toast("Submitting participants!",3e3),participantsSaved=0;var t=getCookie("csrftoken"),a=new XMLHttpRequest,l=JSON.stringify(e);a.open("POST","submit/",!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("X-CSRFToken",t),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var e=JSON.parse(a.responseText);null!=e.error?triggerError(e.error):(Materialize.toast("Your Partipants have been Saved!",2e3),fetchLeftTable(),emptyRightTable(),resetSportSelection()),participantsSaved=1}else 4===a.readyState&&200!=a.status&&(Materialize.toast("Error while connecting!",2e3),participantsSaved=1)},a.send(l)}function triggerError(e){$("#error-modal").modal("open"),document.getElementById("error-msg").innerHTML=e}function serializeArray(e){var t,a,l=[];if("object"==typeof e&&"FORM"==e.nodeName)for(var n=e.elements.length,r=0;r<n;r++)if((t=e.elements[r]).name&&!t.disabled&&"file"!=t.type&&"reset"!=t.type&&"submit"!=t.type&&"button"!=t.type)if("select-multiple"==t.type)for(a=e.elements[r].options.length,j=0;j<a;j++)t.options[j].selected&&(l[l.length]={name:t.name,value:t.options[j].value});else("checkbox"!=t.type&&"radio"!=t.type||t.checked)&&(l[l.length]={name:t.name,value:t.value});return l}function validateEmail(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function validatePhoneNumber(e){return!!e.match(/^\d{10}$/)}function getCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}