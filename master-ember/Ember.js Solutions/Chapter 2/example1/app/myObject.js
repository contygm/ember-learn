import Ember from 'ember';
export default function() {
	const Light = Ember.Object.extend({
		// invoked on instance creation
		// put anything you need at the start here
		init(){
			alert("The isON property is defaulted to " + this.get("isOn"));
		},
		isOn: false
	});
	// reopen and reopenClass let you access and change a class after creation
	// reopen -> add non-static prop
	Light.reopen({
		color: 'yellow'
	});
	// reopen -> add STATIC prop
	Light.reopenClass({
		wattage: 80
	});
	// instance of light created
	const bulb = Light.create();
	// get is an 'accessor method'
	console.log(bulb.get('color'));
	// access STATIC prop
	console.log(Light.wattage);
	// use set to change property values on the class
	bulb.set('isOn', true)
}

// _super
// 		override methods and access parent class
//		creates new obj the uses Ember.extend on parent class
