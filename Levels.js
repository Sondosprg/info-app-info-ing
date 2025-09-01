/* open content specailty
 */

let plus = document.getElementById('plus');
let specialty = document.getElementById('specialty');
let mode = 'open';


plus.addEventListener('click', () => {

   if (mode == 'open') {

      specialty.style.display = 'block';
      plus.style.fill = 'transparent';
      mode = 'close';

   }
   else {
      specialty.style.display = 'none';
      mode = 'open';


   }

});

