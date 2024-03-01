$('.tab').css('display', 'none')
$('#tab-1').css('display', 'block')

// function run(hideTab, showTab) {
//     if(hideTab < showTab){
//         x = $('#tab-' + hideTab)
//         inputs = $(x).find('input')
//         for(var i = 0; i < inputs.length; i++){
//             if(inputs[i].value === ''){
//                 $(inputs[i]).css('background', '#ffdddd')
//                 return false;
//             }
//         }
//     }
//     for (let i = 1; i < showTab; i++) {
//         $('#step-' + i).css('opacity', '1')
//     }
//     $('#tab-' + hideTab).css('display', 'none')
//     $('#tab-' + showTab).css('display', 'block')
// }

function suiv(hide){
     //let show;
    const   x = $('#tab-'+ hide)
     inputs=  $(x).find('input')
     for (let j = 0; j < inputs.length; j++) {
        if(inputs[j].value === ''){
                $(inputs[j]).css('background', '#ffdddd')
                return false;
        }
        
     }
    const i=hide;
    i=i+1;
    $('#step-' + i).css('opacity', '1')

//      for (let i = 1; i < hide; i++) {
//               $('#step-' + i).css('opacity', '1')
//        }
        
       $('#tab-'+hide).css('display', 'none')
               hide=hide+1
       $('#tab-'+hide).css('display', 'block')
}
function prece(hide){
    //let show;
//    const   x = $('#tab-'+ hide)
//     inputs=  $(x).find('input')
//     for (let j = 0; j < inputs.length; j++) {
//        if(inputs[i].value === ''){
//                $(inputs[j]).css('background', '#ffdddd')
//                return false;
//        }
       
//     }
    for (let i = hide; i> 1; i--) {
             $('#step-' + i).css('opacity', '0.5')
      }
      $('#tab-'+hide).css('display', 'none')
              hide=hide-1
      $('#tab-'+hide).css('display', 'block')
}