AFRAME.registerSystem('states', {
  schema: {
      //States
    table: {default: 0}, //0 -> Cake not eaten, 1 -> Keys not taken, 2 -> Door not opened
    key: {default: false},
    door: {default:false},
  },  // System schema. Parses into `this.data`.

  init: function () {
    // Called on scene initialization.
    console.log('Initial function from system!');
  },

});

AFRAME.registerComponent('states', {
  init: function () {
    console.log(this);
    this.el.addEventListener('click', () => {

      var id = this.el.getAttribute("id");

      if (id == "table" && this.system.data.table == 0){

        this.system.data.table = 1;

        console.log('Cake disapear');

        //Reshaping of the table model
        this.el.setAttribute("gltf-model","#keys-gltf");
        this.el.setAttribute("scale","1.7 1 2");
        this.el.setAttribute("position","87.17 308.69 685.04");
        this.el.setAttribute("rotation","-90 -116 90");

      }else if (id == "table" && this.system.data.table == 1){

        this.system.data.table = 2;

        this.system.data.key = true;

        let audio = document.querySelector("#keys-audio");
        audio.play();
       
        console.log('You got the keys');

        //Table is destroyed
        var entity = this.el;
        entity.parentNode.removeChild(table);

      }else if (id == "door" && this.system.data.table == 2){

        this.system.data.door = true;

        this.el.setAttribute("position","0 1.5 -0.5");

        console.log('The door has been opened... :v');

      }else{

        console.log('Sorry but you cannot do that... yet');

      }
    });

  }


});